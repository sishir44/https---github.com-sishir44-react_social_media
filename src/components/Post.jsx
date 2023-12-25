import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post_list_store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.reactions} people.
          </div>
        </div>
      </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired, // Adjust the type accordingly
  setSelectedTab: PropTypes.func,
};

export default Post;
