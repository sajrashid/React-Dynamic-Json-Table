---
Title: README.md
Description: Introduction
Date: 2021-07-20T00:00:00+00:00
Tags:
  - React
  - JSON
  - Table
  - Dynamic
  - Editable
  - Hackable
---

|       Tests      | Code Coverage | Sonar Cloud | NPM Status | Doc's Site |
|:----------------:|---------------|:-----------:|------------|------------|
| ![Tests](https://github.com/github/docs/actions/workflows/test.yml/badge.svg) |  ToAddLink    | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sajrashid_React-Dynamic-Json-Table&metric=alert_status)](https://sonarcloud.io/dashboard?id=sajrashid_React-Dynamic-Json-Table) | [![NPM](https://nodei.co/npm/react-dj-table.png?compact=true)](https://nodei.co/npm/react-dj-table/)       | [![Netlify Status](https://api.netlify.com/api/v1/badges/ad1de4da-ad86-4c8f-a533-732539d451a7/deploy-status)](https://app.netlify.com/sites/react-dj-table/deploys)    |

# React Dynamic JSON Table
Some tables require lot's of boiler plate code, with changes across the stack if anything is modified, others a just too basic.

This a fully Editable dynamic table, that's also relatively feature rich, easy to configure, supports pagination, sorting and filtering out of the box, that actually tries to handle data intelligently

It's no slouch either, tested with 10K, 100K, 1M rows if you really want to exercise your CPU.

## Minimal Boiler-Plate Code
Auto column mapping, Configurable options such as identity columns

### Features
* CRUD
* ID columns
* Label Columns
* Hidden Columns
* Icon columns (SVG or Font)
* Images (cells), custom HTML/CSS
* and lot's [more](https://react-dj-table.netlify.app/)

### CSS Agnostic, Doc's and Examples
Tailwind, Syamtic UI React, Bootstrap examples

### Tests Tests Tests
Code Coverage is growing fast, CI is working. happy day's.. run the tests in the repo

### Documentation an Examples
[Doc's](https://react-dj-table.netlify.app/), Code-Sand-Box examples.


>Install
 ```js
yarn add react-dj-table
```
>Add Import
 ```js
Import Table from 'react-dj-table'
```
>Supply Data
 ```js
const data = ... //some json array
```
>Add Component
 ```html
<Table json={data}/>
```
### Paging
Pretty standard built in pager.. or roll your own

### Editing
Fully CRUD - smart(ish) edit built it, validate and revert user changes before you commit them to your data store
Intuitive buttons, create a record , change the data, watch as it guides the user.

### Hackable
You got access to the reducers dispatch functions, state TBD (next patch release)
### Feature Requests
See Github discussions

[Site](https://react-dj-table.netlify.app/), Code-Sand-Box examples.









## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/khalidmunir"><img src="https://avatars.githubusercontent.com/u/16494491?v=4?s=80" width="80px;" alt=""/><br /><sub><b>khalidmunir</b></sub></a><br /><a href="https://github.com/SajRashid/React-Dynamic-Json-Table/commits?author=khalidmunir" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
