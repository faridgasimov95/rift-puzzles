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
    description: "Guess the champion from clues",
    component: ChampdlePage,
  },
  {
    name: "Rift Links",
    path: "rift-links",
    description: "Sort 16 League terms into four hidden groups",
    component: RiftLinksPage,
  },
  {
    name: "Ability Guesser",
    path: "ability-guesser",
    description: "Name the champion from a single ability",
    component: AbilityGuesserPage,
  },
  {
    name: "Sound of the Rift",
    path: "rift-sound",
    description: "Name the champion from the sound of an ability",
    component: RiftSoundPage,
  },
  {
    name: "The Shopkeeper",
    path: "shopkeeper",
    description: "Name the item from its stats and gold cost",
    component: ShopkeeperPage,
  },
  {
    name: "League Of Quotes",
    path: "quotes",
    description: "Name the champion from one of their voice lines",
    component: QuotesPage,
  },
];
