import React, { useEffect } from "react";
import "./Blog.css";
import PostCard from "./PostCard";

const posts = [
  { id: 1, title: "React Testing", excerpt: "Learn React Testing With Me" },
  { id: 2, title: "React Test", excerpt: "Finally Public Learning" },
];

export default function Blog() {
  return (
    <>
      <div className="grid-container">
        {posts.map((post) => (
          <PostCard id={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
    </>
  );
}
