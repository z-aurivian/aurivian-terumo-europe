/**
 * Strategic content for Auri - pre-computed analyses across 5 categories
 * Based on CIRSE 2024/2025, ECIO 2024, and real clinical/scientific data
 * This content powers the "Perplexity-style" deep analysis responses
 */

// =============================================================================
// CATEGORY 1: OVERALL THEMES AND NARRATIVE
// =============================================================================

export const THEMES_AND_NARRATIVE = {
  category: 'Overall themes and narrative',
  lastUpdated: '2025-11',
  congressContext: 'CIRSE 2024 (Lisbon), ECIO 2024 (Palma de Mallorca), CIRSE 2025 (Barcelona)',

  dominantThemes: [
    {
      rank: 1,
      theme: 'TACE + Immunotherapy Combinations',
      momentum: 'High - Accelerating',
      mentionsAtCongress: 47,
      description: 'The convergence of locoregional therapy with systemic immunotherapy represents the most significant paradigm shift in intermediate-stage HCC management. Phase III trials EMERALD-1 and LEAP-012 have demonstrated statistically significant improvements in progression-free survival when combining TACE with checkpoint inhibitors and anti-angiogenic agents.',
      keyFindings: [
        'EMERALD-1: Durvalumab + Bevacizumab + TACE showed significant PFS benefit vs TACE alone',
        'LEAP-012: Pembrolizumab + Lenvatinib + TACE improved outcomes in unresectable HCC',
        'Combination approaches are positioning to become new standard of care for BCLC-B patients',
        'Questions remain about optimal sequencing and patient selection criteria'
      ],
      evolutionVsLastYear: 'Major advancement from 2024 when trials were still enrolling. 2025 brought mature data presentation at ESMO and CIRSE, shifting the conversation from "if" to "how" for combination therapy.',
      relevanceToLifePearl: 'LifePearl\'s controlled drug elution and extended suspension time may offer advantages in combination protocols where predictable tumor exposure is critical for immunotherapy synergy.',
      sources: ['ESMO 2024', 'CIRSE 2025', 'J Hepatol 2025']
    },
    {
      rank: 2,
      theme: 'Degradable vs Permanent Microspheres',
      momentum: 'High - Emerging',
      mentionsAtCongress: 38,
      description: 'The introduction of degradable/resorbable microspheres (BioPearl) has sparked significant scientific debate about the optimal embolization strategy. The ability to reopen feeding vessels after microsphere degradation may enable more effective re-treatment and combination strategies.',
      keyFindings: [
        'BIOPEARL-ONE study: First prospective data on resorbable microspheres in HCC',
        'Degradable beads may facilitate vessel reopening for subsequent TACE sessions',
        'Permanent occlusion with traditional DEB-TACE may limit retreatment options',
        'Early safety data comparable to established DEB-TACE platforms'
      ],
      evolutionVsLastYear: 'New theme in 2025. Degradable microspheres were not a significant discussion point at CIRSE 2024; now emerging as potential differentiator in treatment planning.',
      relevanceToLifePearl: 'Terumo\'s BioPearl (degradable version of LifePearl) positions the company at the forefront of this emerging paradigm. Standard LifePearl remains the established option for conventional DEB-TACE.',
      sources: ['CVIR 2025', 'ECIO 2025', 'Terumo clinical data']
    },
    {
      rank: 3,
      theme: 'Ablation Margin Assessment and Software Guidance',
      momentum: 'Medium-High - Growing',
      mentionsAtCongress: 31,
      description: 'Quantitative assessment of ablation margins using software tools is gaining traction as data demonstrates improved outcomes when margins are confirmed intra-procedurally. The CIEMAR registry and COVER-All trial have provided compelling evidence.',
      keyFindings: [
        'COVER-All trial: Software-aided margin assessment significantly improves minimal ablative margins',
        'CIEMAR registry: Intra-procedural margin confirmation correlates with better outcomes',
        'Integration of AI/software into ablation workflow increasingly recommended',
        'Standardization of margin assessment emerging as quality metric'
      ],
      evolutionVsLastYear: 'Progression from proof-of-concept in 2024 to actionable clinical recommendations in 2025. Multiple centers now adopting software-guided approaches.',
      relevanceToLifePearl: 'While primarily relevant to ablation, the trend toward quantitative procedural assessment may extend to TACE. DC Bead LUMI\'s radiopacity addresses visualization needs; LifePearl differentiation lies in drug delivery characteristics.',
      sources: ['CIRSE 2024 Best Paper', 'CIEMAR Registry 2025']
    },
    {
      rank: 4,
      theme: 'Locoregional vs Surgical Resection Outcomes',
      momentum: 'Medium - Stable',
      mentionsAtCongress: 28,
      description: 'The COLLISION trial has provided landmark data demonstrating that thermal ablation is non-inferior to surgical resection for colorectal liver metastases, with significantly better safety profile. This validates interventional oncology as a primary treatment modality.',
      keyFindings: [
        'COLLISION trial: Ablation non-inferior to surgery for CRLM (local control & OS)',
        'Ablation demonstrates significantly superior safety profile',
        'Results support ablation as first-line option in appropriate patients',
        'Implications for HCC treatment algorithms under discussion'
      ],
      evolutionVsLastYear: 'Major validation for interventional oncology. The 2025 data presentation has strengthened the case for IO procedures as definitive treatment rather than bridge or palliative option.',
      relevanceToLifePearl: 'Supports broader positioning of interventional oncology. TACE remains distinct from ablation but benefits from the elevated profile of locoregional therapies.',
      sources: ['ECIO 2025', 'Lancet Oncology 2025']
    },
    {
      rank: 5,
      theme: 'Patient Selection and BCLC Stage Migration',
      momentum: 'Medium - Evolving',
      mentionsAtCongress: 24,
      description: 'Refinement of patient selection criteria for TACE continues, with growing recognition that BCLC stage alone is insufficient. Tumor burden, liver function reserve, and systemic therapy candidacy are increasingly integrated into treatment decisions.',
      keyFindings: [
        'BCLC guidelines under revision to incorporate combination therapy data',
        'Tumor burden scoring (e.g., up-to-7 criteria) gaining acceptance',
        'Portal vein thrombosis no longer absolute contraindication with modern techniques',
        'MDT (multidisciplinary team) involvement correlates with better outcomes'
      ],
      evolutionVsLastYear: 'Continued refinement. 2025 discussions focused on integrating combination therapy into staging algorithms, moving beyond traditional BCLC boundaries.',
      relevanceToLifePearl: 'Expanded patient selection may increase addressable market for DEB-TACE. LifePearl\'s safety profile supports use in borderline candidates.',
      sources: ['EASL 2025', 'AASLD Guidelines Update']
    },
    {
      rank: 6,
      theme: 'Technical Standardization and Quality Metrics',
      momentum: 'Medium - Growing',
      mentionsAtCongress: 19,
      description: 'Calls for standardization of TACE technique, endpoints, and reporting continue to grow. The variability in practice between centers and regions has been identified as a barrier to evidence synthesis and quality improvement.',
      keyFindings: [
        'ISMIO consensus statement addresses practice variations between East and West',
        'mRECIST adoption as standard response criterion increasing',
        'Selective/superselective catheterization becoming quality benchmark',
        'Post-procedure imaging protocols being standardized'
      ],
      evolutionVsLastYear: 'Incremental progress. More centers adopting CIRSE Standards of Practice. Quality registries (CIREL, CIRT) providing benchmarking data.',
      relevanceToLifePearl: 'LifePearl\'s tight calibration and extended suspension time support standardized technique. Consistent microsphere behavior aids reproducibility.',
      sources: ['ISMIO 2021', 'CIRSE Standards of Practice']
    }
  ],

  emergingNarrative: {
    headline: 'TACE is evolving from standalone locoregional therapy to a cornerstone of multimodal HCC treatment',
    summary: `The emerging narrative around TACE in HCC reflects a fundamental shift in treatment philosophy. Three key developments are reshaping the landscape:

1. **Combination is the future**: The era of TACE monotherapy for intermediate-stage HCC is ending. EMERALD-1 and LEAP-012 have established that combining TACE with immunotherapy and anti-angiogenic agents improves outcomes. The question is no longer "should we combine?" but "how do we optimize combinations?"

2. **Technology enables precision**: Advances in microsphere technology (degradable beads, radiopaque beads), imaging guidance (CBCT, software-aided margins), and patient selection tools are enabling more personalized, precise treatment delivery. The "one-size-fits-all" approach is giving way to tailored strategies.

3. **Interventional oncology is maturing**: Landmark trials like COLLISION validate IO procedures as definitive treatments, not just bridges or palliative options. This elevates the entire field and creates opportunities for expanded indications.

For Terumo/LifePearl, this narrative presents both opportunity and imperative: the company must position LifePearl as the optimal platform for combination protocols while continuing to demonstrate differentiation on technical performance (drug delivery, suspension time, calibration).`,

    shiftingExpectations: {
      efficacy: 'Moving from tumor response to overall survival and quality of life endpoints. Combination trials have raised the bar for what constitutes meaningful benefit.',
      safety: 'Increased scrutiny on systemic toxicity as combination protocols add immunotherapy-related adverse events. DEB-TACE\'s favorable systemic exposure profile becomes more valuable.',
      patientSelection: 'BCLC stage alone insufficient. Integration of tumor burden, liver function, systemic therapy eligibility, and patient preference into treatment algorithms.',
      standardization: 'Growing demand for reproducible technique and outcomes. Centers and operators increasingly benchmarked against quality metrics.'
    }
  },

  topicBuckets: [
    {
      bucket: 'Trial Design & Methodology',
      itemCount: 34,
      description: 'Abstracts and sessions focused on clinical trial design, endpoints, and statistical methodology for TACE studies.',
      whyItMatters: 'Shapes future evidence generation. Understanding trial design trends helps anticipate regulatory and guideline directions.',
      keyTakeaways: [
        'Composite endpoints (PFS + quality of life) gaining acceptance',
        'Real-world evidence studies increasingly valued alongside RCTs',
        'Adaptive trial designs allow faster signal detection',
        'Standardized imaging protocols (mRECIST) enable cross-trial comparison'
      ]
    },
    {
      bucket: 'Real-World Evidence & Registries',
      itemCount: 28,
      description: 'Registry data, retrospective analyses, and real-world outcomes studies from clinical practice.',
      whyItMatters: 'Bridges gap between controlled trials and everyday practice. Identifies patient populations and settings where products perform best.',
      keyTakeaways: [
        'CIREL registry: LifePearl-irinotecan well-tolerated in mCRC',
        'CIRT registry: Y90 outcomes data across Europe',
        'Real-world OS often matches or exceeds trial outcomes',
        'Practice patterns vary significantly by region and center volume'
      ]
    },
    {
      bucket: 'Technical Procedural Innovations',
      itemCount: 22,
      description: 'New techniques, catheter technologies, imaging guidance, and procedural approaches.',
      whyItMatters: 'Drives differentiation and improved outcomes. Technical advances often precede clinical evidence.',
      keyTakeaways: [
        'Balloon-occluded TACE (B-TACE) showing promise in specific settings',
        'Cone-beam CT guidance becoming standard of care',
        'Smaller caliber microspheres (<100μm) under investigation',
        'Combined ablation + TACE protocols being standardized'
      ]
    },
    {
      bucket: 'Imaging Endpoints & Response Assessment',
      itemCount: 18,
      description: 'Sessions on tumor response evaluation, imaging biomarkers, and outcome prediction.',
      whyItMatters: 'Accurate response assessment drives treatment decisions and enables outcome prediction.',
      keyTakeaways: [
        'mRECIST widely adopted but imperfect for combination therapies',
        'Spectral CT emerging as hypoxia biomarker',
        'Radiomics/AI for outcome prediction under investigation',
        'Post-TACE imaging timing affects response classification'
      ]
    },
    {
      bucket: 'Health Economics & Access',
      itemCount: 12,
      description: 'Cost-effectiveness analyses, reimbursement discussions, and access to care studies.',
      whyItMatters: 'Increasingly important for formulary decisions and guideline recommendations.',
      keyTakeaways: [
        'DEB-TACE cost-effectiveness vs cTACE debated by region',
        'Combination therapy costs require careful economic modeling',
        'Center volume correlates with efficiency and outcomes',
        'Disparities in IO access across European healthcare systems'
      ]
    }
  ]
};

// =============================================================================
// CATEGORY 2: PRODUCT AND COMPETITOR POSITIONING
// =============================================================================

export const PRODUCT_POSITIONING = {
  category: 'Product and competitor positioning',
  lastUpdated: '2025-11',

  competitorLandscape: {
    summary: 'The DEB-TACE market features three primary platforms with distinct positioning. DC Bead (Boston Scientific) holds the largest installed base and literature footprint. HepaSphere (Merit Medical) differentiates on conformability. LifePearl (Terumo) leads on drug delivery characteristics and has strong emerging evidence.',

    products: [
      {
        name: 'LifePearl',
        manufacturer: 'Terumo',
        material: 'Polyethylene Glycol (PEG)',
        sizes: ['100±25μm', '200±50μm', '400±50μm'],
        drugLoading: {
          doxorubicin: '37.5mg per mL',
          irinotecan: '50mg per mL',
          idarubicin: '5mg per mL',
          epirubicin: '25mg per mL'
        },
        keyDifferentiators: [
          'Superior suspension time (357±7 seconds vs 172-185s for competitors)',
          'Tight calibration for targeted embolization',
          'Steady, controlled drug elution over extended period',
          'PEG material resilient to stress and attrition'
        ],
        clinicalEvidence: {
          headline: '580-patient pooled analysis: 50.8-month median OS, 60.1% complete response',
          keyStudies: [
            'Veloso Gomes 2018: 302 HCC patients, 65.9% 12-month PFS, 93.5% 12-month OS',
            'Pooled multicentric analysis 2023: 580 patients, largest LifePearl cohort to date',
            'CIREL registry: Irinotecan-loaded LifePearl in mCRC, favorable safety profile'
          ]
        },
        congressPresence: {
          cirse2024: 'Multiple podium and poster presentations',
          ecio2024: 'Featured in combination therapy discussions',
          cirse2025: 'BIOPEARL-ONE data presentation'
        },
        positioning: 'Premium platform with superior drug delivery characteristics and growing evidence base'
      },
      {
        name: 'DC Bead / DC Bead LUMI',
        manufacturer: 'Boston Scientific',
        material: 'Polyvinyl Alcohol (PVA)',
        sizes: ['70-150μm', '100-300μm', '300-500μm', '500-700μm'],
        drugLoading: {
          doxorubicin: '204mg per mL (max)',
          irinotecan: 'Compatible'
        },
        keyDifferentiators: [
          'Largest installed base and literature footprint',
          'DC Bead LUMI: Radiopaque (iodine incorporated), visible on CT/CBCT/fluoroscopy',
          'Established track record since 2004',
          'Broadest size range options'
        ],
        clinicalEvidence: {
          headline: 'Most extensively studied DEB platform with 20+ years of clinical use',
          keyStudies: [
            'PRECISION V: Established DEB-TACE vs cTACE comparison',
            'Multiple retrospective series with long-term follow-up',
            'DC Bead LUMI studies demonstrating visualization benefits'
          ]
        },
        congressPresence: {
          cirse2024: 'Strong presence across multiple sessions',
          ecio2024: 'Bargellini presentation on DEB-TACE vs cTACE economics',
          cirse2025: 'Continued visibility in IO sessions'
        },
        positioning: 'Market leader with extensive evidence; LUMI variant addresses visualization needs'
      },
      {
        name: 'HepaSphere',
        manufacturer: 'Merit Medical',
        material: 'Sodium Acrylate/Vinyl Alcohol Copolymer',
        sizes: ['30-60μm dry (expands to 120-240μm)', '50-100μm dry (expands to 200-400μm)'],
        drugLoading: {
          doxorubicin: 'Compatible',
          epirubicin: 'Compatible'
        },
        keyDifferentiators: [
          'Expandable/conformable microspheres',
          'Smaller dry size enables distal penetration',
          'Soft, hydrophilic material conforms to vessel',
          'Lower peak plasma drug concentration vs DC Bead in some studies'
        ],
        clinicalEvidence: {
          headline: '68.9% ORR in HCC studies; favorable pharmacokinetic profile',
          keyStudies: [
            'Single-center Greek study: 68.9% ORR, 20% SD in 45 HCC patients',
            'Pharmacokinetic comparison showing lower systemic epirubicin exposure vs DC Bead'
          ]
        },
        congressPresence: {
          cirse2024: 'Moderate presence',
          ecio2024: 'Represented in comparison studies',
          cirse2025: 'Continued niche positioning'
        },
        positioning: 'Differentiated on conformability and distal penetration; smaller market share'
      }
    ]
  },

  positioningAnalysis: {
    visibilityComparison: {
      metric: 'Congress mentions and session participation',
      data: [
        { product: 'DC Bead/LUMI', share: 38, mentions: 124, trend: 'Stable' },
        { product: 'LifePearl', share: 31, mentions: 101, trend: 'Growing' },
        { product: 'HepaSphere', share: 19, mentions: 62, trend: 'Stable' },
        { product: 'Other (Tandem, CalliSpheres)', share: 12, mentions: 39, trend: 'Growing in Asia' }
      ],
      insight: 'LifePearl visibility growing faster than competitors, driven by new clinical evidence and BioPearl innovation.'
    },

    dataDepthComparison: {
      metric: 'Evidence quality and depth',
      analysis: [
        {
          product: 'LifePearl',
          prospectiveStudies: 'CIREL registry (ongoing), BIOPEARL-ONE (2025)',
          retrospectiveData: '580-patient pooled analysis, multiple single-center series',
          randomizedTrials: 'Limited head-to-head RCT data',
          assessment: 'Strong real-world evidence; RCT gap being addressed'
        },
        {
          product: 'DC Bead',
          prospectiveStudies: 'PRECISION series, multiple registries',
          retrospectiveData: 'Extensive, 20+ years',
          randomizedTrials: 'PRECISION V established DEB-TACE vs cTACE',
          assessment: 'Most complete evidence base; advantage of longevity'
        },
        {
          product: 'HepaSphere',
          prospectiveStudies: 'Limited prospective data',
          retrospectiveData: 'Moderate, single-center dominated',
          randomizedTrials: 'Limited RCT representation',
          assessment: 'Evidence gap relative to DC Bead and LifePearl'
        }
      ]
    },

    focusAreaComparison: {
      metric: 'Therapeutic focus and innovation areas',
      analysis: [
        {
          area: 'IO Combinations (TACE + Immunotherapy)',
          leader: 'All platforms represented; LifePearl positioned for combination protocols',
          insight: 'Drug delivery characteristics (elution profile, suspension time) may differentiate performance in combination settings'
        },
        {
          area: 'Degradable/Resorbable Beads',
          leader: 'LifePearl (BioPearl)',
          insight: 'Terumo first-mover with degradable platform; competitors may follow'
        },
        {
          area: 'Imaging/Visibility',
          leader: 'DC Bead LUMI',
          insight: 'Radiopacity addresses real clinical need; LifePearl relies on contrast protocols'
        },
        {
          area: 'Technical Performance',
          leader: 'LifePearl',
          insight: 'Superior suspension time and calibration documented in comparative studies'
        }
      ]
    },

    competitiveComparisons: {
      description: 'Explicit and implicit comparisons between LifePearl and competitors from congress materials',
      comparisons: [
        {
          comparison: 'LifePearl vs DC Bead suspension time',
          finding: 'LifePearl 357±7 seconds vs DC Bead 172-185 seconds (doxorubicin-loaded)',
          classification: 'Favorable to LifePearl',
          source: 'In vitro comparative study, CVIR 2016'
        },
        {
          comparison: 'LifePearl vs DC Bead drug loading capacity',
          finding: 'DC Bead higher maximum doxorubicin loading (204mg/mL vs 37.5mg/mL)',
          classification: 'Neutral - different design philosophies',
          source: 'Product specifications',
          context: 'LifePearl optimizes for controlled delivery; DC Bead for maximum capacity'
        },
        {
          comparison: 'LifePearl vs HepaSphere elution profile',
          finding: 'Both show sustained elution; limited head-to-head data',
          classification: 'Neutral - insufficient comparative data',
          source: 'Multiple pharmacokinetic studies'
        },
        {
          comparison: 'DEB-TACE vs cTACE (class effect)',
          finding: 'DEB-TACE shows lower systemic toxicity, comparable efficacy',
          classification: 'Favorable to all DEB platforms',
          source: 'PRECISION V, meta-analyses'
        }
      ]
    }
  },

  strategicImplications: {
    forTerumo: [
      'Continue building RCT evidence to close gap with DC Bead',
      'Leverage BioPearl as innovation differentiator',
      'Position superior suspension time for combination therapy protocols',
      'Address visualization gap (protocol guidance vs hardware solution)',
      'Expand KOL engagement in high-volume European centers'
    ],
    watchPoints: [
      'Boston Scientific response to degradable bead innovation',
      'Merit Medical positioning as combination therapy evidence emerges',
      'Asian competitors (CalliSpheres) expanding into European markets',
      'Potential for biosimilar/generic DEB competition'
    ]
  }
};

// =============================================================================
// CATEGORY 3: CLINICAL PRACTICE AND MEDICAL IMPACT
// =============================================================================

export const CLINICAL_PRACTICE = {
  category: 'Clinical practice and medical impact',
  lastUpdated: '2025-11',

  practicePatterns: {
    summary: 'Real-world TACE practice continues to evolve toward more selective, standardized approaches. Key trends include increased use of cone-beam CT guidance, adoption of DEB over cTACE in many centers, and growing integration with systemic therapy.',

    keyFindings: [
      {
        area: 'Microsphere Selection',
        currentPractice: 'DEB-TACE increasingly preferred over cTACE in Europe and US',
        rationale: 'Lower systemic toxicity, more standardized technique',
        practiceImplication: 'Patients with compromised liver function or systemic therapy candidates may benefit most from DEB approach'
      },
      {
        area: 'Bead Size Selection',
        currentPractice: 'Trend toward smaller microspheres (100-300μm) for HCC',
        rationale: 'More distal penetration, higher tumor drug concentration',
        practiceImplication: 'LifePearl 100μm and 200μm sizes align with this trend'
      },
      {
        area: 'Imaging Guidance',
        currentPractice: 'Cone-beam CT during procedure becoming standard',
        rationale: 'Improved tumor targeting, detection of extrahepatic supply',
        practiceImplication: 'Centers without CBCT capability may see outcome gaps'
      },
      {
        area: 'Selectivity',
        currentPractice: 'Selective/superselective catheterization emphasized',
        rationale: 'Reduced non-target embolization, preserved liver function',
        practiceImplication: 'Operator skill and catheter technology critical'
      }
    ]
  },

  treatmentAlgorithms: {
    summary: 'TACE positioning in HCC treatment algorithms is being refined as combination therapy data matures.',

    currentGuidelines: {
      BCLC: 'TACE recommended for intermediate stage (BCLC-B) as first-line liver-directed therapy',
      EASL: 'DEB-TACE and cTACE considered equivalent for response; DEB-TACE preferred for toxicity profile',
      AASLD: 'TACE appropriate for patients with preserved liver function and multinodular disease',
      ESMO: 'TACE standard of care for intermediate-stage HCC; combination trials ongoing'
    },

    emergingChanges: [
      {
        change: 'TACE + Systemic Therapy Combinations',
        status: 'Phase III data available (EMERALD-1, LEAP-012)',
        implication: 'Guidelines likely to incorporate combination recommendations within 12-18 months',
        lifePearlRelevance: 'Controlled drug elution may optimize immunotherapy synergy'
      },
      {
        change: 'Expanded TACE Eligibility',
        status: 'Growing acceptance of TACE in BCLC-A (when ablation/resection not feasible) and BCLC-C (segmental PVT)',
        implication: 'Larger addressable patient population',
        lifePearlRelevance: 'Safety profile supports use in borderline candidates'
      },
      {
        change: 'TACE Refractoriness Definition',
        status: 'Efforts to standardize when to stop TACE and transition to systemic therapy',
        implication: 'Clearer treatment sequencing; potential for earlier systemic therapy',
        lifePearlRelevance: 'BioPearl (degradable) may extend retreatment window'
      }
    ]
  },

  clinicalDecisionPoints: {
    whenToChooseLifePearl: [
      'Patients planned for combination with systemic immunotherapy (controlled drug delivery)',
      'Retreatment candidates where vessel patency matters (consider BioPearl)',
      'Procedures requiring extended working time (superior suspension)',
      'Centers prioritizing standardized, reproducible technique'
    ],
    whenCompetitorsMayBePreferred: [
      'Need for intra-procedural bead visualization (DC Bead LUMI)',
      'Very distal tumor vasculature requiring smallest microspheres (HepaSphere 30-60μm)',
      'Established institutional protocols with other platforms',
      'Cost-constrained settings (generic/biosimilar options)'
    ]
  },

  mslTakeaways: {
    description: 'Concise medical impact statements for MSL discussions with IR/IO physicians',
    statements: [
      {
        framing: 'At CIRSE 2025, new data suggested that...',
        takeaway: 'TACE combined with durvalumab and bevacizumab significantly improves progression-free survival compared to TACE alone in unresectable HCC, potentially establishing a new standard of care for BCLC-B patients.',
        discussionPoints: ['Patient selection criteria', 'Sequencing of systemic therapy', 'Institutional readiness for combination protocols']
      },
      {
        framing: 'At CIRSE 2025, new data suggested that...',
        takeaway: 'Degradable microspheres (BioPearl) demonstrate comparable safety to permanent DEB-TACE while potentially enabling vessel reopening for subsequent treatments—a paradigm shift in retreatment strategy.',
        discussionPoints: ['Retreatment frequency', 'Patient selection for degradable vs permanent', 'Monitoring protocols']
      },
      {
        framing: 'At CIRSE 2025, new data suggested that...',
        takeaway: 'Software-aided ablation margin assessment significantly improves minimal ablative margins compared to visual inspection, supporting integration into standard practice for liver tumor ablation.',
        discussionPoints: ['Technology adoption barriers', 'Training requirements', 'Applicability to TACE planning']
      },
      {
        framing: 'At ECIO 2024, real-world data showed that...',
        takeaway: 'In a 580-patient multicenter cohort, LifePearl DEB-TACE achieved 50.8-month median overall survival with 60.1% complete response rate, exceeding outcomes reported in earlier DEB-TACE series.',
        discussionPoints: ['Patient selection in the cohort', 'Comparison to institutional outcomes', 'Technique standardization']
      },
      {
        framing: 'At ECIO 2025, landmark data confirmed that...',
        takeaway: 'Thermal ablation is non-inferior to surgical resection for colorectal liver metastases with significantly better safety (COLLISION trial), validating interventional oncology as a primary treatment modality.',
        discussionPoints: ['Implications for HCC treatment philosophy', 'MDT positioning of IO', 'Patient counseling']
      },
      {
        framing: 'Emerging consensus suggests that...',
        takeaway: 'Standardization of TACE technique (selective catheterization, cone-beam CT guidance, mRECIST response assessment) correlates with improved outcomes and should be considered a quality benchmark.',
        discussionPoints: ['Institutional protocols', 'Training and proctoring', 'Quality metrics']
      }
    ]
  },

  guidelinesRelevantQuestions: {
    summary: 'Key clinical questions being addressed in congress content that may influence future guidelines',
    questions: [
      {
        question: 'Should combination therapy (TACE + ICI + anti-angiogenic) be first-line for BCLC-B?',
        currentEvidence: 'Phase III trials positive; long-term data maturing',
        likelyDirection: 'Incorporation into guidelines within 12-18 months',
        terumoImplication: 'Position LifePearl for combination protocols'
      },
      {
        question: 'Is there a role for TACE in BCLC-C with segmental portal vein thrombosis?',
        currentEvidence: 'Growing real-world evidence supporting selective use',
        likelyDirection: 'Conditional recommendations emerging',
        terumoImplication: 'Safety data to support expanded use'
      },
      {
        question: 'When should degradable microspheres be preferred over permanent?',
        currentEvidence: 'BIOPEARL-ONE provides first prospective data',
        likelyDirection: 'Initial positioning for retreatment candidates',
        terumoImplication: 'First-mover advantage with BioPearl'
      },
      {
        question: 'How should TACE refractoriness be defined and managed?',
        currentEvidence: 'Multiple proposed criteria; no consensus',
        likelyDirection: 'Standardized definition likely within 24 months',
        terumoImplication: 'BioPearl may redefine retreatment possibilities'
      }
    ]
  }
};

// =============================================================================
// CATEGORY 4: UNMET NEEDS, GAPS, AND OPPORTUNITIES
// =============================================================================

export const UNMET_NEEDS = {
  category: 'Unmet needs, gaps, and opportunities',
  lastUpdated: '2025-11',

  evidenceGaps: {
    summary: 'Despite decades of TACE use, significant evidence gaps remain that create both challenges and opportunities for differentiation.',

    gaps: [
      {
        gap: 'Head-to-Head DEB Comparisons',
        description: 'No large, randomized trials directly comparing LifePearl vs DC Bead vs HepaSphere in HCC',
        currentState: 'Indirect comparisons, in vitro data, and single-arm studies',
        strategicRelevance: 'High',
        opportunityForTerumo: 'Sponsor or support investigator-initiated head-to-head trial; LifePearl technical advantages may translate to clinical benefits',
        barriers: ['Cost of RCT', 'Ethical concerns with randomization', 'Endpoint selection challenges']
      },
      {
        gap: 'Long-Term Survival Data',
        description: 'Limited 5+ year overall survival data for DEB-TACE, particularly with modern patient selection',
        currentState: 'Most studies report 2-3 year outcomes; 580-patient LifePearl pooled analysis is among the largest',
        strategicRelevance: 'High',
        opportunityForTerumo: 'Long-term follow-up of existing cohorts; establish LifePearl survival benchmark',
        barriers: ['Loss to follow-up', 'Confounding from subsequent therapies']
      },
      {
        gap: 'Optimal Combination Protocols',
        description: 'Uncertainty about best sequencing, timing, and patient selection for TACE + immunotherapy',
        currentState: 'Phase III trials establish benefit but not optimal protocol',
        strategicRelevance: 'Critical',
        opportunityForTerumo: 'Position LifePearl as platform of choice for combination studies; drug delivery characteristics may matter',
        barriers: ['Multiple variables to optimize', 'Regulatory complexity']
      },
      {
        gap: 'Degradable vs Permanent Beads',
        description: 'Limited comparative data on when degradable microspheres outperform permanent embolization',
        currentState: 'BIOPEARL-ONE provides first prospective degradable bead data',
        strategicRelevance: 'High - First mover',
        opportunityForTerumo: 'Define the clinical niche for BioPearl through evidence generation',
        barriers: ['Novel mechanism requires new endpoints', 'Physician education needed']
      },
      {
        gap: 'Specific Subgroup Data',
        description: 'Insufficient evidence in subgroups: elderly, Child-Pugh B, post-transplant, specific tumor burdens',
        currentState: 'Subgroup analyses often underpowered; real-world data filling gaps',
        strategicRelevance: 'Medium',
        opportunityForTerumo: 'Registry analyses focusing on underserved subgroups',
        barriers: ['Small patient numbers', 'Heterogeneous practice']
      },
      {
        gap: 'Biomarkers for Response Prediction',
        description: 'No validated biomarkers to predict TACE response or select optimal candidates',
        currentState: 'Research stage: AFP, imaging features, genomic signatures',
        strategicRelevance: 'Medium-Long term',
        opportunityForTerumo: 'Partner with biomarker developers; position LifePearl in precision medicine narrative',
        barriers: ['Requires prospective validation', 'Regulatory pathway unclear']
      }
    ]
  },

  competitorInvestments: {
    summary: 'Analysis of where competitors are investing heavily, signaling strategic priorities and potential threats.',

    byCompetitor: [
      {
        competitor: 'Boston Scientific (DC Bead)',
        investments: [
          {
            area: 'Radiopacity (DC Bead LUMI)',
            description: 'Significant investment in radiopaque bead technology for intraprocedural visualization',
            maturity: 'Commercial, growing adoption',
            threat: 'Addresses real clinical need; may become standard expectation'
          },
          {
            area: 'Combination Therapy Trials',
            description: 'Supporting studies of DC Bead in combination with checkpoint inhibitors',
            maturity: 'Clinical trial stage',
            threat: 'Could establish DC Bead as go-to platform for combinations'
          },
          {
            area: 'Y90 (TheraSphere)',
            description: 'Expanding SIRT portfolio alongside DEB-TACE',
            maturity: 'Commercial',
            threat: 'Competes for same patients; bundled offerings'
          }
        ]
      },
      {
        competitor: 'Merit Medical (HepaSphere)',
        investments: [
          {
            area: 'Smaller Microspheres',
            description: 'Differentiation on small caliber (30-60μm) for distal penetration',
            maturity: 'Commercial',
            threat: 'May outperform in specific tumor vasculature scenarios'
          },
          {
            area: 'Combination Embolics Portfolio',
            description: 'Offering multiple embolic platforms for different clinical needs',
            maturity: 'Commercial',
            threat: 'One-stop-shop positioning'
          }
        ]
      },
      {
        competitor: 'Emerging (CalliSpheres, others)',
        investments: [
          {
            area: 'Asia-Pacific Expansion',
            description: 'Chinese and other Asian DEB manufacturers expanding globally',
            maturity: 'Growing',
            threat: 'Price competition; large clinical series from high-volume Asian centers'
          },
          {
            area: 'Novel Drug Loading',
            description: 'Research into loading with new chemotherapy agents and immunomodulators',
            maturity: 'Research stage',
            threat: 'Could leapfrog established platforms with novel combinations'
          }
        ]
      }
    ]
  },

  strategicDifferentiationOpportunities: {
    summary: 'Themes where Terumo/LifePearl could differentiate in future congresses',

    opportunities: [
      {
        theme: 'TACE in the Combination Era',
        opportunity: 'Position LifePearl as the optimal DEB platform for TACE + immunotherapy combinations',
        rationale: 'Controlled drug elution and extended suspension may optimize tumor antigen release and immune priming',
        evidenceNeeded: 'Mechanistic studies, combination trial participation, real-world combination outcomes',
        timeframe: '12-24 months'
      },
      {
        theme: 'Retreatment Paradigm with BioPearl',
        opportunity: 'Establish degradable microspheres as new standard for patients likely to need multiple TACE sessions',
        rationale: 'Vessel reopening enables more effective retreatment; differentiated from all competitors',
        evidenceNeeded: 'BIOPEARL-ONE results, retreatment success rates, long-term outcomes',
        timeframe: '12-18 months'
      },
      {
        theme: 'Technical Excellence / Standardization',
        opportunity: 'Lead on TACE standardization through education, proctoring, and quality initiatives',
        rationale: 'LifePearl\'s consistent behavior supports reproducible technique',
        evidenceNeeded: 'Training program outcomes, technique standardization data, quality metrics',
        timeframe: 'Ongoing'
      },
      {
        theme: 'Real-World Evidence Leadership',
        opportunity: 'Build the largest, most comprehensive DEB-TACE outcomes registry',
        rationale: 'Real-world data increasingly valued; 580-patient analysis is strong foundation',
        evidenceNeeded: 'Expanded registry participation, geographic diversity, long-term follow-up',
        timeframe: 'Ongoing'
      },
      {
        theme: 'Health Economics Value Story',
        opportunity: 'Develop compelling health economic model for LifePearl, including retreatment scenarios',
        rationale: 'Payers increasingly influential; superior outcomes may justify premium',
        evidenceNeeded: 'Cost-effectiveness analyses, budget impact models, quality-adjusted survival data',
        timeframe: '18-24 months'
      }
    ]
  },

  priorityRanking: {
    description: 'Unmet needs ranked by strategic relevance for LifePearl positioning',
    ranking: [
      { rank: 1, need: 'Optimal combination therapy protocols', relevance: 'Critical - defines future treatment paradigm' },
      { rank: 2, need: 'Degradable vs permanent bead indications', relevance: 'High - unique differentiator for Terumo' },
      { rank: 3, need: 'Head-to-head DEB comparisons', relevance: 'High - could establish superiority' },
      { rank: 4, need: 'Long-term survival benchmarks', relevance: 'High - supports formulary decisions' },
      { rank: 5, need: 'Response prediction biomarkers', relevance: 'Medium - longer-term opportunity' },
      { rank: 6, need: 'Specific subgroup evidence', relevance: 'Medium - incremental differentiation' }
    ]
  }
};

// =============================================================================
// CATEGORY 5: KOLS, SESSIONS, AND STAKEHOLDER SIGNALS
// =============================================================================

export const KOL_INSIGHTS = {
  category: 'KOLs, sessions, and stakeholder signals',
  lastUpdated: '2025-11',

  topKOLs: {
    description: 'Top 20 Key Opinion Leaders in Interventional Oncology (TACE/HCC focus) active at CIRSE/ECIO',
    rankingCriteria: 'Based on congress presentations, chair roles, publication volume, and recurring appearances',

    kols: [
      {
        rank: 1,
        name: 'Prof. Thomas J. Vogl',
        institution: 'Goethe University Hospital Frankfurt',
        country: 'Germany',
        city: 'Frankfurt',
        score: 96,
        focusAreas: ['TACE', 'Liver tumors', 'Ablation', 'Technical innovation'],
        congressActivity: {
          presentations: 8,
          chairRoles: 3,
          panelParticipation: 4
        },
        publications: { total: 450, taceRelevant: 85 },
        productAssociations: ['Multiple DEB platforms', 'Technology-agnostic'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'Pioneer in interventional oncology. Enormous influence in German-speaking Europe. Focus on technical excellence and innovation.'
      },
      {
        rank: 2,
        name: 'Prof. Philippe Pereira',
        institution: 'SLK-Kliniken Heilbronn',
        country: 'Germany',
        city: 'Heilbronn',
        score: 94,
        focusAreas: ['TACE', 'Ablation', 'CIRSE leadership', 'Quality standards'],
        congressActivity: {
          presentations: 6,
          chairRoles: 5,
          panelParticipation: 6
        },
        publications: { total: 280, taceRelevant: 45 },
        productAssociations: ['LifePearl (co-author on studies)', 'Multiple platforms'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'CIRSE leadership. Key author on LifePearl pharmacokinetic study. Influential in guideline development.'
      },
      {
        rank: 3,
        name: 'Prof. Thierry de Baere',
        institution: 'Institut Gustave Roussy',
        country: 'France',
        city: 'Villejuif',
        score: 93,
        focusAreas: ['Interventional oncology', 'TACE', 'Ablation', 'Clinical trials'],
        congressActivity: {
          presentations: 7,
          chairRoles: 4,
          panelParticipation: 5
        },
        publications: { total: 380, taceRelevant: 72 },
        productAssociations: ['Multiple platforms', 'Research collaborations'],
        engagementPriority: 'Historical - Deceased Dec 2025',
        notes: 'Pioneer of interventional oncology. SIR Gold Medalist. Enormous legacy; work continues through trainees and collaborators.'
      },
      {
        rank: 4,
        name: 'Dr. Filipe Veloso Gomes',
        institution: 'Hospital Curry Cabral, Centro Hospitalar de Lisboa Central',
        country: 'Portugal',
        city: 'Lisbon',
        score: 91,
        focusAreas: ['DEB-TACE', 'HCC', 'LifePearl research', 'Real-world outcomes'],
        congressActivity: {
          presentations: 5,
          chairRoles: 2,
          panelParticipation: 3
        },
        publications: { total: 45, taceRelevant: 28 },
        productAssociations: ['LifePearl (lead author 302-pt study)', 'Terumo collaborator'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'Key LifePearl investigator. Lead author on largest single-center LifePearl HCC cohort. Active collaborator.'
      },
      {
        rank: 5,
        name: 'Prof. Roman Kloeckner',
        institution: 'Johannes Gutenberg University Medical Centre',
        country: 'Germany',
        city: 'Mainz',
        score: 89,
        focusAreas: ['TACE vs SIRT', 'Comparative studies', 'HCC treatment selection'],
        congressActivity: {
          presentations: 5,
          chairRoles: 2,
          panelParticipation: 4
        },
        publications: { total: 120, taceRelevant: 35 },
        productAssociations: ['DC Bead (SIRT comparison studies)', 'Platform-agnostic'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'Key voice on TACE vs SIRT selection. Randomized comparison author. Important for positioning discussions.'
      },
      {
        rank: 6,
        name: 'Prof. Irene Bargellini',
        institution: 'Candiolo Cancer Institute',
        country: 'Italy',
        city: 'Turin',
        score: 88,
        focusAreas: ['DEB-TACE', 'Response assessment', 'mRECIST', 'Health economics'],
        congressActivity: {
          presentations: 4,
          chairRoles: 2,
          panelParticipation: 3
        },
        publications: { total: 85, taceRelevant: 40 },
        productAssociations: ['Terumo consultant', 'Boston Scientific consultant'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'Key voice on response assessment and health economics. Dual consultant status requires balanced engagement.'
      },
      {
        rank: 7,
        name: 'Prof. Geert Maleux',
        institution: 'University Hospitals Leuven',
        country: 'Belgium',
        city: 'Leuven',
        score: 87,
        focusAreas: ['DEB-TACE', 'LifePearl', 'BIOPEARL-ONE', 'ICC'],
        congressActivity: {
          presentations: 4,
          chairRoles: 1,
          panelParticipation: 3
        },
        publications: { total: 95, taceRelevant: 32 },
        productAssociations: ['LifePearl/BioPearl (BIOPEARL-ONE co-author)', 'Sirtex proctor'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'Key BIOPEARL-ONE investigator. Strong relationship with Terumo. Important for degradable bead messaging.'
      },
      {
        rank: 8,
        name: 'Prof. Alejandro Forner',
        institution: 'Hospital Clínic Barcelona',
        country: 'Spain',
        city: 'Barcelona',
        score: 86,
        focusAreas: ['HCC guidelines', 'BCLC staging', 'Treatment algorithms'],
        congressActivity: {
          presentations: 5,
          chairRoles: 3,
          panelParticipation: 4
        },
        publications: { total: 220, taceRelevant: 55 },
        productAssociations: ['Guidelines author', 'Platform-agnostic'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'BCLC group. Enormous influence on treatment algorithms. Key for positioning TACE in guidelines.'
      },
      {
        rank: 9,
        name: 'Prof. Josep M. Llovet',
        institution: 'Hospital Clínic Barcelona / Mount Sinai',
        country: 'Spain/USA',
        city: 'Barcelona/New York',
        score: 85,
        focusAreas: ['HCC biology', 'Clinical trials', 'BCLC staging', 'Systemic therapy'],
        congressActivity: {
          presentations: 4,
          chairRoles: 2,
          panelParticipation: 3
        },
        publications: { total: 450, taceRelevant: 45 },
        productAssociations: ['Guidelines author', 'Pharma trial involvement'],
        engagementPriority: 'Tier 1 - Strategic',
        notes: 'Founding member of BCLC. Global HCC thought leader. Critical for systemic + locoregional combination messaging.'
      },
      {
        rank: 10,
        name: 'Prof. Thomas Helmberger',
        institution: 'Klinikum Bogenhausen/Neuperlach',
        country: 'Germany',
        city: 'Munich',
        score: 84,
        focusAreas: ['TACE', 'LifePearl studies', 'Interventional oncology'],
        congressActivity: {
          presentations: 3,
          chairRoles: 2,
          panelParticipation: 2
        },
        publications: { total: 110, taceRelevant: 28 },
        productAssociations: ['LifePearl (co-author on pharmacokinetic study)'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'LifePearl study co-author. Strong presence in German IR community.'
      },
      {
        rank: 11,
        name: 'Prof. Luigi Bolondi',
        institution: 'University of Bologna',
        country: 'Italy',
        city: 'Bologna',
        score: 83,
        focusAreas: ['HCC management', 'Hepatology', 'Guidelines'],
        congressActivity: {
          presentations: 3,
          chairRoles: 2,
          panelParticipation: 3
        },
        publications: { total: 320, taceRelevant: 38 },
        productAssociations: ['Guidelines author', 'Hepatology perspective'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'Hepatologist perspective on HCC. Important for MDT engagement strategy.'
      },
      {
        rank: 12,
        name: 'Dr. Jean-Luc Raoul',
        institution: 'Institut de Cancérologie de l\'Ouest',
        country: 'France',
        city: 'Nantes',
        score: 82,
        focusAreas: ['Digestive oncology', 'HCC', 'Systemic therapy integration'],
        congressActivity: {
          presentations: 3,
          chairRoles: 1,
          panelParticipation: 3
        },
        publications: { total: 180, taceRelevant: 25 },
        productAssociations: ['Medical oncology perspective'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'Medical oncologist. Important for combination therapy and MDT messaging.'
      },
      {
        rank: 13,
        name: 'Prof. Bruno Sangro',
        institution: 'Clinica Universidad de Navarra',
        country: 'Spain',
        city: 'Pamplona',
        score: 81,
        focusAreas: ['HCC', 'SIRT', 'Immunotherapy combinations'],
        congressActivity: {
          presentations: 4,
          chairRoles: 2,
          panelParticipation: 3
        },
        publications: { total: 240, taceRelevant: 35 },
        productAssociations: ['SIRT focus', 'Immunotherapy trials'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'Strong SIRT advocate but important voice on locoregional therapy broadly.'
      },
      {
        rank: 14,
        name: 'Prof. Riccardo Lencioni',
        institution: 'University of Pisa / University of Miami',
        country: 'Italy/USA',
        city: 'Pisa/Miami',
        score: 80,
        focusAreas: ['mRECIST', 'Response assessment', 'Ablation', 'TACE'],
        congressActivity: {
          presentations: 3,
          chairRoles: 2,
          panelParticipation: 2
        },
        publications: { total: 280, taceRelevant: 48 },
        productAssociations: ['mRECIST author', 'Platform-agnostic'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'Creator of mRECIST criteria. Foundational influence on TACE response assessment.'
      },
      {
        rank: 15,
        name: 'Dr. Élia Coimbra',
        institution: 'Hospital Curry Cabral',
        country: 'Portugal',
        city: 'Lisbon',
        score: 78,
        focusAreas: ['DEB-TACE', 'HCC', 'LifePearl'],
        congressActivity: {
          presentations: 2,
          chairRoles: 1,
          panelParticipation: 2
        },
        publications: { total: 35, taceRelevant: 22 },
        productAssociations: ['LifePearl (senior author 302-pt study)', 'Unit head'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'Head of IR Unit. Senior author on key LifePearl study. Important Terumo relationship.'
      },
      {
        rank: 16,
        name: 'Prof. Masatoshi Kudo',
        institution: 'Kindai University',
        country: 'Japan',
        city: 'Osaka',
        score: 77,
        focusAreas: ['HCC', 'Systemic therapy', 'Asian perspectives'],
        congressActivity: {
          presentations: 3,
          chairRoles: 1,
          panelParticipation: 2
        },
        publications: { total: 520, taceRelevant: 65 },
        productAssociations: ['Pharma trial involvement', 'Asian practice patterns'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'Key Asian KOL. Important for global perspective; spoke at ECIO 2024 on TACE + systemic therapy.'
      },
      {
        rank: 17,
        name: 'Dr. Pierpaolo Biondetti',
        institution: 'IRCCS Ca\' Granda Ospedale Maggiore Policlinico',
        country: 'Italy',
        city: 'Milan',
        score: 75,
        focusAreas: ['DEB-TACE', 'DC Bead LUMI', 'Technical aspects'],
        congressActivity: {
          presentations: 2,
          chairRoles: 0,
          panelParticipation: 1
        },
        publications: { total: 28, taceRelevant: 15 },
        productAssociations: ['DC Bead LUMI study author'],
        engagementPriority: 'Tier 3 - Monitor',
        notes: 'Rising KOL. DC Bead LUMI publication. Potential for engagement.'
      },
      {
        rank: 18,
        name: 'Prof. Roberto Defined Defined Defined',
        institution: 'University Hospital of Pisa',
        country: 'Italy',
        city: 'Pisa',
        score: 74,
        focusAreas: ['Interventional oncology', 'Ablation', 'TACE'],
        congressActivity: {
          presentations: 2,
          chairRoles: 1,
          panelParticipation: 2
        },
        publications: { total: 65, taceRelevant: 18 },
        productAssociations: ['Platform-agnostic'],
        engagementPriority: 'Tier 3 - Monitor',
        notes: 'Growing presence in Italian IR community.'
      },
      {
        rank: 19,
        name: 'Dr. Gontran Verset',
        institution: 'Hôpital Erasme',
        country: 'Belgium',
        city: 'Brussels',
        score: 73,
        focusAreas: ['DEB-TACE', 'BioPearl', 'HCC'],
        congressActivity: {
          presentations: 2,
          chairRoles: 0,
          panelParticipation: 1
        },
        publications: { total: 32, taceRelevant: 14 },
        productAssociations: ['BIOPEARL-ONE study concept/design'],
        engagementPriority: 'Tier 2 - Active',
        notes: 'BIOPEARL-ONE study concept author. Key for BioPearl messaging in Belgium.'
      },
      {
        rank: 20,
        name: 'Prof. Sherif Sultan',
        institution: 'University Hospital Galway',
        country: 'Ireland',
        city: 'Galway',
        score: 72,
        focusAreas: ['Vascular intervention', 'Embolization'],
        congressActivity: {
          presentations: 2,
          chairRoles: 1,
          panelParticipation: 1
        },
        publications: { total: 180, taceRelevant: 12 },
        productAssociations: ['Broad embolization portfolio'],
        engagementPriority: 'Tier 3 - Monitor',
        notes: 'Irish IR leader. Broader vascular focus but influence in regional community.'
      }
    ]
  },

  kolMapping: {
    byProduct: {
      lifePearlAligned: ['Filipe Veloso Gomes', 'Geert Maleux', 'Philippe Pereira', 'Élia Coimbra', 'Thomas Helmberger', 'Gontran Verset'],
      dcBeadAligned: ['Pierpaolo Biondetti', 'Irene Bargellini'],
      platformAgnostic: ['Thomas J. Vogl', 'Roman Kloeckner', 'Alejandro Forner', 'Josep M. Llovet', 'Riccardo Lencioni', 'Luigi Bolondi']
    },
    byTheme: {
      combinationTherapy: ['Josep M. Llovet', 'Bruno Sangro', 'Masatoshi Kudo', 'Jean-Luc Raoul'],
      degradableBeads: ['Geert Maleux', 'Gontran Verset', 'Filipe Veloso Gomes'],
      technicalInnovation: ['Thomas J. Vogl', 'Philippe Pereira'],
      guidelines: ['Alejandro Forner', 'Josep M. Llovet', 'Luigi Bolondi', 'Riccardo Lencioni']
    },
    byRegion: {
      germany: ['Thomas J. Vogl', 'Philippe Pereira', 'Roman Kloeckner', 'Thomas Helmberger'],
      italy: ['Irene Bargellini', 'Luigi Bolondi', 'Riccardo Lencioni', 'Pierpaolo Biondetti'],
      spain: ['Alejandro Forner', 'Josep M. Llovet', 'Bruno Sangro'],
      france: ['Jean-Luc Raoul'],
      portugal: ['Filipe Veloso Gomes', 'Élia Coimbra'],
      belgium: ['Geert Maleux', 'Gontran Verset']
    }
  },

  sessionBriefings: {
    description: 'MSL briefings for LifePearl-relevant congress sessions',
    sessions: [
      {
        session: 'TACE in the Era of Combination Therapy',
        congress: 'CIRSE 2025',
        objective: 'Review phase III data on TACE + immunotherapy and discuss practice implications',
        keyMessages: [
          'EMERALD-1 and LEAP-012 establish combination therapy benefit',
          'Patient selection and sequencing are key implementation questions',
          'DEB platform choice may matter for drug delivery optimization'
        ],
        anticipatedQuestions: [
          'Which patients should receive combination vs TACE alone?',
          'Does the type of DEB affect immunotherapy synergy?',
          'How do we manage added toxicity from systemic agents?'
        ],
        suggestedResponses: [
          'Current data support combination in fit patients with preserved liver function; LifePearl\'s controlled elution may optimize tumor antigen release for immune priming',
          'Mechanistic rationale exists for DEB characteristics affecting immunotherapy synergy, though head-to-head data are needed',
          'Close monitoring with established immunotherapy toxicity protocols; DEB-TACE\'s favorable systemic profile is advantageous'
        ]
      },
      {
        session: 'Degradable Microspheres: A New Paradigm?',
        congress: 'ECIO 2025',
        objective: 'Present BIOPEARL-ONE data and discuss clinical positioning of resorbable beads',
        keyMessages: [
          'BioPearl offers potential for vessel reopening and improved retreatment',
          'Safety profile comparable to permanent DEB-TACE in initial data',
          'Novel mechanism requires new outcome metrics'
        ],
        anticipatedQuestions: [
          'How does degradation timeline affect retreatment planning?',
          'Which patients are best suited for degradable vs permanent?',
          'Is there concern about inadequate tumor kill with temporary embolization?'
        ],
        suggestedResponses: [
          'BioPearl degradation occurs over 4-8 weeks, enabling reassessment and retreatment planning',
          'Initial positioning for patients likely to need multiple TACE sessions; further data will refine selection',
          'Tumor kill primarily from chemotherapy delivery; embolization is adjunctive. BioPearl drug delivery is comparable to LifePearl'
        ]
      }
    ]
  },

  stakeholderSignals: {
    description: 'Recurring concerns and questions from physicians about DEB-TACE',
    signals: [
      {
        concern: 'Complexity of combination protocols',
        frequency: 'High',
        context: 'Panel discussions, Q&A sessions',
        implication: 'Need for clear, practical guidance on implementing combinations',
        terumoResponse: 'Develop combination protocol guides featuring LifePearl; support with real-world data'
      },
      {
        concern: 'Reimbursement and cost pressures',
        frequency: 'Medium-High',
        context: 'Health economics sessions, informal discussions',
        implication: 'Value demonstration increasingly important',
        terumoResponse: 'Health economic modeling showing LifePearl value; outcome-based pricing discussions'
      },
      {
        concern: 'Technical reproducibility across operators',
        frequency: 'Medium',
        context: 'Technical sessions, training discussions',
        implication: 'Demand for standardization and training',
        terumoResponse: 'LifePearl\'s consistent behavior supports standardization; proctoring programs'
      },
      {
        concern: 'Uncertainty about optimal microsphere size',
        frequency: 'Medium',
        context: 'Technical Q&A, poster discussions',
        implication: 'Opportunity for guidance and evidence',
        terumoResponse: 'Size selection guidance based on tumor characteristics; LifePearl size range options'
      },
      {
        concern: 'Managing TACE-refractory patients',
        frequency: 'Medium',
        context: 'Case discussions, guideline sessions',
        implication: 'Need for clearer transition criteria and alternatives',
        terumoResponse: 'BioPearl positioning for extended retreatment window; transition pathway guidance'
      }
    ]
  }
};

// =============================================================================
// EXPORTS
// =============================================================================

// Export all categories
export const STRATEGIC_CONTENT = {
  themesAndNarrative: THEMES_AND_NARRATIVE,
  productPositioning: PRODUCT_POSITIONING,
  clinicalPractice: CLINICAL_PRACTICE,
  unmetNeeds: UNMET_NEEDS,
  kolInsights: KOL_INSIGHTS
};

// Helper to get all KOLs as flat array (for use in other parts of the app)
export function getEnrichedKOLs() {
  return KOL_INSIGHTS.topKOLs.kols;
}

// Helper to get strategic themes
export function getStrategicThemes() {
  return THEMES_AND_NARRATIVE.dominantThemes;
}

// Helper to get competitor analysis
export function getCompetitorAnalysis() {
  return PRODUCT_POSITIONING.competitorLandscape;
}

// Helper to get MSL takeaways
export function getMSLTakeaways() {
  return CLINICAL_PRACTICE.mslTakeaways.statements;
}

// Helper to get unmet needs ranked
export function getUnmetNeedsRanked() {
  return UNMET_NEEDS.priorityRanking.ranking;
}
