import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

// static page...
const CatNew = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = async () => {
    await axios.post("/api/cats", { name });
    props.history.push("/cats");
  };
  return (
    <div>
      <h1>CatNew</h1>
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

export default CatNew;
