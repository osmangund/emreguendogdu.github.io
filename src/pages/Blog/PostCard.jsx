import React from "react";

export default function PostCard(props) {
  return (
    <>
      <article
        className="blog-item"
        onClick={() => window.open(`blogpost${props.id}`, "_self")}
      >
        <p className="date">{props.date}</p>
        <h3 className="title">{props.title}</h3>
        <p className="excerpt">{props.excerpt}</p>
      </article>
    </>
  );
}
