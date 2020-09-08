export interface Person {
  person: string;
  image: string;
  bio?: string;
  type: Type;
  title: string;
  slug: string;
  document_id: string;
  document_link: string;
  document_title: string;
  timestamp: number;
  lang: Lang;
  "email-available": boolean;
  stories?: string[];
  "lang-missing": any[];
  "langs-available": Lang[];
  "team-bio"?: string;
  "team-title"?: string;
  methodologies?: string[];
  theories?: string[];
  principles?: string[];
  tactics?: string[];
  original?: string;
  "e-mail"?: string;
  cell?: string;
}

export enum Type {
  Theory = "theory",
  Principle = "principle",
  Methodology = "methodology",
  Person = "person",
  Tactic = "tactic",
  Story = "story"
}

export interface Story {
  story: string;
  snapshot: string;
  when?: string;
  where?: string;
  "short-write-up"?: string;
  image?: string;
  "image-caption"?: string;
  "image-permission"?: string;
  video?: string;
  "full-write-up"?: string;
  "why-it-worked"?: string;
  "pull-quote"?: string;
  tags: string[];
  tactics?: string[];
  principles: string[];
  theories?: string[];
  stories?: string[];
  methodologies?: string[];
  "learn-more"?: LearnMore[];
  type: Type;
  title: string;
  slug: string;
  document_id: string;
  document_link: string;
  document_title: string;
  timestamp: number;
  authors?: string[];
  epigraphs?: string[];
  regions: Region[];
  "key-tactics"?: string[];
  "key-principles"?: string[];
  lang: Lang;
  "module-type": ModuleType;
  "key-modules"?: KeyModules;
  byline?: string;
  "lang-missing": any[];
  "module-type-effective": ModuleType;
  "langs-available": Lang[];
  "why-it-failed"?: string;
  emails?: string[];
  "key-theories"?: string[];
  "key-methodologies"?: string[];
  note?: string;
  practitioners?: string[];
  bio?: string;
  translators?: string;
  "translated-by"?: string;
  "translator-notes"?: string;
  "default-language-content"?: string;
  https?: string;
  marikana?: string;
  "image-2"?: string;
  "image-caption-2"?: string;
  "image-permission-2"?: string;
  "video-caption"?: string;
}

export interface KeyModules {
  "key-tactics"?: Array<string[]>;
  "key-principles"?: Array<string[]>;
  "key-theories"?: Array<string[]>;
  "key-methodologies"?: Array<string[]>;
}

export interface LearnMore {
  title: string;
  link: string;
  source?: string;
  year?: string;
  Source?: string;
  Year?: string;
  Title?: string;
}

export enum Region {
  Africa = "Africa",
  Asia = "Asia",
  Europe = "Europe",
  LatinAmericaAndTheCaribbean = "Latin America and the Caribbean",
  MiddleEast = "Middle East",
  NorthAmerica = "North America",
  Worldwide = "Worldwide"
}

export interface Theory {
  theory: string;
  snapshot: string;
  "short-write-up"?: string;
  origins?: string;
  image?: string;
  "image-caption"?: string;
  "image-permission"?: string;
  "full-write-up"?: string;
  "pull-quote"?: string;
  tags?: string[];
  tactics?: string[];
  principles: string[];
  theories?: string[];
  stories?: string[];
  methodologies?: string[];
  "learn-more"?: LearnMore[];
  "real-world-examples"?: RealWorldExample[];
  type: Type;
  title: string;
  slug: string;
  document_id: string;
  document_link: string;
  document_title: string;
  timestamp: number;
  authors?: string[];
  epigraphs?: string[];
  lang: Lang;
  "module-type": ModuleType;
  byline?: string;
  "lang-missing": any[];
  "module-type-effective": ModuleType;
  "langs-available": Lang[];
  "translated-by"?: string;
  "default-language-content"?: string;
  "translator-notes"?: string;
  bio?: string;
  emails?: string[];
  https?: string;
  "key-principles"?: string[];
  "key-modules"?: KeyModules;
  "potential-risks"?: string;
}

export interface RealWorldExample {
  title: string;
  link: string;
  description: string;
  image: string;
  ignore?: string;
  CANNIBALIZE?: string;
  options?: string;
  https?: string;
  OR?: string;
  thought?: string;
  Holland?: string;
  Klein?: string;
  "potential-risks"?: string;
}

export interface Principle {
  principle: string;
  snapshot: string;
  "short-write-up"?: string;
  image?: string;
  "image-caption"?: string;
  "image-permission"?: string;
  "full-write-up"?: string;
  "potential-risks"?: string;
  "pull-quote"?: string;
  tags?: string[];
  tactics?: string[];
  principles?: string[];
  stories?: string[];
  methodologies?: string[];
  "learn-more"?: LearnMore[];
  "real-world-examples"?: RealWorldExample[];
  type: Type;
  title: string;
  slug: string;
  document_id: string;
  document_link: string;
  document_title: string;
  timestamp: number;
  authors?: string[];
  lang: Lang;
  "module-type": ModuleType;
  theories?: string[];
  byline?: string;
  "lang-missing": any[];
  "module-type-effective": ModuleType;
  "langs-available": Lang[];
  "bt-link"?: string;
  epigraphs?: string[];
  https?: string;
  focus?: string;
  "translated-by"?: string;
  "default-language-content"?: string;
  source?: string;
  bio?: string;
  emails?: string[];
  "key-principles"?: string[];
  "key-modules"?: KeyModules;
  "full-write-up-unfinished"?: string;
  quote?: string;
  note?: string;
  origins?: string;
  photo?: string;
}

export interface LearnMore {
  title: string;
  link: string;
  source?: string;
  year?: string;
  Video?: string;
  http?: string;
  Title?: string;
  Year?: string;
  description?: string;
  Source?: string;
}

export interface RealWorldExample {
  title: string;
  link: string;
  description: string;
  image: string;
  source?: string;
  year?: string;
}

export interface Methodology {
  methodology: string;
  snapshot: string;
  "short-write-up"?: string;
  origins?: string;
  image?: string;
  "image-caption"?: string;
  "image-permission"?: string;
  "image-2"?: string;
  "image-permission-2"?: ImagePermission2;
  tags: string[];
  principles?: string[];
  theories?: string[];
  methodologies?: string[];
  "learn-more": LearnMore[];
  "methodology-type"?: string;
  type: Type;
  title: string;
  slug: string;
  document_id: string;
  document_link: string;
  document_title: string;
  timestamp: number;
  authors: string[];
  lang: Lang;
  "module-type": ModuleType;
  stories: string[];
  tactics?: string[];
  byline: string;
  "lang-missing": any[];
  "module-type-effective": ModuleType;
  "langs-available": Lang[];
  "full-write-up"?: string;
  "potential-risks"?: string;
  "how-to-use"?: string;
  "pull-quote"?: string;
  "real-world-examples"?: RealWorldExample[];
  epigraphs?: string[];
  "image-3"?: string;
  http?: string;
  focus?: string;
  video?: string;
}

export enum ImagePermission2 {
  BT = "BT",
  BeautifulTrouble = "Beautiful Trouble",
  CreatedByBeautifulTrouble = "Created by Beautiful Trouble."
}

export interface RealWorldExample {
  title: string;
  link: string;
  description: string;
  image: string;
}

export interface Tactic {
  tactic: string;
  snapshot: string;
  authors?: string[];
  "short-write-up"?: string;
  image?: string;
  "image-caption"?: string;
  "image-permission"?: string;
  "full-write-up"?: string;
  "pull-quote"?: string;
  tags?: string[];
  tactics?: string[];
  principles?: string[];
  stories?: string[];
  "learn-more"?: LearnMore[];
  "real-world-examples"?: RealWorldExample[];
  type: Type;
  title: string;
  slug: string;
  document_id: string;
  document_link: string;
  document_title: string;
  timestamp: number;
  "key-principles"?: string[];
  lang: Lang;
  "module-type": ModuleType;
  "key-modules"?: KeyModules;
  byline?: string;
  "lang-missing": any[];
  "module-type-effective": ModuleType;
  "langs-available": Lang[];
  methodologies?: string[];
  theories?: string[];
  "potential-risks"?: string;
  "bt-link"?: string;
  epigraphs?: string[];
  https?: string;
  http?: string;
  bio?: string;
  emails?: string[];
  "key-theories"?: string[];
  footnotes?: string[];
}

export interface KeyModules {
  "key-principles"?: Array<string[]>;
  "key-theories"?: Array<string[]>;
}

export enum Lang {
  Ar = "ar",
  En = "en",
  Es = "es",
  Fr = "fr",
  Pt = "pt"
}

export interface LearnMore {
  title: string;
  link: string;
  source?: string;
  year?: string;
  Source?: string;
  Year?: string;
  Title?: string;
  Link?: string;
}

export enum ModuleType {
  Full = "full",
  Gallery = "gallery",
  Snapshot = "snapshot"
}

export interface RealWorldExample {
  title: string;
  link: string;
  description: string;
  image: string;
}
