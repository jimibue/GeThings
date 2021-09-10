import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

// static page...
const CatEdit = (props) => {
  // will cause error if you refresh on edit page
  const [name, setName] = useState(props.location.cat.name);
  const id = props.match.params.id;

  const handleSubmit = async () => {
    await axios.put(`/api/cats/${id}`, { name });
    props.history.push("/cats");
  };
  return (
    <div>
      <h1>CatEdit</h1>
      <p>{id}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>name</label>
          <Form.Input
            value={name}
            onChange={(e, { value }) => setName(value)}
          />
          <Button type="submit">add</Button>
        </Form.Field>
      </Form>
    </div>
  );
};

export default CatEdit;
