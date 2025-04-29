import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Tour } from "./components/Tour";
import { Page } from "./components/Page";
import { Hero } from "./components/Hero";
import { Grid } from "./components/Grid";
import { Feature } from "./components/Feature";
import { Testimonial } from "./components/Testimonial";
import { RecommendedTours } from "./components/RecommendedTours";


export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    tour: Tour,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_tours: RecommendedTours,
  },
  enableFallbackComponent: true,
});
