import { compareValues, createMarkup, createMarkupLiteral, fuzzySearchMutipleWords } from '../components/react-dj-table/utils/utils'

test('createMarkup', () => {
    expect((createMarkup("<div></div>"))).toMatchObject({ "__html": "<div></div>" })
})


test('createMarkupLiteral', () => {
    expect((createMarkupLiteral("", "<div>A</div>", "Z"))).toMatchObject({ "__html": "<div>A</div>" })
})

var json = [
    { id: 0, name: "abc", isBool: true },
    { id: 1, name: "xyz", isBool: false }
]

test('compareValues', () => {
    const expected = json;
    expect((json.sort(compareValues("name", "true")))).toEqual(expect.arrayContaining(expected))
})

// TODO fix test
// test('fuzzySearchMutipleWords', () => {
//     const expected = { id: 0, name: "abc", isBool: true };
//     expect((fuzzySearchMutipleWords(json, "name", "abc"))).toEqual(expect.objectContaining(expected))
// })