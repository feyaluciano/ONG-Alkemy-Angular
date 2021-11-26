# Testing

# Activity Form Testing

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