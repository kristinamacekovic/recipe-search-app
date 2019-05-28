import React from "react";
import { Wrapper } from "./styled";

export const Recipe = props => {
  const { recipe } = props;
  return (
    <Wrapper>
      <p>{recipe.title}</p>
      <img src={recipe.image_url} alt="" />
      <a href={recipe.source_url}>Go to Recipe</a>
    </Wrapper>
  );
};
