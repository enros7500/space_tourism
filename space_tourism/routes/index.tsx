/** @jsx h */
import * as React from "preact";
import { useEffect } from "preact/hooks";

import { h } from "preact";
import { tw } from "@twind";
import Crew from "./crew/index.tsx";
import Dest from "./dest/index.tsx";
import Tech from "./tech/index.tsx";

import Counter from "../islands/Counter.tsx";
import Navbar from "../islands/Navbar.tsx";
/*import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "router";
*/
const { Router, route } = 'preactRouter';


export default function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>
          Main Index
        </p>
        <Counter start={3} />
      </div>
        <Router>
          <Crew path="/crew" />
        </Router>
        {/*
        <Switch>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route path="/dest">
            <Dest />
          </Route>
          <Route path="/tech">
            <Tech />
          </Route>
          
          <Route path="/ge">
            <Tech />
          </Route>
          
  </Switch>*/}
      
    </React.Fragment>
  );
}