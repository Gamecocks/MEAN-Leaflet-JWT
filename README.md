# MEAN-Leaflet-JWT
A javascript coordinate tracking API built with Leaflet and Mapbox on the MEAN stack

Initial Install:

Download and install Node.js
https://nodejs.org/en/download/

Download and install MongoDB
https://www.mongodb.com/
From CMD or Shell, change directory (cd) to the install location of MongoDB.
cd to the bin directory and post the command "MongoDB" to initiate the database service.

Download a version of the MEAN-Leaflet-JWT application into a directory

Go to MapBox and create a free account and generate a unique access token.
https://www.mapbox.com/studio/account/tokens/
Replace the 'INSERT_TOKEN_HERE' text in the /angular-src/src/app/environments/environment.js file with your generated token.
This token is used to access their map library.


With CMD or Shell, change directory (cd) to the root folder of the application.
From the root directory run "npm install npm-install-all -g"
This command will create a helper command that will install all the dependencies and apis listed in the package.json file.
Run the command "npm-install-all" to install all of the dependencies into the node_modules
Run "node app.js" to start the Express server.

With CMD or Shell, change directory (cd) to the root folder of the angular application located in root/angular-src directory.
Run the command "Ng Serve" to start the web service.

To add plots to the mapping interface, a HTTP POST must be sent to the route http://localhost:3000/locations/locations
The POST data must contain a single JSON object in the format of:

{
    "mmsid":1,
    "latitude":37.74613407445653,
    "longitude":-106.00183105468751,
    "name":"test_name",
    "callsign":"test_callsign",
    "speed" :20,
    "course":"test_course",
    "heading" :"test_heading"
}

The application uses JWT authentication and hashing so the user will need to register and login to the app to view the data after it has been posted to the endpoint.
The application user interface will be hosted on http://localhost:4200/

I have not yet completed the function to asynchronously reload the map plots once new plots have been added through the API.
This must be done by manually by refreshing the page at this current time.


Plans for future development:
Write more documentation about the API's
Asynchronous refresh of chart data (currently you have to refresh the page to see changes).
Adding a form so the user can submit the JSON data directly through the UI.
Add more custom styling to the UI.
Thorough QA testing and error handling.


# MEAN-Leaflet-JWT
A javascript coordinate tracking API built with Leaflet and Mapbox on the MEAN stack

Initial Install:

Download and install Node.js
https://nodejs.org/en/download/

Download and install MongoDB
https://www.mongodb.com/
From CMD or Shell, change directory (cd) to the install location of MongoDB.
cd to the bin directory and post the command "MongoDB" to initiate the database service.

Download a version of the MEAN-Leaflet-JWT application into a directory

Go to MapBox and create a free account and generate a unique access token.
https://www.mapbox.com/studio/account/tokens/
Replace the 'INSERT_TOKEN_HERE' text in the /angular-src/src/app/environments/environment.js file with your generated token.
This token is used to access their map library.


With CMD or Shell, change directory (cd) to the root folder of the application.
From the root directory run "npm install npm-install-all -g"
This command will create a helper command that will install all the dependencies and apis listed in the package.json file.
Run the command "npm-install-all" to install all of the dependencies into the node_modules
Run "node app.js" to start the Express server.

With CMD or Shell, change directory (cd) to the root folder of the angular application located in root/angular-src directory.
Run the command "Ng Serve" to start the web service.

To add plots to the mapping interface, a HTTP POST must be sent to the route http://localhost:3000/locations/locations
The POST data must contain a single JSON object in the format of:

{
    "mmsid":1,
    "latitude":37.74613407445653,
    "longitude":-106.00183105468751,
    "name":"test_name",
    "callsign":"test_callsign",
    "speed" :20,
    "course":"test_course",
    "heading" :"test_heading"
}

The application uses JWT authentication and hashing so the user will need to register and login to the app to view the data after it has been posted to the endpoint.
The application user interface will be hosted on http://localhost:4200/

I have not yet completed the function to asynchronously reload the map plots once new plots have been added through the API.
This must be done by manually by refreshing the page at this current time.


Plans for future development:
Write more documentation about the API's
Asynchronous refresh of chart data (currently you have to refresh the page to see changes).
Adding a form so the user can submit the JSON data directly through the UI.
Add more custom styling to the UI.
Thorough QA testing and error handling.
