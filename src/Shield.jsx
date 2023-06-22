import React from "react";
import { getShieldUrl } from "./utils";

function Shield({ item }) {
  return (
    <a href={item.link}>
      <img src={getShieldUrl(item)} alt={item.alt} />
    </a>
  );
}

export default Shield;
