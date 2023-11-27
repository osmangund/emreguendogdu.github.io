import React from "react";
import "./Blog.css";
import { postPreview } from "../Blog-posts/post1";

export default function Blog() {
  const gridItems = document.querySelectorAll(".grid-item");
  const url = "https://google.com";
  gridItems.forEach((item) =>
    item.addEventListener("click", () => window.open(url, "mozillaTab"))
  );

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Title</h3>
          <p>Preview of blog</p>
        </div>
        <div className="grid-item">
          <h3>Title</h3>
          <p>Preview of blog</p>
        </div>
        <div className="grid-item">
          <h3>Title</h3>
          <p>Preview of blog</p>
        </div>
      </div>
      <main>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis modi
        nisi dolor beatae repellendus nesciunt nam consectetur molestiae earum
        perferendis velit ipsam aut, dolore aliquid excepturi. Fuga facilis quas
        laudantium voluptate perspiciatis cum quidem ipsa beatae illum est id
        rem et soluta rerum veniam cumque ullam, saepe necessitatibus. Harum
        labore rerum quod voluptate doloribus eum, optio voluptatum ipsa! Dolore
        iste quo, quia veniam voluptates repudiandae minus dolores? Non rem
        corrupti tenetur consectetur accusamus ducimus exercitationem. Esse
        reiciendis sed iusto quod similique mollitia repellat! Non alias nobis
        omnis ratione quam vel, cupiditate laudantium velit voluptatum earum et
        tempora temporibus eligendi tempore suscipit placeat modi quae. Rem
        alias harum cupiditate velit rerum! Veritatis, voluptatum consequatur
        enim vero ad aspernatur culpa adipisci excepturi, delectus aut esse
        facere consectetur deleniti, fugiat accusamus? Pariatur, repellendus
        dolore! Laudantium quibusdam veritatis aperiam qui quaerat expedita,
        error libero, quia animi neque et nihil ipsa ut nisi illum perferendis
        perspiciatis ipsam consectetur consequuntur. Nulla sint nemo sit
        reprehenderit perspiciatis, illum totam sequi molestiae quasi eius
        numquam, iure, eos vitae quos suscipit? Voluptatum rerum magnam
        praesentium doloremque vel eveniet quod aspernatur atque minima, eius
        corporis, sunt sint veniam excepturi animi numquam, mollitia labore illo
        sapiente ipsam odit unde at assumenda?
      </main>
    </>
  );
}
