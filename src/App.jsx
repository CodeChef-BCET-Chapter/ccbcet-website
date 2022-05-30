import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";
import Resource from "./Resource";
import Event from "./Event";
import Teams from "./Teams";
import Inductionform from "./Inductionform";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import EventDetails from "./EventDetails";
import TeamTshirt from "./TeamTshirt";
import CreateProfile from "./components/CreateProfile";
import ViewProfile from "./components/ViewProfile";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Event} />
          <Route path="/resources" component={Resource} />
          <Route path="/eventdetails" component={EventDetails} />
          <Route path="/teams" component={Teams} />
          <Route path="/team-tshirt" component={TeamTshirt} />
          <Route path="/induction-registration" component={Inductionform} />
          <Route path="/create-profile" component={CreateProfile} />
          <Route path="/view-profile" component={ViewProfile} />
        </Switch>
        <Foot />
      </div>
    </BrowserRouter>
  );
}
