import "./Blog.scss";
import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    date: "Nov 27th 2023",
    title: "React Testing",
    excerpt: "Learn React Testing With Me",
  },
  {
    id: 2,
    date: "Nov 27th 2023",
    title: "React Test",
    excerpt: "Finally Public Learning",
  },
  { id: 3, date: "Nov 27th 2023", title: "React Test", excerpt: "Finally" },
  { id: 4, date: "Nov 28th 2023", title: "React Test", excerpt: "Finally" },
  {
    id: 5,
    date: "Nov 28th 2023",
    title: "React Test",
    excerpt: "Finally",
  },
  {
    id: 6,
    date: "Nov 28th 2023",
    title: "React Test",
    excerpt: "Finally Public Learning",
  },
];

export default function Blog() {
  return (
    <>
      <main>
        <div className="blog-container">
          {posts.map((post) => (
            <PostCard
              id={post.id}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </main>
    </>
  );
}
