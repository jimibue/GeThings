import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// api/ges => [{id, name, description, category}]

const dummyGes = [
  { id: 1, name: "Ge1", description: "descprition 1", category: "cat1" },
  { id: 2, name: "Ge2", description: "descprition 2", category: "cat3" },
];

const Ges = () => {
  const [ges, setGes] = useState([]);

  useEffect(() => {
    getGes();
  }, []);

  const getGes = async () => {
    try {
      let res = await axios.get("/api/ges");
      setGes(res.data);
    } catch (err) {
      setGes(dummyGes);
      // could error
      // console.log(err);
    }
  };

  const deleteGe = async (id) => {
    try {
      let res = await axios.delete(`/api/ges/${id}`);
      setGes(ges.filter((g) => g.id !== id));
    } catch (err) {
      setGes(ges.filter((g) => g.id !== id));
      // could error
      // console.log(err);
    }
  };

  const renderGes = () => {
    return ges.map((g) => {
      return (
        <Card>
          <Card.Content header={g.name} />
          <Card.Content description={g.description} />
          <Card.Content extra>{g.category}</Card.Content>
          <Button.Group>
            <Link to={`/ges/${g.id}`}>
              <Button color="blue">show</Button>
            </Link>
            <Link to={`/ges/${g.id}/edit`}>
              <Button color="blue">edit</Button>
            </Link>

            <Button color="red" onClick={() => deleteGe(g.id)}>
              delete
            </Button>
          </Button.Group>
        </Card>
      );
    });
  };
  return (
    <div>
      <h1>Ges</h1>
      <Link to={`/ges/new`}>
        <Button color="blue">new</Button>
      </Link>
      <Card.Group>{renderGes()}</Card.Group>
    </div>
  );
};

export default Ges;
