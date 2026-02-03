// Centralized mock data for Terumo Europe Congress & KOL Intelligence (LifePearl)

// Import enriched KOLs from strategic content
import { getEnrichedKOLs, KOL_INSIGHTS } from './strategicContent';

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

/** Default / CIRSE 2025 ingestion (used when congress has no specific data) */
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

/** Per-congress ingestion so counts change when user selects CIRSE 2024 vs CIRSE 2025 */
export const INGESTION_BY_CONGRESS = {
  'cirse-2024': {
    agendas: 10,
    abstracts: 892,
    posters: 278,
    speakers: 254,
    publicationsLinked: 1008,
    sessions: [
      { title: 'TACE and DEB-TACE in HCC', track: 'Interventional Oncology', products: ['LifePearl', 'DC Bead', 'HepaSphere'] },
      { title: 'Embolization in liver metastases', track: 'IO', products: ['LifePearl', 'DC Bead LUMI'] },
      { title: 'LifePearl outcomes in HCC', track: 'IO', products: ['LifePearl'] },
    ],
  },
  'cirse-2025': {
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
  },
};

/** Get ingestion for the selected congress id (or default MOCK_INGESTION) */
export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

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

// Get real KOLs from strategic content (20 KOLs)
const ENRICHED_KOLS = getEnrichedKOLs();

export const MOCK_TOP_KOLS = ENRICHED_KOLS.map((k) => ({
  rank: k.rank,
  name: k.name,
  institution: k.institution,
  score: k.score,
  asset: k.productAssociations?.includes('LifePearl') ? 'LifePearl' : 'Multiple',
  congressTalks: k.congressActivity?.presentations || 0,
  publications: k.publications?.total || 0,
  // Additional enriched data
  country: k.country,
  city: k.city,
  focusAreas: k.focusAreas,
  engagementPriority: k.engagementPriority,
  productAssociations: k.productAssociations,
}));

/** KOL graph: nodes from enriched 20 KOLs, links by focus area, region, and product alignment */
export const KOL_GRAPH_DATA = (() => {
  const nodes = MOCK_TOP_KOLS.map((k) => ({
    id: String(k.rank),
    ...k,
  }));

  const links = [];
  const kolMapping = KOL_INSIGHTS.kolMapping;

  // Helper to add link with type
  const addLink = (sourceRank, targetRank, type) => {
    const existingLink = links.find(
      (l) => (l.source === String(sourceRank) && l.target === String(targetRank)) ||
             (l.source === String(targetRank) && l.target === String(sourceRank))
    );
    if (!existingLink && sourceRank !== targetRank) {
      links.push({ source: String(sourceRank), target: String(targetRank), type });
    }
  };

  // Create links based on shared focus areas (2+ overlapping areas)
  for (let i = 0; i < ENRICHED_KOLS.length; i++) {
    for (let j = i + 1; j < ENRICHED_KOLS.length; j++) {
      const kolA = ENRICHED_KOLS[i];
      const kolB = ENRICHED_KOLS[j];
      const sharedFocus = kolA.focusAreas?.filter((f) => kolB.focusAreas?.includes(f)) || [];
      if (sharedFocus.length >= 2) {
        addLink(kolA.rank, kolB.rank, 'focus');
      }
    }
  }

  // Create links based on same country (regional)
  for (let i = 0; i < ENRICHED_KOLS.length; i++) {
    for (let j = i + 1; j < ENRICHED_KOLS.length; j++) {
      const kolA = ENRICHED_KOLS[i];
      const kolB = ENRICHED_KOLS[j];
      if (kolA.country === kolB.country) {
        addLink(kolA.rank, kolB.rank, 'region');
      }
    }
  }

  // Create links based on LifePearl alignment
  const lifePearlAligned = kolMapping.byProduct.lifePearlAligned;
  const lifePearlKols = ENRICHED_KOLS.filter((k) =>
    lifePearlAligned.some((name) => k.name.includes(name.split(' ').pop()))
  );
  for (let i = 0; i < lifePearlKols.length; i++) {
    for (let j = i + 1; j < lifePearlKols.length; j++) {
      addLink(lifePearlKols[i].rank, lifePearlKols[j].rank, 'product');
    }
  }

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
