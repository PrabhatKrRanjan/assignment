## Description

This project shows user list in the table which is accessed from JSON file and on the click of the user modal is open and on the modal current day data is shown if available inside that modal there is show Calendar button is there it will show another modal of a calendar which shows the user activity on the calendar.

## Installation
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copyin the url
- In your terminal, type ```git clone URL```
  - replace URL with the url you copied
  - hit enter
- This will copy all the files from this repo down to your computer
- In your terminal, type ```cd assignment``` to change directory.
- Type ```npm install``` to install all dependencies.
- Type ```npm install redux react-redux react-router-dom react-bootstrap``` to install all packages which are used in current application.
- Type ```npm install react-big-calendar``` to install calender packages.
- Last, but not least, type ```npm start``` to run the app locally.

- To look at the code, just open up the project in your favorite code editor!

### Folder Structure

```
- src
    - index.js
    - App.js
    -components
        - Calander.jsx
        - CalanderDisplay.jsx
        - Home.jsx
        - PageList.jsx
        - User.jsx
        - PageNotFound.jsx
    - redux
        - action.jsx
        - reducer.jsx
        - store.jsx
        - user.json
    - roures
        - Routes.jsx

```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
