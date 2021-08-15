# Timanage

This is a repository for an ongoing project, Timanage, which is a time management app with integration to google calendar and email. Future implementation will include groups and project management related things.

## App development related things

To install this app's dependencies, do `npm install`

To run this app, do `npm start`; However, if you don't have nodemon installed, run `npm install nodemon` first.



About the database:

* Use `config/config.js` file for config settings.
* Use `db/models` as models folder.
* Use `db/seeders` as seeders folder.
* Use `db/migrations` as migrations folder.


After cloning this repo, make a .env file in the root folder with content as following:

```
DB_NAME=(insert your database name here)
DB_USER=(insert your postgres username here)
DB_PASS=(insert your postgres user password here)
DB_HOST=(insert your database host here; should be localhost if you dont know)
DB_PORT=(insert your database port here; use 5432 for default)
```
