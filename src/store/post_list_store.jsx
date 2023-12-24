import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// create context
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Hyderabad",
    body: "Hyderabad is a beautiful city",
    reactions: 2,
    userId: "user1",
    tags: ["Hyd", "500018", "Biryani"],
  },
  {
    id: "2",
    title: "Hyderabad",
    body: "Hyderabad is a beautiful city",
    reactions: 2,
    userId: "user1",
    tags: ["Hyd", "500018", "Biryani"],
  },
];

PostListProvider.propTypes = {
  children: PropTypes.string.isRequired, // Adjust the type accordingly
  setSelectedTab: PropTypes.string.isRequired,
};

export default PostListProvider;
