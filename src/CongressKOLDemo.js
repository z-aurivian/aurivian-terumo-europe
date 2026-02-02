import React, { useState } from 'react';
import {
  Users,
  BarChart3,
  FileText,
  Database,
  Globe,
  TrendingUp,
  Target,
  Network,
  CheckCircle,
  LayoutGrid,
  MessageCircle,
  ClipboardList,
  Activity,
} from 'lucide-react';
import {
  CONGRESS_OPTIONS,
  MOCK_INGESTION,
  MOCK_THEMES,
  MOCK_COMPETITOR_VISIBILITY,
  MOCK_TOP_KOLS,
  DATA_MODULES as DATA_MODULES_RAW,
  MOCK_TRIALS,
  MOCK_CLAIMS,
  MOCK_REGISTRIES,
  MOCK_SOCIAL,
  MOCK_TREND_SENTIMENT,
  MOCK_SCIENTIFIC_ARTICLES,
  MOCK_SOCIAL_TREND_SOURCES,
} from './data/demoData';

const ICON_MAP = { FileText, Activity, ClipboardList, Database, MessageCircle };
const DATA_MODULES = DATA_MODULES_RAW.map((m) => ({ ...m, icon: ICON_MAP[m.iconId] || FileText }));

function CongressKOLDemo() {
  const [selectedCongress, setSelectedCongress] = useState(CONGRESS_OPTIONS.find((c) => c.id === 'cirse-2025') || CONGRESS_OPTIONS[0]);
  const [activeStep, setActiveStep] = useState('ingestion');
  const [insightTab, setInsightTab] = useState('themes');
  const [expandedModule, setExpandedModule] = useState(null);
  const [sourcesPanel, setSourcesPanel] = useState(null); // null | 'scientific' | 'social'

  const steps = [
    { id: 'ingestion', label: 'Congress & Data Ingestion', icon: Database },
    { id: 'kol', label: 'KOL Graph & Enrichment', icon: Network },
    { id: 'insights', label: 'Insight Outputs', icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111111', color: '#FAFAFA' }}>
      {/* Header */}
      <header className="border-b sticky top-0 z-50" style={{ borderColor: '#2D2C2C', backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: '#2D2C2C' }}>
                <LayoutGrid className="w-6 h-6" style={{ color: '#FAFAFA' }} />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Michroma, sans-serif', color: '#FAFAFA' }}>AURIVIAN</h1>
                <p className="text-xs tracking-wide" style={{ color: '#8D8C8C' }}>Congress & KOL Intelligence · LifePearl (TACE/IO) · Terumo Europe</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: '#8D8C8C' }}>Congress:</span>
                <select
                  value={selectedCongress.id}
                  onChange={(e) => {
                    const c = CONGRESS_OPTIONS.find((x) => x.id === e.target.value);
                    if (c && (c.available || c.isTrend)) setSelectedCongress(c);
                  }}
                  className="px-3 py-2 rounded-lg text-sm font-medium bg-aurivian-dark-gray border border-aurivian-gray text-aurivian-white focus:border-aurivian-blue focus:outline-none"
                >
                  {CONGRESS_OPTIONS.map((c) => (
                    <option key={c.id} value={c.id} disabled={!c.available && !c.isTrend}>
                      {c.name} {c.comingSoon ? '(Coming soon)' : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-right">
                <div className="text-sm" style={{ color: '#8D8C8C' }}>Customer Demo</div>
                <div className="text-xs" style={{ color: '#8D8C8C' }}>AI Attends the Congress</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <section className="text-center py-8 mb-8">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
            Congress Intelligence + KOL Intelligence
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-2" style={{ color: '#E3E3E3' }}>
            Ingest congress data and publications, map the KOL landscape, and surface actionable insights for Medical Affairs.
          </p>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#00FFB3' }}>
            Replaces weeks of manual congress monitoring and KOL mapping for LifePearl (TACE/IO) — and it scales across congresses and publications.
          </p>
        </section>

        {/* Trend view: 2024 → 2025 */}
        {selectedCongress.isTrend && (
          <div className="space-y-8 mb-8">
            <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
              <h3 className="text-xl font-bold mb-3" style={{ color: '#00A8FF' }}>Sentiment trend: CIRSE 2024 → CIRSE 2025</h3>
              <p className="text-aurivian-light-gray mb-2">
                Trends derived from scientific literature and social signals between CIRSE 2024 and CIRSE 2025. LifePearl and competitor visibility over time.
              </p>
              <p className="text-sm text-aurivian-gray">
                CIRSE 2026 will be added as the congress approaches so you can track sentiment into Copenhagen.
              </p>
            </div>
            <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
              <h4 className="font-semibold mb-4 text-aurivian-cyan">Scientific sentiment over time</h4>
              <div className="space-y-4">
                {MOCK_TREND_SENTIMENT.scientific.map((row, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-sm text-aurivian-gray">{row.period}</div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      {['LifePearl', 'DC Bead', 'HepaSphere', 'Other'].map((product) => (
                        <div key={product} className="flex items-center gap-2">
                          <span className="w-20 text-aurivian-gray truncate">{product}</span>
                          <div className="flex-1 h-2 bg-aurivian-dark-gray rounded-full overflow-hidden">
                            <div className="h-full bg-aurivian-cyan rounded-full" style={{ width: `${row[product] || 0}%` }} />
                          </div>
                          <span className="text-aurivian-cyan w-8">{row[product] ?? 0}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
              <h4 className="font-semibold mb-4 text-aurivian-cyan">Social sentiment over time</h4>
              <div className="space-y-4">
                {MOCK_TREND_SENTIMENT.social.map((row, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-sm text-aurivian-gray">{row.period}</div>
                    <div className="grid grid-cols-4 gap-2 text-xs">
                      {['LifePearl', 'DC Bead', 'HepaSphere', 'Other'].map((product) => (
                        <div key={product} className="flex items-center gap-2">
                          <span className="w-20 text-aurivian-gray truncate">{product}</span>
                          <div className="flex-1 h-2 bg-aurivian-dark-gray rounded-full overflow-hidden">
                            <div className="h-full bg-aurivian-blue rounded-full" style={{ width: `${row[product] || 0}%` }} />
                          </div>
                          <span className="text-aurivian-cyan w-8">{row[product] ?? 0}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Sources accordion */}
            <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
              <h4 className="font-semibold mb-3 text-aurivian-cyan">Sources (trend drivers)</h4>
              <p className="text-sm text-aurivian-gray mb-4">Scientific articles and social posts used to build the trend line between CIRSE 2024 and CIRSE 2025.</p>
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setSourcesPanel(sourcesPanel === 'scientific' ? null : 'scientific')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${sourcesPanel === 'scientific' ? 'bg-aurivian-blue text-white' : 'bg-aurivian-dark-gray text-aurivian-gray hover:text-aurivian-white'}`}
                >
                  Sample scientific articles
                </button>
                <button
                  type="button"
                  onClick={() => setSourcesPanel(sourcesPanel === 'social' ? null : 'social')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${sourcesPanel === 'social' ? 'bg-aurivian-blue text-white' : 'bg-aurivian-dark-gray text-aurivian-gray hover:text-aurivian-white'}`}
                >
                  Sample social posts
                </button>
              </div>
              {sourcesPanel === 'scientific' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-aurivian-dark-gray text-aurivian-gray">
                        <th className="text-left py-2 pr-2">Title</th>
                        <th className="text-left py-2 pr-2">Journal / Congress</th>
                        <th className="text-left py-2 pr-2">Date</th>
                        <th className="text-left py-2 pr-2">Product</th>
                        <th className="text-left py-2">Sentiment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_SCIENTIFIC_ARTICLES.map((a, i) => (
                        <tr key={i} className="border-b border-aurivian-dark-gray/50">
                          <td className="py-2 pr-2 text-aurivian-light-gray max-w-[240px] truncate" title={a.title}>{a.title}</td>
                          <td className="py-2 pr-2 text-aurivian-gray">{a.journalOrCongress}</td>
                          <td className="py-2 pr-2 text-aurivian-gray">{a.date}</td>
                          <td className="py-2 pr-2"><span className="px-1.5 py-0.5 rounded bg-aurivian-blue/20 text-aurivian-blue">{a.product}</span></td>
                          <td className="py-2"><span className={`px-1.5 py-0.5 rounded ${a.sentiment === 'positive' ? 'bg-green-600/20 text-green-400' : 'bg-aurivian-dark-gray text-aurivian-gray'}`}>{a.sentiment}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {sourcesPanel === 'social' && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-aurivian-dark-gray text-aurivian-gray">
                        <th className="text-left py-2 pr-2">Platform</th>
                        <th className="text-left py-2 pr-2">Author</th>
                        <th className="text-left py-2 pr-2">Topic</th>
                        <th className="text-left py-2 pr-2">Date</th>
                        <th className="text-left py-2 pr-2">Product</th>
                        <th className="text-left py-2">Sentiment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_SOCIAL_TREND_SOURCES.map((s, i) => (
                        <tr key={i} className="border-b border-aurivian-dark-gray/50">
                          <td className="py-2 pr-2 text-aurivian-light-gray">{s.platform}</td>
                          <td className="py-2 pr-2 text-aurivian-gray">{s.author}</td>
                          <td className="py-2 pr-2 text-aurivian-gray max-w-[180px] truncate" title={s.topic}>{s.topic}</td>
                          <td className="py-2 pr-2 text-aurivian-gray">{s.date}</td>
                          <td className="py-2 pr-2"><span className="px-1.5 py-0.5 rounded bg-aurivian-blue/20 text-aurivian-blue">{s.product}</span></td>
                          <td className="py-2"><span className={`px-1.5 py-0.5 rounded ${s.sentiment === 'positive' ? 'bg-green-600/20 text-green-400' : 'bg-aurivian-dark-gray text-aurivian-gray'}`}>{s.sentiment}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Pipeline steps (hidden when Trend is selected) */}
        {!selectedCongress.isTrend && (
        <>
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const isPast = steps.findIndex((s) => s.id === activeStep) > index;
              return (
                <div key={step.id} className="flex items-center flex-1">
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all ${
                      isActive ? 'bg-aurivian-blue text-white' : isPast ? 'bg-green-600/20 text-green-400' : 'bg-aurivian-dark-gray text-aurivian-gray'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{step.label}</span>
                  </button>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${isPast ? 'bg-green-600' : 'bg-aurivian-dark-gray'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Ingestion */}
        {activeStep === 'ingestion' && (
          <div className="space-y-8">
            <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00A8FF' }}>
                <Database className="w-5 h-5" />
                Congress & Publication Data Ingestion
              </h3>
              <p className="text-aurivian-light-gray mb-4">
                Selected: <strong>{selectedCongress.fullName}</strong> · {selectedCongress.location} · {selectedCongress.date}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {[
                  { label: 'Agendas', count: MOCK_INGESTION.agendas, icon: FileText },
                  { label: 'Abstracts', count: MOCK_INGESTION.abstracts, icon: FileText },
                  { label: 'Posters', count: MOCK_INGESTION.posters, icon: FileText },
                  { label: 'Speakers', count: MOCK_INGESTION.speakers, icon: Users },
                  { label: 'Publications linked', count: MOCK_INGESTION.publicationsLinked, icon: Globe },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-black/40 rounded-lg p-4 text-center border border-aurivian-dark-gray">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-aurivian-cyan" />
                      <div className="text-2xl font-bold text-aurivian-cyan">{item.count.toLocaleString()}</div>
                      <div className="text-sm text-aurivian-gray">{item.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2" style={{ color: '#E3E3E3' }}>Sample sessions (tagged to assets)</h4>
                <div className="space-y-2">
                  {MOCK_INGESTION.sessions.map((s, i) => (
                    <div key={i} className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="text-aurivian-light-gray">{s.title}</span>
                      <span className="text-aurivian-gray">· {s.track}</span>
                      <div className="flex gap-1 flex-wrap">
                        {s.products.map((p) => (
                          <span key={p} className="px-2 py-0.5 rounded bg-aurivian-blue/20 text-aurivian-blue text-xs">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-aurivian-gray">
                Content tagged to <strong>LifePearl</strong> (TACE/IO) and competitor products for comparison.
              </p>
            </div>

            {/* Data modules – expandable with mock data */}
            <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: '#00A8FF' }}>
                <LayoutGrid className="w-5 h-5" />
                Data modules (scope of capabilities)
              </h3>
              <p className="text-sm text-aurivian-gray mb-4">Click a module to view sample data.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {DATA_MODULES.map((m) => {
                  const Icon = m.icon;
                  const isExpanded = expandedModule === m.id;
                  const count =
                    m.id === 'congress' ? MOCK_INGESTION.abstracts + ' abstracts' :
                    m.id === 'trials' ? MOCK_TRIALS.total + ' trials' :
                    m.id === 'claims' ? (MOCK_CLAIMS.totalRecords / 1000).toFixed(1) + 'K claims' :
                    m.id === 'registries' ? MOCK_REGISTRIES.totalRegistries + ' registries' :
                    MOCK_SOCIAL.totalSignals + ' signals';
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setExpandedModule(isExpanded ? null : m.id)}
                      className={`rounded-lg p-4 border text-left transition-all ${
                        m.status === 'connected' ? 'border-aurivian-cyan bg-aurivian-cyan/10' : 'border-aurivian-dark-gray bg-black/30'
                      } ${isExpanded ? 'ring-2 ring-aurivian-blue' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-5 h-5 text-aurivian-cyan" />
                        {m.status === 'connected' ? (
                          <span className="text-xs text-aurivian-cyan flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Connected
                          </span>
                        ) : (
                          <span className="text-xs text-aurivian-gray">Available</span>
                        )}
                      </div>
                      <div className="font-medium text-sm text-aurivian-white">{m.label}</div>
                      <div className="text-xs text-aurivian-gray mt-1">{m.description}</div>
                      <div className="text-xs text-aurivian-cyan mt-2 font-medium">{count}</div>
                    </button>
                  );
                })}
              </div>

              {/* Expanded module detail panel */}
              {expandedModule && (
                <div className="mt-6 rounded-xl border border-aurivian-blue/30 bg-black/40 p-6">
                  {expandedModule === 'congress' && (
                    <div className="text-sm text-aurivian-light-gray space-y-2">
                      <p><strong className="text-aurivian-white">Congress & Publications</strong> (connected)</p>
                      <p>{MOCK_INGESTION.abstracts} abstracts, {MOCK_INGESTION.speakers} speakers, {MOCK_INGESTION.publicationsLinked} publications linked. See ingestion panel above.</p>
                    </div>
                  )}
                  {expandedModule === 'trials' && (
                    <div className="text-sm">
                      <p className="text-aurivian-cyan font-medium mb-3">{MOCK_TRIALS.total} trials · {MOCK_TRIALS.linkedToKOLs} linked to KOLs</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-aurivian-dark-gray text-aurivian-gray">
                              <th className="text-left py-2 pr-2">NCT ID</th>
                              <th className="text-left py-2 pr-2">Title</th>
                              <th className="text-left py-2 pr-2">Phase</th>
                              <th className="text-left py-2 pr-2">Product</th>
                              <th className="text-left py-2 pr-2">Indication</th>
                              <th className="text-left py-2 pr-2">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_TRIALS.sample.map((t, i) => (
                              <tr key={i} className="border-b border-aurivian-dark-gray/50">
                                <td className="py-2 pr-2 text-aurivian-cyan">{t.nctId}</td>
                                <td className="py-2 pr-2 text-aurivian-light-gray max-w-[200px] truncate" title={t.title}>{t.title}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{t.phase}</td>
                                <td className="py-2 pr-2"><span className="px-1.5 py-0.5 rounded bg-aurivian-blue/20 text-aurivian-blue">{t.product}</span></td>
                                <td className="py-2 pr-2 text-aurivian-gray">{t.indication}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{t.status}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {expandedModule === 'claims' && (
                    <div className="text-sm">
                      <p className="text-aurivian-cyan font-medium mb-3">{MOCK_CLAIMS.totalRecords.toLocaleString()} records · {MOCK_CLAIMS.period}</p>
                      <div className="mb-4">
                        <p className="text-aurivian-gray text-xs mb-2">Procedures by product</p>
                        {MOCK_CLAIMS.byProduct.map((b, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs mb-1">
                            <span className="w-28 text-aurivian-gray">{b.product}</span>
                            <div className="flex-1 h-2 bg-aurivian-dark-gray rounded-full overflow-hidden">
                              <div className="h-full bg-aurivian-cyan rounded-full" style={{ width: `${b.share}%` }} />
                            </div>
                            <span className="text-aurivian-cyan w-20 text-right">{b.procedures.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-aurivian-gray text-xs mb-2">Sample by region</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-aurivian-dark-gray text-aurivian-gray">
                              <th className="text-left py-2 pr-2">Region</th>
                              <th className="text-left py-2 pr-2">Procedure</th>
                              <th className="text-left py-2 pr-2">Product</th>
                              <th className="text-right py-2">Volume</th>
                              <th className="text-right py-2">Avg LOS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_CLAIMS.sample.map((s, i) => (
                              <tr key={i} className="border-b border-aurivian-dark-gray/50">
                                <td className="py-2 pr-2 text-aurivian-light-gray">{s.region}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{s.procedureType}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{s.product}</td>
                                <td className="py-2 text-right text-aurivian-cyan">{s.volume}</td>
                                <td className="py-2 text-right text-aurivian-gray">{s.avgLOS}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {expandedModule === 'registries' && (
                    <div className="text-sm">
                      <p className="text-aurivian-cyan font-medium mb-3">{MOCK_REGISTRIES.totalRegistries} registries · {MOCK_REGISTRIES.totalRecordsLinked.toLocaleString()} records linked</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-aurivian-dark-gray text-aurivian-gray">
                              <th className="text-left py-2 pr-2">Registry</th>
                              <th className="text-left py-2 pr-2">Country</th>
                              <th className="text-left py-2 pr-2">Indication</th>
                              <th className="text-right py-2">Records</th>
                              <th className="text-right py-2">Last update</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_REGISTRIES.sample.map((r, i) => (
                              <tr key={i} className="border-b border-aurivian-dark-gray/50">
                                <td className="py-2 pr-2 text-aurivian-light-gray">{r.name}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{r.country}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{r.indication}</td>
                                <td className="py-2 text-right text-aurivian-cyan">{r.recordsLinked.toLocaleString()}</td>
                                <td className="py-2 text-right text-aurivian-gray">{r.lastUpdate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {expandedModule === 'social' && (
                    <div className="text-sm">
                      <p className="text-aurivian-cyan font-medium mb-3">{MOCK_SOCIAL.totalSignals.toLocaleString()} signals · {MOCK_SOCIAL.period}</p>
                      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                        {MOCK_SOCIAL.byPlatform.map((p, i) => (
                          <div key={i} className="bg-aurivian-dark-gray/50 rounded-lg p-2 text-xs">
                            <div className="text-aurivian-gray">{p.platform}</div>
                            <div className="text-aurivian-cyan font-medium">{p.mentions} mentions</div>
                            <div className="text-aurivian-gray">{p.kolsTracked} KOLs tracked</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-aurivian-gray text-xs mb-2">Sample signals</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="border-b border-aurivian-dark-gray text-aurivian-gray">
                              <th className="text-left py-2 pr-2">Platform</th>
                              <th className="text-left py-2 pr-2">Author</th>
                              <th className="text-left py-2 pr-2">Topic</th>
                              <th className="text-left py-2 pr-2">Sentiment</th>
                              <th className="text-left py-2">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_SOCIAL.sample.map((s, i) => (
                              <tr key={i} className="border-b border-aurivian-dark-gray/50">
                                <td className="py-2 pr-2 text-aurivian-light-gray">{s.platform}</td>
                                <td className="py-2 pr-2 text-aurivian-gray">{s.author}</td>
                                <td className="py-2 pr-2 text-aurivian-gray max-w-[180px] truncate" title={s.topic}>{s.topic}</td>
                                <td className="py-2 pr-2"><span className={`px-1.5 py-0.5 rounded ${s.sentiment === 'positive' ? 'bg-green-600/20 text-green-400' : 'bg-aurivian-dark-gray text-aurivian-gray'}`}>{s.sentiment}</span></td>
                                <td className="py-2 text-aurivian-gray">{s.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 pt-3 border-t border-aurivian-dark-gray">
                    <button
                      type="button"
                      onClick={() => setExpandedModule(null)}
                      className="text-xs text-aurivian-gray hover:text-aurivian-cyan"
                    >
                      Close panel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: KOL Graph */}
        {activeStep === 'kol' && (
          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#9D4EDD' }}>
              <Network className="w-5 h-5" />
              KOL Graph & Enrichment
            </h3>
            <p className="text-aurivian-light-gray mb-6">
              Speakers and authors identified from congress and publications; profiles enriched with role, institution, publication/congress activity, and influence clustering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 rounded-lg p-5 border border-aurivian-dark-gray">
                <h4 className="font-semibold mb-3 text-aurivian-cyan">Entity resolution</h4>
                <ul className="text-sm text-aurivian-light-gray space-y-1">
                  <li>· 312 speakers matched to publication authors</li>
                  <li>· 1,284 publications linked to congress topics</li>
                  <li>· Confidence scoring by source and name variant</li>
                </ul>
              </div>
              <div className="bg-black/40 rounded-lg p-5 border border-aurivian-dark-gray">
                <h4 className="font-semibold mb-3 text-aurivian-cyan">Enrichment</h4>
                <ul className="text-sm text-aurivian-light-gray space-y-1">
                  <li>· Role, institution, region</li>
                  <li>· Congress vs publication narrative alignment</li>
                  <li>· Digital and advisory footprint (where available)</li>
                </ul>
              </div>
              <div className="bg-black/40 rounded-lg p-5 border border-aurivian-dark-gray">
                <h4 className="font-semibold mb-3 text-aurivian-cyan">Influence clustering</h4>
                <ul className="text-sm text-aurivian-light-gray space-y-1">
                  <li>· By indication (HCC, mCRC, ICC)</li>
                  <li>· By product/device class</li>
                  <li>· By region and congress presence</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-aurivian-purple/10 border border-aurivian-purple/30">
              <p className="text-sm text-aurivian-light-gray">
                <strong className="text-aurivian-white">What publications enable:</strong> Map which KOLs drive which scientific positions; compare what they publish vs what they present at congress; surface gaps (e.g. strong publication voices under-represented at congress).
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Insights */}
        {activeStep === 'insights' && (
          <div className="space-y-8">
            <div className="flex gap-2 flex-wrap">
              {[
                { id: 'themes', label: 'Scientific themes', icon: TrendingUp },
                { id: 'competitors', label: 'Competitor visibility', icon: BarChart3 },
                { id: 'kol-list', label: 'KOL engagement list', icon: Target },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setInsightTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                      insightTab === tab.id ? 'bg-aurivian-blue text-white' : 'bg-aurivian-dark-gray text-aurivian-gray hover:text-aurivian-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {insightTab === 'themes' && (
              <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00FFB3' }}>
                  <TrendingUp className="w-5 h-5" />
                  Key scientific themes and emerging opportunities
                </h3>
                <div className="space-y-4">
                  {MOCK_THEMES.map((t, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-black/40 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-aurivian-white">{t.theme}</div>
                        <div className="text-sm text-aurivian-gray">{t.mentions} mentions at congress</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-aurivian-cyan">{t.momentum}</div>
                        <div className="text-xs text-aurivian-gray">Momentum score</div>
                      </div>
                      <div className="w-24 h-2 bg-aurivian-dark-gray rounded-full overflow-hidden">
                        <div className="h-full bg-aurivian-cyan rounded-full" style={{ width: `${t.momentum}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {insightTab === 'competitors' && (
              <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#00FFB3' }}>
                  <BarChart3 className="w-5 h-5" />
                  Competitor product visibility at congress
                </h3>
                <div className="space-y-4">
                  {MOCK_COMPETITOR_VISIBILITY.map((c, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-48 text-sm text-aurivian-light-gray truncate">{c.product}</div>
                      <div className="flex-1 h-6 bg-aurivian-dark-gray rounded-full overflow-hidden flex">
                        <div
                          className="h-full bg-aurivian-blue rounded-l"
                          style={{ width: `${c.share}%` }}
                          title={`${c.share}%`}
                        />
                      </div>
                      <div className="text-sm font-medium text-aurivian-cyan w-20 text-right">{c.share}%</div>
                      <div className="text-sm text-aurivian-gray w-16 text-right">{c.mentions} mentions</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {insightTab === 'kol-list' && (
              <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: '#00FFB3' }}>
                  <Target className="w-5 h-5" />
                  Actionable KOL engagement list
                </h3>
                <p className="text-sm text-aurivian-gray mb-6">
                  Top 10 HCC / TACE KOLs to engage for LifePearl. Ranked by influence, congress presence, and publication alignment.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-aurivian-dark-gray">
                        <th className="text-left py-3 px-4">Rank</th>
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Institution</th>
                        <th className="text-center py-3 px-4">Score</th>
                        <th className="text-left py-3 px-4">Relevant asset</th>
                        <th className="text-center py-3 px-4">Congress talks</th>
                        <th className="text-center py-3 px-4">Publications</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_TOP_KOLS.map((k) => (
                        <tr key={k.rank} className="border-b border-aurivian-dark-gray hover:bg-black/30">
                          <td className="py-3 px-4">
                            <span className="w-8 h-8 rounded-full bg-aurivian-dark-gray flex items-center justify-center font-bold text-aurivian-cyan">
                              {k.rank}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-medium text-aurivian-white">{k.name}</td>
                          <td className="py-3 px-4 text-aurivian-gray">{k.institution}</td>
                          <td className="py-3 px-4 text-center">
                            <span className="font-bold text-aurivian-cyan">{k.score}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 rounded bg-aurivian-blue/20 text-aurivian-blue text-xs">{k.asset}</span>
                          </td>
                          <td className="py-3 px-4 text-center text-aurivian-light-gray">{k.congressTalks}</td>
                          <td className="py-3 px-4 text-center text-aurivian-light-gray">{k.publications}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
        </>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-aurivian-dark-gray text-center text-sm text-aurivian-gray">
          <p>AURIVIAN Congress & KOL Intelligence · LifePearl (TACE/IO) · Terumo Europe · Customer Demo</p>
          <p className="mt-1">CIRSE and additional congresses (coming soon)</p>
        </footer>
      </main>
    </div>
  );
}

export default CongressKOLDemo;
