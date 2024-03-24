// continents.enum.ts

enum Continent {
  Africa = 'Africa',
  Asia = 'Asia',
  Europe = 'Europe',
  SouthAmerica = 'South America',
  NorthAmerica = 'North America',
  Australia = 'Australia',
  Antarctica = 'Antarctica',
}

interface ContinentData {
  src: string;
  alt: string;
  description: string;
}

const ContinentDetails: Record<Continent, ContinentData> = {
  Africa: {
    src: "/locations/africa.webp",
    alt: "Africa",
    description: "Discover Africa's diverse wonders – from stunning safaris to vibrant markets. Your adventure begins now!"
  },
  Asia: {
    src: "/locations/asia.webp",
    alt: "Asia",
    description: "Discover Asia's diverse wonders – from stunning landscapes to vibrant cultures. Your adventure begins now!"
  },
  Europe: {
    src: "/locations/europe.webp",
    alt: "Europe",
    description: "Discover Europe's diverse wonders – from historical landmarks to breathtaking landscapes. Your adventure begins now!"
  },
  'South America': {
    src: "/locations/south_america.webp",
    alt: "South America",
    description: "Discover South America's diverse wonders – from lush rainforests to vibrant cities. Your adventure begins now!"
  },
  'North America': {
    src: "/locations/north_america.webp",
    alt: "North America",
    description: "Discover North America's diverse wonders – from natural wonders to iconic landmarks. Your adventure begins now!"
  },
  Australia: {
    src: "/locations/australia.webp",
    alt: "Australia",
    description: "Discover Australia's diverse wonders – from stunning beaches to unique wildlife. Your adventure begins now!"
  },
  Antarctica: {
    src: "/locations/antartica.webp",
    alt: "Antarctica",
    description: "Discover Antarctica's diverse wonders – from icy landscapes to unique wildlife. Your adventure begins now!"
  },
};

enum Styles {
  BeachGateway = 'Beach Gateway',
  AdvantureTrek = 'Advanture Trek',
  CityExploration = 'City Exploration',
  CultureJourney = 'Culture Journey',
  Wildlife = 'Wildlife',
  Relaxation = 'Relaxation',
}

interface StylesData {
  src: string;
  alt: string;
  description: string;
}

const StylesDetails: Record<Styles, StylesData> = {
  'Beach Gateway': {
    src: "/styles/beach_gateway.webp",
    alt: "Beach Gateway",
    description: "Discover Africa's diverse wonders – from stunning safaris to vibrant markets. Your adventure begins now!"
  },
  'Advanture Trek': {
    src: "/styles/advanture_trek.webp",
    alt: "Asia",
    description: "Discover Asia's diverse wonders – from stunning landscapes to vibrant cultures. Your adventure begins now!"
  },
  'City Exploration': {
    src: "/styles/city_exploration.webp",
    alt: "Europe",
    description: "Discover Europe's diverse wonders – from historical landmarks to breathtaking landscapes. Your adventure begins now!"
  },
  'Culture Journey': {
    src: "/styles/culture_journey.webp",
    alt: "South America",
    description: "Discover South America's diverse wonders – from lush rainforests to vibrant cities. Your adventure begins now!"
  },
  Wildlife: {
    src: "/styles/wildlife.webp",
    alt: "North America",
    description: "Discover North America's diverse wonders – from natural wonders to iconic landmarks. Your adventure begins now!"
  },
  Relaxation: {
    src: "/styles/relaxation.webp",
    alt: "Australia",
    description: "Discover Australia's diverse wonders – from stunning beaches to unique wildlife. Your adventure begins now!"
  },
};

export { Continent, ContinentDetails, Styles, StylesDetails };  export type { ContinentData, StylesData };

