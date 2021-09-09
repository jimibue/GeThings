import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

const ThingForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const handleSubmit = (e) => {
    console.log(name);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>name</label>
        <Input value={name} onChange={(e, { value }) => setName(value)} />
      </Form.Field>
      <Button type="submit">{props.id ? "update" : "add"}</Button>
    </Form>
  );
};

export default ThingForm;
