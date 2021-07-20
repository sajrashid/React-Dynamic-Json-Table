---
title: README.md
description: Introduction
date: 2021-07-20T00:00:00+00:00
tags:
  - React
  - JSON
  - Table
  - Dynamic
  - Editable
  - Hackable
---
# React Dynamic JSON Table
There a many tables out there, some require lot's of boiler plate code, with changes across the stack if anything is modified, others a just too basic.

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
* Auto Sanitises uses (DOM Purify)
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
See Github discussions.

[Site](https://react-dj-table.netlify.app/), Code-Sand-Box examples.

![Tests](https://github.com/github/docs/actions/workflows/test.yml/badge.svg)

[![NPM](https://nodei.co/npm/react-dj-table.png?compact=true)](https://nodei.co/npm/react-dj-table/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ad1de4da-ad86-4c8f-a533-732539d451a7/deploy-status)](https://app.netlify.com/sites/react-dj-table/deploys)
