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
        'home-tablet': "URL('./img/home/background-home-tablet.jpg')",
        'home-mobile': "URL('./img/home/background-home-mobile.jpg')",

        'dest-desktop': "URL('./img/destination/background-destination-desktop.jpg')",
        'dest-tablet': "URL('./img/destination/background-destination-tablet.jpg')",
        'dest-mobile': "URL('./img/destination/background-destination-mobile.jpg')",

        'crew-desktop': "URL('./img/crew/background-crew-desktop.jpg')",
        'crew-tablet': "URL('./img/crew/background-crew-tablet.jpg')",
        'crew-mobile': "URL('./img/crew/background-crew-mobile.jpg')",

        'tech-desktop': "URL('./img/technology/background-technology-desktop.jpg')",
        'tech-tablet': "URL('./img/technology/background-technology-tablet.jpg')",
        'tech-mobile': "URL('./img/technology/background-technology-mobile.jpg')",
        
      }
    }
  }
};

if (IS_BROWSER) setup(config);
