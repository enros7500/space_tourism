/** @jsx h */
import { h } from "preact";
import * as React from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Navbar from "../islands/Navbar.tsx";

export default function Home() {
  return (
  <>
    <Navbar />
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice" />
      <p class={tw`my-6`}>
        Get Refreshed
      </p>
      <Counter start={3} />
      <a href='/crew'>Crew</a>
      <a href='/dest'>Destinations</a>
      <a href='/tech'>Technology</a>
    </div>
  </>
  );
}