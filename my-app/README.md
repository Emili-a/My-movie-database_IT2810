#### FRONTEND

## Testing

cd into my-app and run 
```
$ mpn test
```

We have used jest and puppeteer to do end to end testing, as it allows you to mimic a set of user interactions with the app. In the end-to-end test we mimic the interactions of inputing "Horror" in the search field, then clicking the first movie in the results. To check if we have the expected result we evaluete if the title is "100 Bloody Acres" as is expected.
https://pptr.dev/

## Laguages and tools 
The application uses React with typescript to render the frontend components. For communication with the MongoDB backend server, GraphQL and apollo have been used on the client side.

### Getting started
To start our new Create React App project with TypeScript, we ran:
```
$ npx create-react-app my-app --template typescript
```


## Dependencies

### apollo
We choosen to use have use apollo-client to handle global state management. 
https://www.apollographql.com/docs/react/
Apollo enables managing of local and remote data with GraphQL and also integrates with react.

### graphql
We have used GraphQL is to query the server for the data we need. It enables asking for data already filered on the wanted parameters form the server. We have choosen to implement all our filtering with graphQL as with huge amounts of data it's preferable to avoid filering on the client-side.

### material UI
We have used material UI for the modal-component. This component is a popup window, that we have used to enable info for a single movie to pop up over the movies search page. 




