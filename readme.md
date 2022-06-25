# Phone book app
This app is created using React on frontend, FastAPI on backend and Postgresql for the database.

## Setting up the Server and Database
All the required libraries/dependencies for FastAPI is listed in the requirements.txt file. Just `cd` into the `server` folder and run
`pip install -r requirements.txt` to install all the dependencies.

In order to setup the database, create a database on Postgres. Then cd into the `server` folder and create a `.env` file. In the `.env` file create the following constants:<br>
DATABASE_NAME="your_database_name"<br>
DATABASE_USERNAME="your_postgres_username"<br>
DATABASE_PASSWORD="your_postgres_password"<br>
DATABASE_HOSTNAME="your_hostname"(if you are running it on a local machine then it will be localhost)<br>

In order to start the server cd into the `server` folder and run the command `uvicorn app:app --reload`. This will start the server and create the database tables.