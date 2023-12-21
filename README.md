# Calandar app

this is an app build with react, node, express and mongodb
that include a pwa feature

## Run the app

* 0 clone the repo

* 1 switch to workbox branch

* 2 you most to have docker, node v16 and workbox install in you machine

* 3 raise the database 
  * enter in the react-calendar-backend 
  * exec the `docker compose up -d` in a terminal
  
* 4 raise the backend 
  * enter in the react-calendar-backend 
  * exec the `yarn install` to install the dependencies
  * exec the `yarn dev` to run the backend

* 5 raise the frontend
  * enter in the react-calendar-frontend 
  * exec the `yarn install` to install the dependencies
  * exec the `yarn dev` to run the frontend app
  * exec the `yarn build` to create the production app with the PWA
  * exec the `yarn serve` to run the production app

