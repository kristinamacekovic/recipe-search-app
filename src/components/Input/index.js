import React from "react";
import { Input, Button } from "./styled";

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <Input type="text" name="searchTerm" />
    <Button>Search</Button>
  </form>
);

export { Form };
