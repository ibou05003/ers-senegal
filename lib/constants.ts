export const ERS_INFO = {
  name: 'Energy Resources Sénégal SA',
  shortName: 'ERS SA',
  founded: 2013,
  slogan: 'Des énergies durables au service du développement',
  address: 'Lot n°44, Route de la Statue du Monument de la Renaissance, Ouakam, Sénégal',
  phones: ['+221 77 604 12 37', '+221 77 838 60 05'],
  emails: ['contact@er-senegal.com'],
  coordinates: { lat: 14.7167, lng: -17.4677 },
}

export const STATS = {
  mwInstalled: 20,
  co2Avoided: 18000,
  homesPowered: 160000,
  jobsCreated: 200,
  yearsExperience: 11,
}

export type ProjectTechnology = 'solar' | 'storage' | 'wind' | 'dual-fuel'
export type ProjectStatus = 'operational' | 'development'

export const PROJECTS = [
  {
    id: 'kahone',
    name: 'Centrale Solaire de Kahone',
    location: 'Kahone, Région de Kaolack',
    coordinates: { lat: 14.1833, lng: -15.9167 },
    capacity: '20 MWc',
    technology: 'solar' as ProjectTechnology,
    status: 'operational' as ProjectStatus,
    year: 2018,
    partner: 'SENELEC',
    image: '/images/projects/kahone-centrale-solaire-aerienne.jpg',
    impact: {
      co2Avoided: 18000,
      homesPowered: 160000,
      jobsCreated: 150,
    },
  },
  {
    id: 'niakhar',
    name: 'Teranga Niakhar Storage',
    location: 'Niakhar, Région de Fatick',
    coordinates: { lat: 14.4833, lng: -16.4000 },
    capacity: '30 MWc + 15 MW / 45 MWh BESS',
    technology: 'storage' as ProjectTechnology,
    status: 'development' as ProjectStatus,
    year: 2024,
    partner: 'ERS SA (filiale 100%)',
    image: '/images/projects/niakhar-panneaux-perspective.jpg',
    impact: {
      co2Avoided: 27000,
      homesPowered: 240000,
      jobsCreated: 250,
    },
  },
  {
    id: 'notto',
    name: 'Teranga Notto Éolien',
    location: 'Notto, Sénégal',
    coordinates: { lat: 14.95, lng: -17.05 },
    capacity: 'Travaux en cours',
    technology: 'wind' as ProjectTechnology,
    status: 'development' as ProjectStatus,
    year: 2025,
    partner: 'ERS SA',
    image: '/images/projects/kahone-vue-panoramique.jpg',
    impact: {
      co2Avoided: 0,
      homesPowered: 0,
      jobsCreated: 0,
    },
  },
  {
    id: 'cap-des-biches',
    name: 'Teranga Cap des Biches',
    location: 'Cap des Biches, Rufisque, Sénégal',
    coordinates: { lat: 14.7333, lng: -17.3 },
    capacity: 'Travaux en cours',
    technology: 'dual-fuel' as ProjectTechnology,
    status: 'development' as ProjectStatus,
    year: 2025,
    partner: 'ERS SA',
    image: '/images/projects/kahone-galerie-2.jpg',
    impact: {
      co2Avoided: 0,
      homesPowered: 0,
      jobsCreated: 0,
    },
  },
]

export const TIMELINE_EVENTS = [
  { year: 2013, key: 'timeline2013' },
  { year: 2016, key: 'timeline2016' },
  { year: 2018, key: 'timeline2018' },
  { year: 2021, key: 'timeline2021' },
  { year: 2024, key: 'timeline2024' },
]

export const TEAM_MEMBERS = [
  {
    name: 'Sabaly',
    role: "Chef d'exploitation",
    roleEn: 'Chief of Operations',
    image: '/images/team/sabaly-chef-exploitation.jpg',
  },
]

export const SAMPLE_ARTICLES = [
  {
    slug: 'kahone-bilan-2024',
    titleFr: 'Centrale de Kahone : bilan positif après 6 ans d\'exploitation',
    titleEn: 'Kahone Power Plant: Positive Results After 6 Years of Operation',
    excerptFr: 'La centrale solaire de Kahone continue de démontrer l\'efficacité de l\'énergie solaire au Sénégal avec des performances en constante progression.',
    excerptEn: 'The Kahone solar power plant continues to demonstrate the effectiveness of solar energy in Senegal with steadily improving performance.',
    category: 'case-study',
    date: '2024-11-15',
    image: '/images/blog/kahone-bilan.jpg',
  },
  {
    slug: 'niakhar-avancement-projet',
    titleFr: 'Teranga Niakhar Storage : le projet qui combine solaire et stockage avance',
    titleEn: 'Teranga Niakhar Storage: The Solar-Storage Project Moves Forward',
    excerptFr: 'Le projet de nouvelle génération de Niakhar franchit une étape clé dans son développement, combinant 30 MWc de solaire et 15 MW de stockage par batteries.',
    excerptEn: 'The next-generation Niakhar project reaches a key milestone in its development, combining 30 MWp of solar and 15 MW of battery storage.',
    category: 'press',
    date: '2024-10-02',
    image: '/images/blog/niakhar-progress.jpg',
  },
  {
    slug: 'ers-objectif-500mw',
    titleFr: 'ERS SA confirme son objectif de 500 MW à l\'horizon 2030',
    titleEn: 'ERS SA Confirms Its 500 MW Target by 2030',
    excerptFr: 'Avec un portefeuille de projets en expansion, ERS SA réaffirme son ambition de devenir un acteur majeur de la transition énergétique en Afrique de l\'Ouest.',
    excerptEn: 'With an expanding project portfolio, ERS SA reaffirms its ambition to become a major player in the energy transition in West Africa.',
    category: 'press',
    date: '2024-08-20',
    image: '/images/blog/500mw-target.jpg',
  },
]
