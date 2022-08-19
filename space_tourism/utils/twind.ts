import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "URL('./img/home/background-home-desktop.jpg')",
        'dest-desktop': "URL('./img/destination/background-destination-desktop.jpg')",
        'crew-desktop': "URL('./img/crew/background-crew-desktop.jpg')",
        'tech-desktop': "URL('./img/technology/background-technology-desktop.jpg')",
        
      }
    }
  }
};

if (IS_BROWSER) setup(config);
