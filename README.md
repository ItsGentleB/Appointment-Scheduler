# Interview Scheduler

Interview Scheduler is an SPA built using React and was meant as an introduction to the library. It allows the user to book, edit, and cancel an interview appointment on any weekday between 12pm and 5pm.

# Learning Goals
* Introduce the basics of React and use it to build a single page application
* Learn the testing frameworks Storybook, Jest, and Cypress and use them for unit, integration, and E2E testing.
* Introduce Axios to make HTTP requests as an alternative to JQuery.


!["Home Page"](https://github.com/ItsGentleBen/scheduler/blob/master/public/images/Display.png)
!["Create"](https://github.com/ItsGentleBen/scheduler/blob/master/public/images/Create.png)
!["Delete"](https://github.com/ItsGentleBen/scheduler/blob/master/public/images/Delete.png)

## Setup

1. Install dependencies with `npm install`.
2. Clone the scheduler-api at [scheduler api](https://github.com/ItsGentleBen/scheduler-api) into a new directory (within the scheduler directory).
3. Follow the scheduler-api README to setup the database.
4. In your terminal run both servers using `npm start` while in their respective directories.
5. In your browser go to [http://localhost:8000](http://localhost:8000)

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies

* axios: ^0.20.0,
* classnames: ^2.2.6,
* normalize.css: ^8.0.1,
* react: ^16.9.0,
* react-dom: ^16.9.0,
* react-scripts: 3.4.4
