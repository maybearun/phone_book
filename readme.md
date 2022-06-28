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

## Setting up the frontend

In order to set up the frontend, `cd` into the `frontend` folder and run the command `npm install`. Once everything is installed just run `npm start` to start the react application.

## Using the application
Once the database, server and the frontend is set up, You can start using the application.

This is the start screen of the application.
![start screen](img\start.png "start screen")

Click on the New Contact Button to get started.

![form](img\form.png "form")

Enter all the necessary details(Make sure that you are inserting details correctly. As of now there is no Client side validation.)

Once all the necessary details are filled up click on the Submit button.

This is how the contact list looks like.
![final](img\final.png "final")

On clicking the Delete button the contact will be deleted.

Functionality to edit the contact details is a work in progress. 

