import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Segment } from "semantic-ui-react";

// full crud
const Cats = () => {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    try {
      let res = await axios.get(`/api/cats`);
      setCats(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteCat = async (id) => {
    try {
      let res = await axios.delete(`/api/cats/${id}`);
      setCats(cats.filter((c) => c.id !== id));
    } catch (err) {
      alert(err);
    }
  };

  const renderCats = () => {
    return cats.map((c) => {
      return (
        <Segment>
          <Header>{c.name}</Header>
          <div>
            <Link to={{ pathname: `cats/${c.id}/edit`, cat: c }}>edit</Link>
            <Icon onClick={() => deleteCat(c.id)} name="trash"></Icon>
          </div>
        </Segment>
      );
    });
  };
  return (
    <div>
      <h1>Cats page</h1>
      <p>meow</p>
      <Link to="cats/new">New Cat</Link>
      {renderCats()}
    </div>
  );
};

export default Cats;
