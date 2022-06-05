import React, { useState } from "react";
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
import LoginPopup from "./components/modal/LoginPopup"

export default function App() {
  const [showModal, setShowModal] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <NavBar />
          {showModal && <LoginPopup onConfirm={() => setShowModal(false)} />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Event} />
            <Route path="/resources" component={Resource} />
            <Route path="/eventdetails" component={EventDetails} />
            <Route path="/teams" component={Teams} />
            <Route path="/team-tshirt" component={TeamTshirt} />
            <Protected
              setShowModal={setShowModal}
              path="/event-registration/:id"
              component={EventForm}
            />
            <Protected path="/create-profile" component={CreateProfile} />
            <Protected path="/view-profile/" component={ViewProfile} />
          </Switch>
          <Foot />
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}
