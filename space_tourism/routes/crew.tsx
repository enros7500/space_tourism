/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Crew() {
  return (
    <div class={tw`h-screen bg-crew-desktop bg-cover`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>
          Hello from Crew
        </p>
      </div>
    </div>
  );
}
