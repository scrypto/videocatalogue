# Demo Streaming App
By Indra Arifin

### Technical and architectural choices

- `create-react-app` for fast setup 
- `react-router-dom` for page routing
- **react hooks** for stateful non-class component
- `axios` for REST API calls
- `typescript` to reducing common typing errors
- `node-sass` for more efficient styling
- `lodash` for utility support
- `enzyme` and `jest` for standard testing

### Possible improvements (given more time)
- Eject create-react-app for complete control and customisation.
- Build the app from the ground-up instead of using react-create-app.
- Use state management to reduce API calls, eg: redux.
- Explore options to rest react hooks (as it is currently not supported by jest), eg: `react-testing-library`.
- Enable typescript on tests.
- Footer: enable hover on social images

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

#### `npm install`

To install dependencies

#### `npm start`

Runs the app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>

If you want to create coverage report, run `npm test -- --coverage`

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>