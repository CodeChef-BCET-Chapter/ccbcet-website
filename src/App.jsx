import React from "react";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";
import Home from "./Home";
import Resource from "./Resource";
import Event from "./Event";
import Teams from "./Teams";
import EventDetails from "./EventDetails";
import TeamTshirt from "./TeamTshirt";
import CreateProfile from "./components/CreateProfile";
import ViewProfile from "./components/ViewProfile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import EventForm from "./EventForm";
import Protected from "./components/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Event} />
            <Route path="/resources" component={Resource} />
            <Route path="/eventdetails" component={EventDetails} />
            <Route path="/teams" component={Teams} />
            <Route path="/team-tshirt" component={TeamTshirt} />
            <Route path="/event-registration/:id" component={EventForm} />
            <Route path="/create-profile" component={CreateProfile} />
            <Route path="/view-profile/" component={ViewProfile} />
          </Switch>
          <Foot />
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}
