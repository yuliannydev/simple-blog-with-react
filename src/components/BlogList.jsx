import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>
              Escrito por <em>{blog.author}</em>
            </p>
            <div>
              <p className="blog-preview-content">{blog.body}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
