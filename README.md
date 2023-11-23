# Follow up project for Udemy [course](https://www.udemy.com/course/microfrontend-course/) Micro-Frontend

Micro frontend approach is implemented with Webpack's Module Federation Plugin

Ready-to use app is deployed on Netlify and available by the [link](https://container-mfp.netlify.app/)

## Application overview

Application consists of 4 micro frontend applications: a container and 3 other applications all hosted on separate domains
Domain configuration is available in `.github/workflows/container.yml`
This repository is configured to use GH actions to build and deploy all below applications into Netlify hosting

### Container

Application that hosts other applications (components) federated with webpack federation plugin and keeps routing across federated components
Made with React.js

### Marketing

Simple application that shows landing page and price page, also contains router synced with container router
Made with React.js

### Auth

Application that contains very basic implementation of SignIn and SignUp pages, contains router synced with container router
Made with React.js

### Dashboard

Application with fake data dashboard to demonstrate integration wof different frameworks in single MFE application
Made with VUE.js
