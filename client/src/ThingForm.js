import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input, Segment } from "semantic-ui-react";

const ThingForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const handleSubmit = async (e) => {
    if (props.id) {
      try {
        let res = await axios.put(
          `/api/ges/${props.ge_id}/things/${props.id}`,
          { name }
        );
        props.updateThing(res.data);
        props.setShowForm(false);
        setName("");
      } catch (err) {
        alert(err);
        console.log(err);
      }
      //update
    } else {
      // create
      try {
        let res = await axios.post(`/api/ges/${props.ge_id}/things`, { name });
        props.addThing(res.data);
        setName("");
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
    console.log(name);
  };
  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>name</label>
          <Input value={name} onChange={(e, { value }) => setName(value)} />
        </Form.Field>
        <Button type="submit">{props.id ? "update" : "add"}</Button>
      </Form>
    </Segment>
  );
};

export default ThingForm;
