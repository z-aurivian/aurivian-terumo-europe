// Centralized mock data for Terumo Europe Congress & KOL Intelligence (LifePearl)

export const CONGRESS_OPTIONS = [
  {
    id: 'cirse-2024',
    name: 'CIRSE 2024',
    fullName: 'CIRSE Annual Congress 2024',
    location: 'Lisbon, Portugal',
    date: 'Sept 14–18, 2024',
    available: true,
    source: 'Cardiovascular and Interventional Radiological Society of Europe',
    sourceUrl: 'https://cirsecongress.cirse.org/wp-content/uploads/sites/4/2024/08/cirse2024_timetable_V3_prod.pdf',
    libraryUrl: 'https://library.cirse.org/cirse2024',
  },
  {
    id: 'cirse-2025',
    name: 'CIRSE 2025',
    fullName: 'CIRSE Annual Congress 2025',
    location: 'Barcelona, Spain',
    date: 'Sept 6–10, 2025',
    available: true,
    source: 'Cardiovascular and Interventional Radiological Society of Europe',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/41222632/',
    sourceNote: 'CIRSE 2025 Book of Abstracts, Cardiovasc Intervent Radiol. 2025 Nov;48(Suppl 4):381-1857.',
  },
  {
    id: 'trend-2024-2025',
    name: 'Trend: 2024 → 2025',
    fullName: 'Sentiment trend CIRSE 2024 to CIRSE 2025',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'cirse-2026',
    name: 'CIRSE 2026',
    fullName: 'CIRSE Annual Congress 2026',
    location: 'Copenhagen, Denmark',
    date: 'September 5–9, 2026',
    available: false,
    comingSoon: true,
    source: 'https://cirsecongress.cirse.org/about/theannualcongress/',
  },
  { id: 'europcr', name: 'EuroPCR', fullName: 'EuroPCR', location: '—', date: '—', available: false, comingSoon: true },
  { id: 'asco', name: 'ASCO', fullName: 'ASCO Annual Meeting', location: '—', date: '—', available: false, comingSoon: true },
];

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Post-CIRSE 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'CIRSE 2025'],
  scientific: [
    { period: 'Post-CIRSE 2024', LifePearl: 62, 'DC Bead': 58, HepaSphere: 55, Other: 50 },
    { period: 'Q4 2024', LifePearl: 68, 'DC Bead': 64, HepaSphere: 58, Other: 52 },
    { period: 'Q1 2025', LifePearl: 74, 'DC Bead': 70, HepaSphere: 62, Other: 54 },
    { period: 'Q2 2025', LifePearl: 80, 'DC Bead': 76, HepaSphere: 66, Other: 56 },
    { period: 'CIRSE 2025', LifePearl: 85, 'DC Bead': 82, HepaSphere: 70, Other: 58 },
  ],
  social: [
    { period: 'Post-CIRSE 2024', LifePearl: 58, 'DC Bead': 62, HepaSphere: 52, Other: 48 },
    { period: 'Q4 2024', LifePearl: 64, 'DC Bead': 66, HepaSphere: 54, Other: 50 },
    { period: 'Q1 2025', LifePearl: 70, 'DC Bead': 70, HepaSphere: 56, Other: 52 },
    { period: 'Q2 2025', LifePearl: 76, 'DC Bead': 74, HepaSphere: 60, Other: 54 },
    { period: 'CIRSE 2025', LifePearl: 82, 'DC Bead': 78, HepaSphere: 64, Other: 56 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'DEB-TACE with doxorubicin-loaded microspheres in BCLC B HCC', journalOrCongress: 'CIRSE 2024', date: '2024-09', product: 'LifePearl', sentiment: 'positive' },
  { title: 'Comparative outcomes of drug-eluting beads in HCC', journalOrCongress: 'CardioVasc Interv Radiol', date: '2024-11', product: 'LifePearl', sentiment: 'positive' },
  { title: 'Irinotecan-loaded beads in colorectal liver metastases', journalOrCongress: 'Eur Radiol', date: '2025-01', product: 'DC Bead', sentiment: 'neutral' },
  { title: 'Degradable vs permanent beads: systematic review', journalOrCongress: 'Cardiovasc Intervent Radiol (CIRSE 2025 Book of Abstracts)', date: '2025-11', product: 'LifePearl', sentiment: 'positive' },
  { title: 'HepaSphere in TACE: real-world European data', journalOrCongress: 'J Vasc Interv Radiol', date: '2024-12', product: 'HepaSphere', sentiment: 'neutral' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'Twitter', author: 'Prof. E. Rossi', topic: 'TACE + IO combination', date: '2024-10', product: 'LifePearl', sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. T. Weber', topic: 'LifePearl real-world outcomes', date: '2024-11', product: 'LifePearl', sentiment: 'neutral' },
  { platform: 'Twitter', author: 'KOL Oncology', topic: 'DEB-TACE HCC systematic review', date: '2025-02', product: 'LifePearl', sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. M. Santos', topic: 'DC Bead LUMI in mCRC', date: '2025-03', product: 'DC Bead', sentiment: 'neutral' },
  { platform: 'Conference backchannel', author: 'Multiple', topic: 'CIRSE 2025 takeaways', date: '2025-09', product: 'LifePearl', sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 12,
  abstracts: 985,
  posters: 312,
  speakers: 278,
  publicationsLinked: 1142,
  sessions: [
    { title: 'TACE and DEB-TACE in HCC', track: 'Interventional Oncology', products: ['LifePearl', 'DC Bead', 'HepaSphere'] },
    { title: 'Embolization techniques in mCRC', track: 'IO', products: ['LifePearl', 'DC Bead LUMI'] },
    { title: 'LifePearl real-world outcomes in HCC', track: 'IO', products: ['LifePearl'] },
  ],
};

export const MOCK_THEMES = [
  { theme: 'TACE + immuno-oncology combinations', momentum: 92, mentions: 47 },
  { theme: 'Degradable vs permanent beads in HCC', momentum: 88, mentions: 38 },
  { theme: 'Sequencing with TKIs in mCRC', momentum: 85, mentions: 31 },
  { theme: 'Device selection in complex anatomy', momentum: 79, mentions: 28 },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: 'LifePearl (Terumo)', share: 28, mentions: 89 },
  { product: 'DC Bead / DC Bead LUMI (BTG/Boston Scientific)', share: 32, mentions: 102 },
  { product: 'HepaSphere (Merit Medical)', share: 22, mentions: 71 },
  { product: 'Other / Tandem (Varian)', share: 18, mentions: 57 },
];

export const MOCK_TOP_KOLS = [
  { rank: 1, name: 'Prof. Elena Rossi', institution: 'Milan University Hospital', score: 94, asset: 'LifePearl', congressTalks: 3, publications: 12 },
  { rank: 2, name: 'Dr. Thomas Weber', institution: 'Charité Berlin', score: 91, asset: 'LifePearl', congressTalks: 2, publications: 8 },
  { rank: 3, name: 'Prof. Sophie Martin', institution: 'AP-HP Paris', score: 89, asset: 'LifePearl', congressTalks: 2, publications: 14 },
  { rank: 4, name: 'Dr. James Chen', institution: 'Oxford University Hospitals', score: 87, asset: 'LifePearl', congressTalks: 1, publications: 9 },
  { rank: 5, name: 'Prof. Anna Kowalski', institution: 'Warsaw Medical University', score: 86, asset: 'LifePearl', congressTalks: 2, publications: 7 },
  { rank: 6, name: 'Dr. Miguel Santos', institution: 'Hospital Clinic Barcelona', score: 84, asset: 'LifePearl', congressTalks: 1, publications: 11 },
  { rank: 7, name: 'Prof. Lisa Bergström', institution: 'Karolinska Institutet', score: 82, asset: 'LifePearl', congressTalks: 2, publications: 6 },
  { rank: 8, name: 'Dr. Pierre Dubois', institution: 'University Hospital Geneva', score: 80, asset: 'LifePearl', congressTalks: 1, publications: 10 },
  { rank: 9, name: 'Prof. Yuki Tanaka', institution: 'Tokyo Medical University', score: 78, asset: 'LifePearl', congressTalks: 1, publications: 8 },
  { rank: 10, name: 'Dr. Maria Fernandez', institution: 'Hospital La Paz Madrid', score: 76, asset: 'LifePearl', congressTalks: 1, publications: 5 },
];

/** KOL graph: nodes from top KOLs, links = co-author / shared theme / institution cluster (for force-directed viz) */
export const KOL_GRAPH_DATA = (() => {
  const nodes = MOCK_TOP_KOLS.map((k) => ({ id: String(k.rank), ...k }));
  const links = [
    { source: '1', target: '2' }, { source: '1', target: '3' }, { source: '2', target: '3' },
    { source: '2', target: '4' }, { source: '3', target: '4' }, { source: '3', target: '5' },
    { source: '4', target: '5' }, { source: '4', target: '6' }, { source: '5', target: '6' },
    { source: '5', target: '7' }, { source: '6', target: '7' }, { source: '6', target: '8' },
    { source: '7', target: '8' }, { source: '7', target: '9' }, { source: '8', target: '9' },
    { source: '8', target: '10' }, { source: '9', target: '10' },
  ];
  return { nodes, links };
})();

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText', status: 'connected', description: 'Agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials', label: 'Clinical Trials', iconId: 'Activity', status: 'available', description: 'Trial sponsorship, sites, outcomes by asset' },
  { id: 'social', label: 'Social & Digital', iconId: 'MessageCircle', status: 'available', description: 'Scientific and digital footprint' },
];

export const MOCK_TRIALS = {
  total: 47,
  linkedToKOLs: 28,
  byIndication: { HCC: 22, mCRC: 14, ICC: 6 },
  sample: [
    { nctId: 'NCT02670122', title: 'Safety of DEB-TACE with 100µm beads in non-resectable HCC', phase: 'Phase II', sponsor: 'Academic', product: 'LifePearl', indication: 'HCC', status: 'Completed', sites: 12 },
    { nctId: 'NCT03113955', title: 'Epirubicin-loaded microspheres for HCC (STOPPER Trial)', phase: 'Phase II', sponsor: 'Academic', product: 'LifePearl', indication: 'HCC', status: 'Completed', sites: 15 },
    { nctId: 'NCT02766258', title: 'DEB-TACE with doxorubicin vs conventional TACE in HCC', phase: 'Phase III', sponsor: 'Academic', product: 'LifePearl', indication: 'HCC', status: 'Recruiting', sites: 24 },
    { nctId: 'NCT03033446', title: 'Irinotecan-loaded beads in colorectal liver metastases', phase: 'Phase II', sponsor: 'Boston Scientific', product: 'DC Bead LUMI', indication: 'mCRC', status: 'Active', sites: 18 },
  ],
};

export const MOCK_CLAIMS = {
  totalRecords: 12480,
  period: '2025 Q1–Q3',
  regions: ['DE', 'FR', 'ES', 'IT', 'UK'],
  byProduct: [
    { product: 'LifePearl', procedures: 2847, share: 23 },
    { product: 'DC Bead / LUMI', procedures: 3124, share: 25 },
    { product: 'HepaSphere', procedures: 1892, share: 15 },
    { product: 'Other TACE', procedures: 4617, share: 37 },
  ],
  sample: [
    { region: 'Germany', period: '2025 Q3', procedureType: 'DEB-TACE', product: 'LifePearl', volume: 412, avgLOS: '2.1 days' },
    { region: 'France', period: '2025 Q3', procedureType: 'cTACE', product: '—', volume: 287, avgLOS: '2.4 days' },
    { region: 'Spain', period: '2025 Q3', procedureType: 'DEB-TACE', product: 'DC Bead', volume: 198, avgLOS: '2.0 days' },
  ],
};

export const MOCK_REGISTRIES = {
  totalRegistries: 8,
  totalRecordsLinked: 45620,
  sample: [
    { name: 'European Liver Registry (ELR)', country: 'EU', indication: 'HCC / liver', recordsLinked: 18200, lastUpdate: '2025-10' },
    { name: 'CIRSE IO Registry', country: 'EU', indication: 'Interventional oncology', recordsLinked: 12400, lastUpdate: '2025-09' },
    { name: 'CIRSE TACE Registry', country: 'EU', indication: 'TACE / DEB-TACE', recordsLinked: 8420, lastUpdate: '2025-11' },
    { name: 'GERMANY HCC Quality Registry', country: 'DE', indication: 'HCC', recordsLinked: 6600, lastUpdate: '2025-08' },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 3840,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'Twitter / X', mentions: 1240, kolsTracked: 89 },
    { platform: 'LinkedIn', mentions: 892, kolsTracked: 112 },
    { platform: 'PubMed / alerts', mentions: 456, kolsTracked: 312 },
    { platform: 'Conference backchannels', mentions: 1252, kolsTracked: 156 },
  ],
  sample: [
    { platform: 'Twitter', author: 'Prof. E. Rossi', topic: 'TACE + IO combination', sentiment: 'positive', date: '2025-11-12' },
    { platform: 'LinkedIn', author: 'Dr. T. Weber', topic: 'LifePearl real-world outcomes', sentiment: 'neutral', date: '2025-11-08' },
    { platform: 'PubMed alert', author: 'Multiple', topic: 'DEB-TACE HCC systematic review', sentiment: 'positive', date: '2025-11-05' },
  ],
};

/** Build full demo context for Auri (congress, ingestion, themes, competitors, KOLs, trials, social, trend, sources) */
export function getDemoContext() {
  return {
    congressOptions: CONGRESS_OPTIONS,
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    topKols: MOCK_TOP_KOLS,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
