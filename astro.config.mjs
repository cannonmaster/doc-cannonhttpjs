import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "CannonHttpJS",
      social: {
        github: "https://github.com/cannonmaster/CannonHttpJS",
      },
      sidebar: [
        {
          label: "The basics",
          translations: { "zh-CN": "基本" },
          autogenerate: { directory: "basic" },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Example Guide", link: "/guides/example/" },
          // ],
        },
        {
          label: "Advanced",
          translations: { "zh-CN": "高级使用" },
          autogenerate: { directory: "advanced" },
        },
      ],
      defaultLocale: "en",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        zh: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
