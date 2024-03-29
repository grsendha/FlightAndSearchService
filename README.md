## Project Setup Instructions

Follow these steps to set up the project:

1. **Clone the project**: Use Git to clone the project repository to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run ```npm install``` to install the required dependencies.
3. **Environment Variables**: Create a `.env` file in the root directory of the project. Add the following line to specify the server port:
   ```
   PORT=3000
   ```
4. **Database Configuration**: You need to configure the database connection settings. Open or create the file `src/config/config.json` and ensure the development configuration looks like this:
   ```json
   {
     "development": {
       "username": "<DB_LOGIN>",
       "password": "<DB_PASSWORD>",
       "database": "Flights_Search_DB_DEV",
       "host": "127.0.0.1",
       "dialect": "mysql"
     }
   }
   ```
   Replace `<DB_LOGIN>` and `<DB_PASSWORD>` with your actual database login and password.

- Once you added your db config as listed above,go to src folder and execute command
```
npm sequelize db:create
```
then
```
npm sequelize db:migrate
```


## DB Design
  - Airplane
  - Flight
  - Airport
  - City

## Tables

### City-> id,name,created_at,updated_at
### Airport-> id,name,city_id,created_at,updated_at
    Relationship->City has many airport belongs to a city(one to many)

```
npx sequelize model:generate --name Airport --attributes name:string,address:string,cityId:integer
```
