<h1 align="center">
  New York Times movie reviews
</h1>

<p align="center">
  :movie_camera: Application for search New York Times movie reviews and get movie critics using Javascript, React, Redux, React hooks, redux-saga and styled-components.
</p>

<p align="center">
  <a href="https://github.com/dyarleniber/nyt-movie-reviews/actions?query=workflow%3ACI%2FCD">
    <img alt="CI/CD" src="https://github.com/dyarleniber/nyt-movie-reviews/workflows/CI/CD/badge.svg">
  </a>
  <a href="https://codecov.io/gh/dyarleniber/nyt-movie-reviews">
    <img alt="Coverage" src="https://img.shields.io/codecov/c/github/dyarleniber/nyt-movie-reviews">
  </a>
  <a href="https://github.com/dyarleniber/nyt-movie-reviews/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/dyarleniber/nyt-movie-reviews?label=license">
  </a>
</p>

<p align="center">
  <a href="https://dyarleniber.github.io/nyt-movie-reviews/">Live Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

Application for search New York Times movie reviews and get movie critics using [React](https://reactjs.org), [Redux](https://redux.js.org), Hooks, [redux-saga](https://redux-saga.js.org) and [styled-components](https://styled-components.com).

The application allows you search New York Times movie reviews by keyword and filter by Critic's Pick and Reviewer, also supports ordering results by title, by publication date, or by opening date. It's possible to get all New York Times movie critics, and ou can either specify the reviewer name. The movie reviews can be added to a favorites list that is stored in the application state.

The Movie Reviews API from [The New York Times Developer Network](https://developer.nytimes.com/) was used to get all the data.

The code base is covered by automated tests with [Jest](https://jestjs.io) and [Enzyme](https://enzymejs.github.io/enzyme).

The project is hosted on [GitHub Pages](https://pages.github.com). And a CI/CD workflow created on [GitHub Actions](https://github.com/features/actions) is responsible for automatically test the source code, generate a coverage report and upload it on [Codecov](https://codecov.io), build and deploy the project on [GitHub Pages](https://pages.github.com). All these jobs are activated by a push or pull request event on master branch.

## :gear: Configuration

To clone and run this application, you'll need to have [Git](https://git-scm.com) and [Node.js v10.16](https://nodejs.org) or higher installed on your computer.

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/dyarleniber/nyt-movie-reviews.git

# Go into the repository folder
$ cd nyt-movie-reviews

# Install dependencies
$ npm install

# Run the app in the development mode (open http://localhost:3000 to view it in the browser)
$ npm start
```

To run the tests (in the interactive watch mode), run the following command:

```bash
$ npm test
```

For more information about the available scripts, access the [Create React App documentation](https://create-react-app.dev/docs/available-scripts/).

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/dyarleniber/nyt-movie-reviews/blob/master/LICENSE) for more information.

---

Made with ♥ by Dyarlen Iber :wave: [Get in touch!](https://dyarleniber.com)
