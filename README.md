backend-starter-seed
=======================

This repo and sample code helps the back-end (node.js express server) securely communiate with Fortellis platform using the API key. 

Boiler-plate for nodejs back-end application to integrate with [Fortellis](https://developer.fortellis.io/).
This seed comes with an /appointments route which fetches the list of appointments from [Appointments API](https://developer.fortellis.io/api-reference/vehicle-service/appointment-api) 

Prerequisites
-------------
- [Node.js 8.0+](http://nodejs.org)
- Code Editor of your choice ([VSCode](https://code.visualstudio.com/) is my favorite)
- API_KEY which can access appointments api, please refer [Obtaining API Key](#obtaining-api-key).

Getting Started
---------------

```bash
cd fortellis-getting-started

# Navigate to app-starter-backend directory
cd app-starter-backend

# Install NPM dependencies
npm install

# Run tests single run
npm test

# Start your app
npm start

# Running tests in watch mode during development
npm run test:watch
```

**Note:** This project uses [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in the app and automatically restarts the server. This will save you a lot of time in the long run, because you won't need to manually restart the server each time you make a small change in code.

Obtaining an API Key
------------------
This project need access to [Appointments API](https://developer.fortellis.io/api-reference/vehicle-service/appointment-api) available in the Fortellis platform which requires a valid API key and API secret. You can create them by following this [guide](https://community.fortellis.io/community/blog/how-can-i-try-out-api). Make sure you select Appointments when registering your solution and update apikey and apisecret in src/appointments/appointments.repo.js
