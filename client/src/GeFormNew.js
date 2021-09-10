import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

const options = [
  { key: "1", text: "Gin", value: "jin" },
  { key: "2", text: "Juice", value: "juice" },
];

const GeFormNew = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
      return;
    }
    // axios call
    // we could use our standard, the older way
    axios
      .post(`/api/ges`, { name, description, category })
      .then((res) => {
        props.history.push("/ges");
      })
      .catch((err) => {
        console.log(err);
      });

    // try {
    //   let res = await axios.post(`/api/ges`, { name, description, category });
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  const nameChanged = (e, { value }) => {
    if (setNameError && value != "") {
      setNameError(false);
    }
    setName(value);
  };
  return (
    <>
      <Link to="/ges">back to ges</Link>
      <h1>GeFormNew</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>name</label>
          <Form.Input
            error={nameError && "name can't be blank"}
            value={name}
            onChange={nameChanged}
          />
          <label>desctription</label>
          <Form.TextArea
            value={description}
            onChange={(e, { value }) => setDescription(value)}
          />
          <Form.Select
            value={category}
            onChange={(e, { value }) => {
              setCategory(value);
            }}
            placeholder={"please select"}
            options={options}
          />
          <Button type="submit" color="blue">
            add
          </Button>
        </Form.Field>
      </Form>
    </>
  );
};

export default GeFormNew;
