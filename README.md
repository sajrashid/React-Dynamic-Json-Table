# React Dynamic JSON Table
### Pre-Release
<img alt="demo png" src="https://github.com/sajrashid/hooks/blob/main/demo.png" width="600" height="320" />
<sub>Robots lovingly delivered by Robohash.org</sub>[https://robohash.org/]


Renders JSON array dynamically, emits a standard CSS agnostic HTML table.
NB: Alpha 

**Usage**
 ```js
    json=[
        {name:'abc',age: 25, desc:'some desc'},
        {name:'xyz',age: 99, desc:'another desc'},
    ] 
```

```html
<Table json={json} />
```

* Pass any CSS classes as props (Tailwind example below)
* Does not require an Id Column
* Infers by type bools, dates...etc
* Sortable by default (optional)
* Selectable by default (optional)
* Multi keyword fuzzy search (optional) [link](https://github.com/kentcdodds/match-sorter)
* Custom mark-up columns, uses [Dompurity]https://github.com/cure53/DOMPurify to sanitise the dom
* Can easily handles tens of thousands of rows
* The video above contains 1000 rows with images
* Testable with more tests to do
* Documented API
* Demo Site
* CodeSandBox examples
* And more...



**Options**
 ```js    
const options = {
        tableCss: 'table-fixed cursor-pointer w-full',
        selectable: false,
        iconCols: [{ 'email': '<i class="envelope icon"></i>Email' },
        { 'Avatar': '<i class="id badge icon"></i>Avatar' }],
}
```

**Usage**

```html
<Table json={json} options={options} />
```

*More options*
```js
 const options = {
        hiddenCols: ['id','col2'],
        customCols: [{'col1:'<div>...</div>'},{'user':'<img src=${colname} ></img>'}],
        LabelCols:[{'name':'firstname'}],
        dateCols: ['id','col2'], //Todo example 
        iconCols:[{'email':<i>...</i>}],
        filters: true, //search filter
        tableCss: 'table-fixed cursor-pointer w-full',
        searchInputCss: 'searchInputCss',
        rowStyles: ...css,
        cellStyles: 'break-words  border p-4 ',
        pagerCss: 'pager',
        theadStyles: ...css,
        pageable: true,
        selectedRowCss: 'selectedRow',
        sortabele: false, // defaults true
        selectable: false, // defaults true
        checkBox: false, // renders text value for bools, default is checkbox
        pagerIcons: { first: '&lsaquo;', previous: '&laquo;', next: '&raquo', last: '&rsaquo;' }, // or <i> </i>
        pageSize: 50, // items per page
        ... more to add
 }
```

**Limitations**
* Client side paging only (for now)
* Does not render SVG's
* In the video its the actual loading of the images thats slows down the rendering
* Reflection can be expensive if your data set is huge, profile your application
