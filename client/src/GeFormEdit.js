import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

// 1. grab data from db
// 2. set state
// 3. render form with values
// 4. set change handlers
// 5 handlesubmit function
// 6 axios put
// 7 route to index page

const GeFormEdit = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    getGe();
  }, []);

  const getGe = async () => {
    try {
      let res = await axios.get(`/api/ges/${props.match.params.id}`);
      setName(res.data.name);
      setDescription(res.data.description);
      setCategory(res.data.category);
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = async (e) => {
    try {
      let res = await axios.put(`/api/ges/${props.match.params.id}`, {
        name,
        description,
        category,
      });
      props.history.push("/ges");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <Link to="/ges">back</Link>
      <h1>GeFormEdit Bobs Changes here have been push to master</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>name</label>
          <Form.Input
            required
            value={name}
            onChange={(e, { value }) => setName(value)}
          />
          <label>description</label>
          <Form.Input
            value={description}
            onChange={(e, { value }) => setDescription(value)}
          />
          <label>category</label>
          <Form.Input
            value={category}
            onChange={(e, { value }) => setCategory(value)}
          />
        </Form.Field>
        <Button>update</Button>
      </Form>
    </div>
  );
};

export default GeFormEdit;
