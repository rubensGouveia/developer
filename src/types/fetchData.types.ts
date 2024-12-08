export enum LocaleEnum{
  pt = 'Português',
  en = 'English'
}

export type LocaleType = keyof typeof LocaleEnum
export interface PageResponse {
  id: number;
  slug: string;
  path: string;
  locale:LocaleType ;
  alternates: Alternate[];
  metadata: Metadata;
  contentSections: ContentSection[];
}
export interface ContentSection {
  id: number;
  __component: string;
  theme: string;
  full?: boolean;
  preTitle?: string;
  title?: string;
  description?: string;
  buttons?: ButtonType[];
  demo?: DemoType;
  background?: Background;
  brands?: Brand[];
  cards?: Card[];
}
interface Card {
  id: number;
  title: string;
  description: string;
  icon?: string;
  button?: ButtonCardType;
}
export type ButtonCardType = {
  id: number;
  url: string;
  text: string;
}
interface Brand {
  id: number;
  alternativeText?: string;
  title: string;
  url: string;
}
export type BackgroundType = {
  id: number;
  alternativeText?: string;
  width: number;
  height: number;
  url: string;
};
export type DemoType = {
  id: number;
  title: string;
  url: string;
  format: string;
};
export type ButtonType= {
  id: number;
  appearance: string;
  size: string;
  color: string;
  url: string;
  text: string;
  subText?: string;
  fluid: boolean;
  newTab: boolean;
  startIcon?: string;
  endIcon?: string;
}
interface Metadata {
  id: number;
  metaTitle: string;
  metaDescription: string;
  robots?: string | null;
  shareImage: string;
}
export interface Alternate {
  locale: LocaleType;
  path: string;
}



export interface GlobalsResponse {
  id: number
  locale: LocaleType
  siteName: string
  helpText: string
  copyright: string
  metadata: Metadata
  menu: Menu[]
  social: Social
  footerMenu: Menu[]
}

export interface Menu {
  id: number
  title: string
  link?: string
  openNewWindow: boolean
  dropdown?: Dropdown[]
}

export interface Dropdown {
  id: number
  title: string
  link: string
  openNewWindow: boolean
}

export interface Social {
  facebook: string
  instagram: string
  twitter: string
  youTube: string
  tikTok: string
  linkedIn: string
}

