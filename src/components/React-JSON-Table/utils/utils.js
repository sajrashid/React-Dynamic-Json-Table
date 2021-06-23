import DOMPurify from 'dompurify';
import _ from 'lodash'

function templateLiteral(template, context = {}) {
  return template.replace(/\$\{\s*(.+?)\s*\}/g, (match, p1) => {
      const value = _.get(context, p1, '')
      return value === null ? '' : value
  });
}


export function createMarkupLiteral(key, str, replaceValue) {
  const result = templateLiteral(str, {
      [key]: replaceValue
  });
  var clean = DOMPurify.sanitize(result);
  return { __html: clean }
}


export function createMarkup(html) {
  var clean = DOMPurify.sanitize(html);
  return { __html: clean }
}



export function  compareValues(key, order = "asc") {
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

  