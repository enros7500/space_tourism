/** @jsx h */
import * as React from "preact";
import { h } from "preact";
import { tw } from "@twind";

import Counter from "../islands/Counter.tsx";


export default function Index() {
  return (
    <React.Fragment>
      <div class={tw`h-screen bg-home-desktop bg-cover`}>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <p class={tw`my-6`}>
          Hi Home!
          </p>
          {/*
            <Counter start={3} />
          */}
        </div>      
      </div>
    </React.Fragment>
  );
}