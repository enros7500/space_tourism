/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Tech() {
  return (
    <div class={tw`h-screen bg-cover bg-tech-mobile sm:bg-tech-tablet md:bg-tech-desktop`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>
          Get Technology
        </p>
      </div>
    </div>
  );
}
