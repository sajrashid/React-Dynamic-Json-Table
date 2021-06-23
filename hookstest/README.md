# React Dynamic JSON Table

<img alt="demo png" src="https://github.com/sajrashid/hooks/blob/main/hookstest/demo.png" width="600" height="320" />

Renders JSON array dynamically, emits a standard CSS agnostic HTML table.

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
* Optional search filters
* Custom mark-up columns
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
        searchInputCss: 'searchInputCss',
        cellStyles: 'break-words  border p-4 ',
        pagerCss: 'pager',
        pageable: true,
        theadStyles: 'bg-blue-500 text-gray-200 px-8 py-4',
        filters: true,
        selectable: true,
        iconCols: [{ 'email': '<i class="envelope icon"></i>Email' },
        { 'Avatar': '<i class="id badge icon"></i>Avatar' }],
        // eslint-disable-next-line no-template-curly-in-string
        customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }]
         //adding min height reduces loading flash as image cells are not resized vertically
}
```

**Usage**

```html
<Table json={json} options={options} />
```

**Limitations**
* Client side paging only (for now)
* In the video its the actual loading of the images thats slows down the rendering
* Reflection can be expensive if your data set is huge, profile your application