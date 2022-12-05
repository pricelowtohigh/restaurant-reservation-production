# Capstone: Restaurant Reservation System -- _Periodic Tables_

_Periodic Tables_ is a web app designed to allow restaurants to create and track reservations and seating simply and effectively. 

## Project Links
[Link to live front-end application](https://restaurant-reservation-frontend-preview.onrender.com/dashboard) 

[Link to live back-end server](https://restaurant-reservation-backend-preview.onrender.com/reservations)

## Installation Instructions

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

## Technology used

### Front end
- React, React Router, React Hooks, Javascript, HTML / JSX, Bootstrap, CSS
### Back end
- Node.js, Express, PostgreSQL, Knex 
### Deployment
- Project hosted using [Render](https://render.com/). 
- Database created with DBeaver.

## API
The API works with two Postgres tables: *reservations* and *tables*. 
### Routes
- `/reservations` allows `GET` and `POST` requests
- `/reservations?date=YYYY-MM-DD` allows `GET` requests
- `/reservations/:reservation_id` allows `GET` and `PUT` requests
- `/reservations/:reservation_id/status` allows `PUT` requests
- `/tables` allows `GET` and `POST` requests
- `/tables/:table_id` allows `GET` requests
- `/tables/:table_id/seat` allows `PUT` and `DELETE` requests

## Summary
*Periodic Tables* is designed to allow restaurant employees to keep track of existing reservations and tables in order to create new reservations based on available seating at any given future time.
### Dashboard
Displays any existing reservations on a given day as well as the capacity and status of each table in the restaurant.

[Dashboard Screenshot](https://imgur.com/a/aO4Fiv5)
### Search
Allows the user to search for a specific reservation given the phone number associated with the reservation.

[Search Screenshot](https://imgur.com/a/XxsqcUm)
### New Reservation
Allows the user to create a new reservation. Will not accept reservations outside of business hours, for parties that are too large, or without all of the required information fields containing a valid input.

[New Reservation Screenshot](https://imgur.com/a/aNS5Hci)
### New Table
Allows the user to create new tables and set an available capacity should the restaurant need to make adjustments to their floorplan to accomodate more guests. Future plans include adding functionality to this component that allow the user to edit and delete existing tables.

[New Table Screenshot](https://imgur.com/a/6fx2iV0)

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
