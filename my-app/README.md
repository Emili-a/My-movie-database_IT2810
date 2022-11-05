#### FRONTEND

### Install
First clone the repository. 
To intall all needed dependencies, from within the my-app folder run:

$ npm install $

### Start
To start the react application. From within the my-app folder run:

$ npm start $

The app will by default run on port:3000

### Laguages and tools 
The application uses React with typescript to render the frontend components. For communication with the MongoDB backend server, GraphQL and apollo have been used on the client side.

# Getting started
To start our new Create React App project with TypeScript, we ran:
   $ npx create-react-app my-app --template typescript $


### Dependencies

# apollo
We choosen to use have use apollo-client to handle global state management. 
https://www.apollographql.com/docs/react/
Apollo enables managing of local and remote data with GraphQL and also integrates with react.

# graphql
We have used GraphQL is to query the server for the data we need. It enables asking for data already filered on the wanted parameters form the server. We have choosen to implement all our filtering with graphQL as with huge amounts of data it's preferable to avoid filering on the client-side.

# material UI
We have used material UI for the modal-component. This component is a popup window, that we have used to enable info for a single movie to pop up over the movies search page. 



