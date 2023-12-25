import PropTypes from "prop-types";

export const WelcomeMessage = () => {
  return (
    <center className="welcome-message">
      <h1>There are no posts!</h1>
    </center>
  );
};

WelcomeMessage.propTypes = {
  onGetPostsClick: PropTypes.func,
};
