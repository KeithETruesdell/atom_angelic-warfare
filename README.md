# Angelic Warfare for Atom Package
[![Build Status](https://travis-ci.org/mrkeysh/angelic-warfare-for-atom.svg?branch=master)](https://travis-ci.org/mrkeysh/angelic-warfare-for-atom)

Angelic Warfare is a simple

Feel free to open issues or make pull requests!

![Data Atom](https://cloud.githubusercontent.com/assets/156625/15249612/ccd377b0-1963-11e6-88ad-42eee914fc38.gif)

## Features
- Supports
  - PostgreSQL

## Usage
- `ALT`+`SHIFT`+`D` or the 'Data Atom: Toggle Details View' command
  - Toggle the database details view, showing table, column, view, etc. information

### Other commands
- 'Data Atom: Toggle Query Source' or the button right of 'Execute' on the toolbar
  - Toggle the source of the query to execute between the active editor content and Data Atom's own query editor
  - Allows you to easily work with SQL files in the main editor or quickly execute queries while working in any file type


## SQL Server specifics
- To use Windows authentication, include the option `domain=DOMAIN`.

## Contributing
Please do :)
- It is written in ES6 using Babel (provided by Atom)
- I am slowing moving callbacks I control to `Promise`s
- Looking at implementing support for ....?
  - Check out `data-manager.js` for what you need to implement
  - See `postgres-manager.js` for the most complete example

## The Random TODO list
- Replace grid with something better to allow row selection, column selection etc.
- Manage saved connections
- Add support for other database systems. Submit an issue or comment on one already there so we know the priorities
- More database information and visualisation e.g.
  - Exploring relations, views, etc.
