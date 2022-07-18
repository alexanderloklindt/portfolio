import React from "react";

export interface IBlogPostprops {}

const BlogPost: React.FunctionComponent<IBlogPostprops> = (props) => {
  return (
    <div>
      <h1>BlogPost</h1>
    </div>
  );
};

export default BlogPost;
