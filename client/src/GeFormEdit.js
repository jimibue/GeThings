import React from "react";

const GeFormEdit = (props) => {
  return (
    <div>
      <h1>GeFormEdit Bobs Changes here have been push to master</h1>
      <p>id: {props.match.params.id}</p>
    </div>
  );
};

export default GeFormEdit;
