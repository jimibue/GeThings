import React from "react";

// static page...
const CatEdit = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h1>CatEdit</h1>
      <p>{id}</p>
    </div>
  );
};

export default CatEdit;
