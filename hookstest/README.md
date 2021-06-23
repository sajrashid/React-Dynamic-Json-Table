# React Dynamic JSON Table

<img alt="demo png" src="https://github.com/sajrashid/hooks/blob/main/hookstest/demo.png" width="600" height="320" />

Any JSON array dynamically renders a standard css agnostic table.

**Usage**
* `json=[
    {name:'abc',age: 25, desc:'some desc'},
    {name:'xyz',age: 99, desc:'another desc'},
    ] />`

* `<Table json={json} />`

* Pass any CSS classes as props (Tailwind examples)
* Does not require an Id Column
* Infers by type bools, dates...init.d/klipper_mcu`
* Sortable by default (optional)
* Selectable by default (optional)
* Optional search filters
* Custom mark-up columns
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
        customCols: [{ 'Avatar': '<div style="min-height:6em"><img  decoding="async" src=${Avatar}></img></div' }] //adding min height reduces loading flash as image cells are not resized vertically
}
```

**Usage**

```html
<Table json={json} options={options} />
```