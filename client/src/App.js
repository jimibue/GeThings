import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Ge from "./Ge";
import Home from "./Home";
import Ges from "./Ges";
import { Container } from "semantic-ui-react";
import GeFormNew from "./GeFormNew";
import GeFormEdit from "./GeFormEdit";
import NavBar from "./Navbar";
import About from "./About";
import Cats from "./Cats";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/ges" component={Ges} />
          <Route exact path="/cats" component={Cats} />
          <Route exact path="/ges/new" component={GeFormNew} />
          <Route exact path="/ges/:id" component={Ge} />
          <Route exact path="/ges/:id/edit" component={GeFormEdit} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
