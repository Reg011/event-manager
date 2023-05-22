# Back-End

Back-end part of the app.

## Tech stack

- NodeJS
- PostgreSQL
- ExpressJS

## Instructions

1. Install PostgreSQL
2. Open pgAdmin and set up a password for the superuser
3. Import `/pg/kumojin-server.json`
4. Import db `/pg/event-manager-db.sql`
   Two options:

   - use the default db `postgres`
   - create a new db

     Open the query tool (right click on the db) and copy/paste the sql dump

5. Change the `.env` file to set up your password and db name
6. Run `yarn` or `npm install`
7. Voilà, you can now start the back-end server with `yarn start` or `npm start`

Note: The `.env` file shouldn't be pushed for security standards but is present here for demonstration purposes
