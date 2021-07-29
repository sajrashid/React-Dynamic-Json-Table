import { matchSorter } from 'match-sorter'

const get = (obj, path, defaultValue = undefined) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};


function templateLiteral(template, context = {}) {
  return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
    var value = get(context, p1, '');
    return value === null ? '' : value
  });
}

export function createInsertRow(clone, dateColArr) {
  let skip = false
  Object.keys(clone).forEach(key => {
    const isDateCol = dateColArr.find((o) => o.hasOwnProperty(key))
    if (isDateCol) {
      skip = true // dont set to blank string re-use exisitng date
    }

    if (typeof clone[key] === "boolean") {
      //reset value
      clone[key] = false
      skip = true
    }

    if (typeof clone[key] === "number") {
      clone[key] = 0
      skip = true
    }

    if (!skip) {
      clone[key] = ''
    }
    skip = false
  })
  return clone
}
export function createMarkupLiteral(key, str, replaceValue) {
  const result = templateLiteral(str, {
    [key]: replaceValue
  });
  return { __html: result }
}


export function createMarkup(html) {
  return { __html: html }
}

export function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

export function fuzzySearchMutipleWords(
  rows, // array of data [{a: "a", b: "b"}, {a: "c", b: "d"}]
  keys, // keys to search ["a", "b"]
  filterValue// potentially multi-word search string "two words"
) {
  if (!filterValue || !filterValue.length) {
    return rows
  }

  const terms = filterValue.split(' ')
  if (!terms) {
    return rows
  }

  // reduceRight will mean sorting is done by score for the _first_ entered word.
  return terms.reduceRight(
    (results, term) => matchSorter(results, term, { keys }),
    rows,
  )
}

export const paginate = (array, pageSizeLoc, pageNumber) => {
  return array.slice(pageNumber * pageSizeLoc, (pageNumber + 1) * pageSizeLoc);
}