import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

const Root = () => {
  return <div>Lyrical</div>;
};

const appolloClient = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={appolloClient}>
    <Root />
  </ApolloProvider>,
  document.querySelector("#root")
);
