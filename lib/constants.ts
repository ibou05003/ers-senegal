export const ERS_INFO = {
  name: 'Energy Resources Sénégal SA',
  shortName: 'ERS SA',
  founded: 2013,
  slogan: 'Des énergies durables au service du développement',
  address: 'Lot n°44, Route de la Statue du Monument de la Renaissance, Ouakam, Sénégal',
  phones: ['+221 77 604 12 37', '+221 77 838 60 05'],
  emails: ['m.diallo@er-senegal.com', 'o.ndoye@er-senegal.com'],
  coordinates: { lat: 14.7167, lng: -17.4677 },
}

export const STATS = {
  mwInstalled: 20,
  co2Avoided: 18000,
  homesPowered: 160000,
  jobsCreated: 200,
  yearsExperience: 11,
}

export const PROJECTS = [
  {
    id: 'kahone',
    name: 'Centrale Solaire de Kahone',
    location: 'Kahone, Région de Kaolack',
    coordinates: { lat: 14.1833, lng: -15.9167 },
    capacity: '20 MWc',
    technology: 'solar' as const,
    status: 'operational' as const,
    year: 2018,
    partner: 'SENELEC',
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
    technology: 'storage' as const,
    status: 'development' as const,
    year: 2024,
    partner: 'ERS SA (filiale 100%)',
    impact: {
      co2Avoided: 27000,
      homesPowered: 240000,
      jobsCreated: 250,
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
    name: 'Mamadou Diallo',
    role: 'Directeur Général',
    roleEn: 'Chief Executive Officer',
    image: '/images/team/ceo.jpg',
    email: 'm.diallo@er-senegal.com',
  },
  {
    name: 'Ousmane Ndoye',
    role: 'Directeur des Opérations',
    roleEn: 'Chief Operating Officer',
    image: '/images/team/coo.jpg',
    email: 'o.ndoye@er-senegal.com',
  },
  {
    name: 'Aminata Sow',
    role: 'Directrice Financière',
    roleEn: 'Chief Financial Officer',
    image: '/images/team/cfo.jpg',
  },
  {
    name: 'Ibrahima Fall',
    role: 'Directeur Technique',
    roleEn: 'Chief Technical Officer',
    image: '/images/team/cto.jpg',
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Directrice RSE & Communication',
    roleEn: 'CSR & Communications Director',
    image: '/images/team/csr.jpg',
  },
  {
    name: 'Cheikh Ba',
    role: 'Directeur du Développement',
    roleEn: 'Business Development Director',
    image: '/images/team/bd.jpg',
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
