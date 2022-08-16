/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Dest() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`my-6`}>
        Get Destinated
      </p>
      <a href='/'>Home</a>
    </div>
  );
}