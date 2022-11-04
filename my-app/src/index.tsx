import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import reportWebVitals from './reportWebVitals';
//import {Provider} from "react-redux";
//import {store} from "./state/store";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // uri specifies the URL of our GraphQL server.
  cache: new InMemoryCache(), //Apollo Client uses cache to cache query results after fetching them.
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
