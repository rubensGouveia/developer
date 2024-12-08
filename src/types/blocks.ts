import { BackgroundType, ButtonCardType, DemoType } from "./fetchData.types";

type ComponentType =
  | "sections.hero-video"
  | "sections.brands"
  | "sections.card-content-grid"
  | "sections.modules"
  | "sections.centered-cta";

interface ButtonProps {
  appearance: 'solid'|'ghost';
  size: string;
  color: string;
  id: number;
  url: string;
  text: string;
  subText?: string;
  fluid: boolean;
  newTab: boolean;
  startIcon?: string;
  endIcon: string;
}

interface Base<T extends ComponentType> {
  __component: T;
  id: string;
  theme: string;
}
type BrandType = {
  id: number;
  alternativeText?: string;
  title: string;
  url: string;
};
type CardBase = {
  id: number;
  title: string;
  description: string;
};

interface CardTypeCardGrid extends CardBase{
    icon: string;
}
interface CardTypeModules extends CardBase{
    button: ButtonCardType;
}
export type Block =
  | HeroVideoProps
  | BrandsProps
  | CardContentGridProps
  | ModulesProps
  | CenteredCTAProps;




export interface HeroVideoProps extends Base<"sections.hero-video"> {
  full: boolean;
  preTitle?: null | string;
  title: string;
  description: string;
  buttons: ButtonProps[];
  demo: DemoType;
  background:BackgroundType 
}

export interface BrandsProps extends Base<"sections.brands"> {
  brands: BrandType[];
}

export interface CardContentGridProps extends Base<"sections.card-content-grid"> {
  preTitle?: null | string;
  title: string;
  description: string;
  cards: CardTypeCardGrid[];
}

export interface ModulesProps extends Base<"sections.modules"> {
    preTitle?: null | string;
    title: string;
    description: string;
    cards:CardTypeModules[];
  }


  export interface CenteredCTAProps extends Base<"sections.centered-cta"> {
    preTitle?: null | string;
    title: string;
    description: string;
    buttons: ButtonProps[];
}