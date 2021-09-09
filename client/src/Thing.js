import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";
import ThingForm from "./ThingForm";

const Thing = (props) => {
  const [showForm, setShowForm] = useState(true);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Content header={props.name} />
      {showForm && <ThingForm {...props} />}
      <Button.Group style={{ width: "200px" }}>
        <Button color="blue" onClick={() => setShowForm(!showForm)}>
          edit
        </Button>
      </Button.Group>
    </Card>
  );
};
export default Thing;
