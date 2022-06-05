import React, {useState} from "react";
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
import useDetectClickOut from "./hooks/useDetectClickOut";
import LoginPopUp from "./components/Modal/LoginPopUp";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const { setShow, show, nodeRef, triggerRef } = useDetectClickOut(false);
  return (
    <BrowserRouter>
      <div className="App">
        <AuthContextProvider>
          <NavBar />
          {showModal ? <LoginPopUp setShowModal={setShowModal} /> : null}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/events" component={Event} />
            <Route path="/resources" component={Resource} />
            <Route path="/eventdetails" component={EventDetails} />
            <Route path="/teams" component={Teams} />
            <Route path="/team-tshirt" component={TeamTshirt} />
            <Protected path="/event-registration/:id" component={EventForm} />
            <Protected path="/create-profile" component={CreateProfile} />
            <Protected path="/view-profile/" component={ViewProfile} />
          </Switch>
          <Foot />
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}
