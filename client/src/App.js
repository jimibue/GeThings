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

function App() {
  return (
    <>
    <p>here</p>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gess" component={Ges} />
          <Route exact path="/gess/new" component={GeFormNew} />
          <Route exact path="/gess/:idd" component={Ge} />
          <Route exact path="/gess/:id/edit" component={GeFormEdit} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
