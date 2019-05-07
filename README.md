# GatewayManager

This project was generated with Angular 5 and contain all the UI to manage Gateways and Devices

## Initialize the app

- To start clone or download the app.
- Run `npm install`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Production Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Set apiUrl variable

Go to *src/environment* and modify the variable **apiUrl**. If you are going to use the app on dev, modify the variable in the `environment.ts` file, if you are using the app in prod, modify `environment.prod.ts`
```
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000'
};
```
# In Memory
The branch **in-memory** was modified to use data in memory instead of mongodb. To access this feature `git pull origin in-memory`.

## CI/CD
This branch also was integrated with **[Circle Ci](https://circleci.com/)** to run test, build and deploy on **[Firebase](https://firebase.google.com)** on every push or merge. The changes of this branch will be displayed [here](https://musala-coding-task.firebaseapp.com)
