import React, { useState } from "react";
import { Button, Card, Icon, Segment } from "semantic-ui-react";
import ThingForm from "./ThingForm";

const Thing = (props) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Card style={{ width: "100%", padding: "20px" }}>
      <Card.Content header={props.name} />
      {showForm && (
        <ThingForm
          setShowForm={setShowForm}
          ge_id={props.ge_id}
          updateThing={props.updateThing}
          {...props}
        />
      )}
      <Button.Group style={{ width: "40px" }}>
        <Button color="blue" onClick={() => setShowForm(!showForm)}>
          <Icon name="pencil" />
        </Button>
        <Button color="red" onClick={() => props.deleteThing(props.id)}>
          <Icon name="trash" />
        </Button>
      </Button.Group>
    </Card>
  );
};
export default Thing;
