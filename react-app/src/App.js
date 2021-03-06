import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import FooterNav from "./components/FooterNav";
import ProfilePage from "./components/ProfilePage";
import SpotPage from "./components/SpotPage/SpotPage";
import HomePage from "./components/HomePage";
import { authenticate } from "./store/session";


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/spots/:id">
          <SpotPage />
        </Route>
        <Route path="/users/:userId" exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/" exact={true}>
          <HomePage/>
        </Route>
      </Switch>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
