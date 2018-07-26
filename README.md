
# MyApp

Personal project using ReactJS to render SPA using the below key components.

## Key components
`MongoDB` :
* Stores user data
* Sends user data back when requested

`Express API`
* Create, Read, Update, Delete
* Generates JWT token upon registration/login and passes to Angular Application
* /api/register (POST)
* /api/login (POST)
* /api/home/USERNAME (GET)

`React App`
* Calls API and deals with responses  [Passes JWT token for protected routes]
* Stores JWT in order to maintain user's session
* Checks the validity of JWT when displaying protected views

`Jest`
* Snapshot testing integrated. [`\src\__tests__\__snapshots__`] has the latest snapshot results saved.
* Comes with JSDom configured, meaning you can write browser tests but run them through Node, can deal with asynchronous tests and has advanced features such as mocking, spies and stubs built in

### Startup Screen
![Alt text](/screenshots/loading.jpg?raw=true "Loading Screen")
### Login Screen
![Alt text](/screenshots/login.jpg?raw=true "Login Screen")
### Home Screen
![Alt text](/screenshots/home.jpg?raw=true "Home Screen")


## Development server

Run `mongo-win` to start the mongodB server.

Run `start-express-server` to start the Express-Mongoose server.

Run `ng build` to build the project. The build artifacts will be stored in the `build/` directory.

Run `ng start` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source[`\src`] files.

## Further help

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).