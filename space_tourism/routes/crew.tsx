/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Crew() {
  return (
    <div class={tw`z-0 h-screen bg-cover bg-crew-mobile sm:bg-crew-tablet md:bg-crew-desktop`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>
          Hello from Crew
        </p>
      </div>
    </div>
  );
}
