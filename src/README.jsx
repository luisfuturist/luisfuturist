import React, { Fragment } from "react";
import Shield from "./Shield";
import data from "./data";

export default async function README() {
  return (
    <>
      <p>
        <b>Luis Float</b> Full Stack Developer • Brazil, SC
      </p>
      <p>
        I'm a self-taught web developer with proficiency in the JavaScript
        ecosystem. I also like science fiction, digital design and philosophy.
      </p>

      <blockquote>
        <p>
          “That's all it is: information. Even a simulated experience or a
          dream; simultaneous reality and fantasy. Any way you look at it, all
          the information that a person accumulates in a lifetime is just a drop
          in the bucket..” – Batou
        </p>
      </blockquote>

      <p>Feel free to reach me at any social media.</p>

      {data.links.map((link, i) => (
        <Fragment key={i}>
          <Shield item={link} />
          {i < data.links.length - 1 && " "}
        </Fragment>
      ))}
    </>
  );
}
