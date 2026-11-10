import type { ComponentType } from "react";
import ChampdlePage from "./pages/Champdle";
import RiftLinksPage from "./pages/RiftLinks";
import AbilityGuesserPage from "./pages/AbilityGuesser";
import RiftSoundPage from "./pages/RiftSound";
import ShopkeeperPage from "./pages/Shopkeeper";
import QuotesPage from "./pages/Quotes";

export interface Game {
  name: string;
  path: string;
  description: string;
  component: ComponentType;
}

export const games: Game[] = [
  {
    name: "Champdle",
    path: "champdle",
    description: "",
    component: ChampdlePage,
  },
  {
    name: "Rift Links",
    path: "rift-links",
    description: "",
    component: RiftLinksPage,
  },
  {
    name: "Ability Guesser",
    path: "ability-guesser",
    description: "",
    component: AbilityGuesserPage,
  },
  {
    name: "Sound of the Rift",
    path: "rift-sound",
    description: "",
    component: RiftSoundPage,
  },
  {
    name: "The Shopkeeper",
    path: "shopkeeper",
    description: "",
    component: ShopkeeperPage,
  },
  {
    name: "League Of Quotes",
    path: "quotes",
    description: "",
    component: QuotesPage,
  },
];
