<h4 align="center">Vue.js based SPA.</h4>

![Github](https://github.com/octoleon/screenshots/blob/master/screenshot1.png)

* Vue SPA allows to create both a mechanism for managing a single table.
* Application built with Vue is SPA (Single Page Application) so it works much faster than apps based on Wordpress, Joomla, etc.
* Vue SPA uses the vue along with its ecosystem (Vuex, Vuetify, etc).
* The application architecture is adapted to work with REST API

## Functions

- operations on records:
  - Store,
  - Update,
  - Suspend/Restore,
  - Delete,
  - Multiple update,
  - Multiple Suspend/Restore,
  - Multiple Delete
- filtering:
  - Show active/inactive records,
  - Search phrase in whole table,
  - Search phrase in selected column (exact, like and list mode)
- items view versions:
  - client side (small tables),
  - server side (big tables)
- other functions and features:
  - datatable mechanism allows selection of the number of records per page, page transition and sorting,
  - management of a child table from the parent table module,
  - export to excel (xlsx),
  - table refreshing,

## Support for mobile devices

## Quick start

Do you want to test the application quickly, and you do not have an API ready? No problem, you can use the ready-made example in the **examples** folder. The API for this example is available on the internet, so you can connect to it by entering its address in the configuration file.

### Steps

1. Type following commands:
``` console
yarn install
```

2. Serve your app:
``` console
yarn serve
```
