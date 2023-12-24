const CreatePost = () => {
  return (
    <>
      <form className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user Id..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are ypu feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows={4}
            className="form-control"
            id="body"
            placeholder="Tell us more about it..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="Reacted to this post..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Hashtags Here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter tags using spave..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
