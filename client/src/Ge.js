import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Segment } from "semantic-ui-react";
import Thing from "./Thing";
import ThingForm from "./ThingForm";

// get -> 'api/ges/ge_id/things' =>
//res.data... {ge: {id, name, desctription}, things:[{id,name}]}

// post -> 'api/ges/ge_id/things' {name*required}=> {id,name} create thing to db
// put -> 'api/ges/ge_id/things/:id' {name*required}=> {id,name} updates thing to db

// delete -> 'api/ges/ge_id/things/:id' => {id,name} delete thing in db

// without a functional db
// get and render ge and things
// create form for update/create
// semantic ui react form tutorial
// delete thing (from db) and ui
// create thing (from db) and ui
// update thing (from db) and ui
// toggle UI form in thing

const dummyresData = {
  ge: {
    id: 1,
    name: "ge1",
    description: "ge1 desc",
    category: "ge1 desc",
  },
  things: [
    { id: 1, name: "ge thing1" },
    { id: 2, name: "ge thing2" },
  ],
};

const Ge = (props) => {
  const [ge, setGe] = useState({});
  const [things, setThings] = useState([]);
  const [showform, setShowForm] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get(`/api/ges/${props.match.params.id}/things`);
      setGe(res.data.ge);
      setThings(res.data.things);
    } catch (err) {
      // setGe(dummyresData.ge);
      // setThings(dummyresData.things);
      alert(err);
      console.log(err);
    }
  };

  const addThing = (thing) => {
    // adding thing to UI
    setThings([thing, ...things]);
  };

  const updateThing = (thing) => {
    // update thing to UI
    const updateThings = things.map((t) => (t.id === thing.id ? thing : t));
    setThings(updateThings);
  };
  const renderGe = () => {
    return (
      <Segment>
        <h1>{ge.name}</h1>
        <h1>{ge.description}</h1>
      </Segment>
    );
  };

  const deleteThing = async (thing_id) => {
    console.log(thing_id);
    try {
      let res = await axios.delete(
        `/api/ges/${props.match.params.id}/things/${thing_id}`
      );
      // remove from UI
      setThings(things.filter((t) => t.id !== thing_id));
    } catch (err) {
      console.log(err);
      setThings(things.filter((t) => t.id !== thing_id));
    }
  };

  const renderThings = () => {
    return things.map((t) => (
      <Thing
        deleteThing={deleteThing}
        ge_id={props.match.params.id}
        updateThing={updateThing}
        {...t}
      />
    ));
  };

  return (
    <div>
      <p>id from react router(use this): {props.match.params.id}</p>
      {renderGe()}
      <Button onClick={() => setShowForm(!showform)}>
        {showform ? "hide form" : "New Thing"}
      </Button>
      {showform && (
        <ThingForm ge_id={props.match.params.id} addThing={addThing} />
      )}
      {renderThings()}
    </div>
  );
};

export default Ge;
