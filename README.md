<<<<<<< HEAD
# Test Cases

# A - Activity Form Testing

-Type:Funcionality
-Description: the received id should be a number
-Test Step: Input an number on the url
-Expected Result : the variable editing is true 


-Type:Funcionality
-Description:  the form should be valid
-Test Step: enter all required fields
-Expected Result : the form is not invalid

-Type:Funcionality
-Description:  the form should not be able to send
-Test Step: not enter all required fields
-Expected Result : the variable allowSend to be false

-Type:Funcionality
-Description:  the form should not be able to send
-Test Step: not enter all required fields
-Expected Result : the variable allowSend to be false


-Type:Funcionality
-Description:  the response success should be true on request get 
-Test Step: input an id that exists in the database
-Expected Result : the variable success in response to be true


-Type:Funcionality
-Description:  the response success should be true on request post 
-Test Step: input an activitye
-Expected Result : the variable success in response to be true

-Type:Funcionality
-Description:  the response success should be true on request patch 
-Test Step: input an activitye
-Expected Result : the variable success in response to be true

-Type:Funcionality
-Description:  the variable alertMessage should 'La actividad fue agregada correctamente'
-Test Step: input an activity an send post
-Expected Result : the variable success in response to be true

-Type:Funcionality
-Description:  the variable alertMessage should 'La actividad fue actualizada correctamente'
-Test Step: input an activity an send patch
-Expected Result : the variable success in response to be true
=======
<h2># Testing</h2>

<p><h3>A. Activity Form Testing</h3></p>
<p><h4>A1.: Navegate to edit activity with a number</h4></p>
<ul>
 <li>Pre-Conditions:</li>
 <li>Entries:Input a number on the url /activity/1</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Navigate to edit an entity.</li> 
</ol> 
 </li>
 <li>Expected results:The variable editing is true</li>
</ul>


<p><h4>A2.: Submission with all fields</h4></p>
<ul>
 <li>Pre-Conditions:</li>
 <li>Entries:all required fields</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input text in fields.</li> 
</ol> 
 </li>
 <li>Expected results:The web show a message that all the fields are required</li>
</ul>


<p><h4>A3.: Submission with only field</h4></p>
<ul>
 <li>Pre-Conditions:</li>
 <li>Entries:Only one required field</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input text in fields.</li> 
</ol> 
 </li>
 <li>Expected results:The variable allowSend to be false and the button should be disabled </li>
</ul>


<p><h4>A4.: Make a get request</h4></p>
<ul>
 <li>Pre-Conditions: The id exists in the database</li>
 <li>Entries:An id</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input an id that.</li> 
</ol> 
 </li>
 <li>Expected results:The response success should be true on request get </li>
</ul>


<p><h4>A5.: Make a post request</h4></p>
<ul>
 <li>Pre-Conditions: - </li>
 <li>Entries:All fields to activity</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input all fields.</li> 
</ol> 
 </li>
 <li>Expected results:The variable success in response to be true </li>
</ul>


<p><h4>A6.: Make a patch request</h4></p>
<ul>
 <li>Pre-Conditions: - </li>
 <li>Entries:Some field to activity</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input some field.</li> 
</ol> 
 </li>
 <li>Expected results:The variable success in response to be true </li>
</ul>

<p><h4>A7.:Displaying an activity message when a activity is created</h4></p>
<ul>
 <li>Pre-Conditions: - </li>
 <li>Entries:Input all required fields.</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input all fields.</li> 
</ol> 
 </li>
 <li>Expected results:The variable alertMessage should 'La actividad fue agregada correctamente' and the variable success in response to be true </li>
</ul>

<p><h4>A8.:Displaying an activity message when a activity is updated</h4></p>
<ul>
 <li>Pre-Conditions: - </li>
 <li>Entries:Input any required field.</li>
 <li>Steps: 
 <ol>
 <li>Open the web:</li>
 <li>Input any field.</li> 
</ol> 
 </li>
 <li>Expected results:The variable alertMessage should 'La actividad fue actualizada correctamente' and the variable success in response to be true </li>
</ul>

>>>>>>> main


# B - Contact Form Testing

    B.1: detect if the form is valid
        * Entries: name, email, phone, message
        * Step: 1) open the app
                2) the fields are filled according to their type
                3) check that it is not invalid
        * Expected results: the app shows error messages when entering the data incorrectly

    B.2: Do not send the form if it is not completed
        * Entries: name, email, phone, message
        * Step: 1) open the app
                2) It is checked that the required fields are filled
        * Expected results: the app displays alert messages indicating that the required fields must be filled out and does not allow the information to be sent until complete

    B.3: test the correct http request
        * Entries: name, email, phone, message, updated_at, created_at
        * Step: 1) Open the app
                2) the call to the api is made with the data correctly entered
                3) if it is successful, the app returns a success response and show , and if it is not, it returns an error response



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Ngx Skeleton Loader

Documentation [Ngx Skeleton Loader](https://www.npmjs.com/package/ngx-skeleton-loader) page.
Live example in [Stackblitz] (https://stackblitz.com/edit/ngx-skeleton-loader-sample?file=app%2Fapp.component.html) page.