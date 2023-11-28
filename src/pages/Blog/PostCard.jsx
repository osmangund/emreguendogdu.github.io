import React from "react";

export default function PostCard(props) {
  return (
    <>
      <div className="grid-item" onClick={() => window.open(`blogpost${props.id}`, "_self")}>
        <h3 class="title">{props.title}</h3>
        <p className="excerpt">{props.excerpt}</p>
      </div>
    </>
  );
}