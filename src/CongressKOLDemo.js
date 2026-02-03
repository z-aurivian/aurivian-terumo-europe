import React, { useState, useRef, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
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
  Activity,
} from 'lucide-react';
import {
  CONGRESS_OPTIONS,
  getIngestionForCongress,
  MOCK_THEMES,
  MOCK_COMPETITOR_VISIBILITY,
  MOCK_TOP_KOLS,
  DATA_MODULES as DATA_MODULES_RAW,
  MOCK_TRIALS,
  MOCK_SOCIAL,
  MOCK_TREND_SENTIMENT,
  MOCK_SCIENTIFIC_ARTICLES,
  MOCK_SOCIAL_TREND_SOURCES,
  KOL_GRAPH_DATA,
} from './data/demoData';

const ICON_MAP = { FileText, Activity, MessageCircle };
const DATA_MODULES = DATA_MODULES_RAW.map((m) => ({ ...m, icon: ICON_MAP[m.iconId] || FileText }));

function CongressKOLDemo() {
  const [selectedCongress, setSelectedCongress] = useState(CONGRESS_OPTIONS.find((c) => c.id === 'cirse-2025') || CONGRESS_OPTIONS[0]);
  const [activeStep, setActiveStep] = useState('ingestion');
  const [insightTab, setInsightTab] = useState('themes');
  const [expandedModule, setExpandedModule] = useState(null);
  const [sourcesPanel, setSourcesPanel] = useState(null); // null | 'scientific' | 'social'
  const [hoverNode, setHoverNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const graphRef = useRef(null);

  const ingestion = getIngestionForCongress(selectedCongress.id);

  const handleNodeLabel = useCallback((node) => `${node.name} · ${node.institution}, ${node.country || ''} · Score ${node.score}`, []);
  const handleNodeHover = useCallback((node) => setHoverNode(node), []);
  const handleNodeClick = useCallback((node) => setSelectedNode((prev) => (prev?.id === node?.id ? null : node)), []);

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
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero */}
        <section className="text-center py-8 mb-8">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
            Congress Intelligence + KOL Intelligence + Medical Insights
          </h2>
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
          <div className="flex justify-center">
            <div className="flex items-center">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === activeStep;
                const isPast = steps.findIndex((s) => s.id === activeStep) > index;
                return (
                  <div key={step.id} className="flex items-center">
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
                      <div className={`w-8 h-0.5 mx-1 ${isPast ? 'bg-green-600' : 'bg-aurivian-dark-gray'}`} />
                    )}
                  </div>
                );
              })}
            </div>
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
                  { label: 'Agendas', count: ingestion.agendas, icon: FileText },
                  { label: 'Abstracts', count: ingestion.abstracts, icon: FileText },
                  { label: 'Posters', count: ingestion.posters, icon: FileText },
                  { label: 'Speakers', count: ingestion.speakers, icon: Users },
                  { label: 'Publications linked', count: ingestion.publicationsLinked, icon: Globe },
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
                  {ingestion.sessions.map((s, i) => (
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
                Data Modules
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {DATA_MODULES.map((m) => {
                  const Icon = m.icon;
                  const isExpanded = expandedModule === m.id;
                  const count =
                    m.id === 'congress' ? ingestion.abstracts + ' abstracts' :
                    m.id === 'trials' ? MOCK_TRIALS.total + ' trials' :
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
                      <p>{ingestion.abstracts} abstracts, {ingestion.speakers} speakers, {ingestion.publicationsLinked} publications linked. See ingestion panel above.</p>
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
            <p className="text-aurivian-light-gray mb-4">
              Speakers and authors identified from congress and publications; profiles enriched with role, institution, publication/congress activity, and influence clustering. Hover or click a node for details.
            </p>
            <div className="rounded-lg border border-aurivian-dark-gray bg-black/40 mb-6" style={{ height: 420 }}>
              <ForceGraph2D
                ref={graphRef}
                graphData={KOL_GRAPH_DATA}
                nodeLabel={handleNodeLabel}
                onNodeHover={handleNodeHover}
                onNodeClick={handleNodeClick}
                nodeColor={(node) => (selectedNode?.id === node.id ? '#00FFB3' : hoverNode?.id === node.id ? '#00D4FF' : '#9D4EDD')}
                linkColor={(link) => {
                  // Color by link type: product=blue, region=green, focus=purple
                  if (link.type === 'product') return 'rgba(0, 168, 255, 0.6)'; // Blue
                  if (link.type === 'region') return 'rgba(0, 255, 179, 0.5)'; // Green
                  return 'rgba(157, 78, 221, 0.4)'; // Purple for focus area
                }}
                linkWidth={(link) => link.type === 'product' ? 2 : 1}
                backgroundColor="#0a0a0a"
              />
            </div>
            <div className="flex gap-4 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded" style={{ backgroundColor: '#00A8FF' }} />
                <span className="text-aurivian-gray">Product alignment (LifePearl)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded" style={{ backgroundColor: '#00FFB3' }} />
                <span className="text-aurivian-gray">Regional (same country)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 rounded" style={{ backgroundColor: '#9D4EDD' }} />
                <span className="text-aurivian-gray">Shared focus areas</span>
              </div>
            </div>
            {hoverNode && (
              <div className="fixed z-50 px-3 py-2 rounded-lg border text-sm pointer-events-none bg-aurivian-dark-gray border-aurivian-blue/50 shadow-lg" style={{ left: '50%', top: 280, transform: 'translateX(-50%)' }}>
                <div className="font-medium text-aurivian-white">{hoverNode.name}</div>
                <div className="text-aurivian-gray">{hoverNode.institution}{hoverNode.city ? `, ${hoverNode.city}` : ''}</div>
                <div className="text-aurivian-gray">{hoverNode.country}</div>
                <div className="text-aurivian-cyan">Score {hoverNode.score} · {hoverNode.congressTalks} talks · {hoverNode.publications} publications</div>
                {hoverNode.focusAreas && (
                  <div className="text-aurivian-gray text-xs mt-1">Focus: {hoverNode.focusAreas.slice(0, 2).join(', ')}</div>
                )}
              </div>
            )}
            {selectedNode && !hoverNode && (
              <div className="mb-6 p-4 rounded-lg border border-aurivian-cyan/40 bg-aurivian-cyan/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-aurivian-white">{selectedNode.name}</span>
                    {selectedNode.engagementPriority && (
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        selectedNode.engagementPriority.includes('Tier 1') ? 'bg-green-600/20 text-green-400' :
                        selectedNode.engagementPriority.includes('Tier 2') ? 'bg-aurivian-blue/20 text-aurivian-blue' :
                        'bg-aurivian-dark-gray text-aurivian-gray'
                      }`}>
                        {selectedNode.engagementPriority.split(' - ')[0]}
                      </span>
                    )}
                  </div>
                  <button type="button" onClick={() => setSelectedNode(null)} className="text-xs text-aurivian-gray hover:text-aurivian-cyan">Clear</button>
                </div>
                <div className="text-sm text-aurivian-light-gray mb-2">
                  {selectedNode.institution}{selectedNode.city ? `, ${selectedNode.city}` : ''}, {selectedNode.country}
                </div>
                <div className="text-sm text-aurivian-gray mb-2">
                  Score {selectedNode.score} · {selectedNode.congressTalks} congress talks · {selectedNode.publications} publications
                </div>
                {selectedNode.focusAreas && (
                  <div className="text-sm mb-2">
                    <span className="text-aurivian-gray">Focus areas: </span>
                    <span className="text-aurivian-light-gray">{selectedNode.focusAreas.join(', ')}</span>
                  </div>
                )}
                {selectedNode.productAssociations && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {selectedNode.productAssociations.map((p, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-xs bg-aurivian-blue/20 text-aurivian-blue">{p}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 rounded-lg p-5 border border-aurivian-dark-gray">
                <h4 className="font-semibold mb-3 text-aurivian-cyan">Entity resolution</h4>
                <ul className="text-sm text-aurivian-light-gray space-y-1">
                  <li>· {ingestion.speakers.toLocaleString()} speakers matched to publication authors</li>
                  <li>· {ingestion.publicationsLinked.toLocaleString()} publications linked to congress topics</li>
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
                  Top 20 HCC / TACE / Interventional Oncology KOLs. Ranked by influence, congress presence, and publication alignment.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-aurivian-dark-gray">
                        <th className="text-left py-3 px-2">Rank</th>
                        <th className="text-left py-3 px-2">Name</th>
                        <th className="text-left py-3 px-2">Institution</th>
                        <th className="text-left py-3 px-2">Country</th>
                        <th className="text-center py-3 px-2">Score</th>
                        <th className="text-left py-3 px-2">Priority</th>
                        <th className="text-left py-3 px-2">Focus areas</th>
                        <th className="text-center py-3 px-2">Talks</th>
                        <th className="text-center py-3 px-2">Pubs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MOCK_TOP_KOLS.map((k) => (
                        <tr key={k.rank} className="border-b border-aurivian-dark-gray hover:bg-black/30">
                          <td className="py-2 px-2">
                            <span className="w-7 h-7 rounded-full bg-aurivian-dark-gray flex items-center justify-center font-bold text-aurivian-cyan text-xs">
                              {k.rank}
                            </span>
                          </td>
                          <td className="py-2 px-2 font-medium text-aurivian-white text-xs">{k.name}</td>
                          <td className="py-2 px-2 text-aurivian-gray text-xs max-w-[140px] truncate" title={k.institution}>{k.institution}</td>
                          <td className="py-2 px-2 text-aurivian-gray text-xs">{k.country}</td>
                          <td className="py-2 px-2 text-center">
                            <span className="font-bold text-aurivian-cyan">{k.score}</span>
                          </td>
                          <td className="py-2 px-2">
                            <span className={`px-1.5 py-0.5 rounded text-xs ${
                              k.engagementPriority?.includes('Tier 1') ? 'bg-green-600/20 text-green-400' :
                              k.engagementPriority?.includes('Tier 2') ? 'bg-aurivian-blue/20 text-aurivian-blue' :
                              k.engagementPriority?.includes('Historical') ? 'bg-aurivian-dark-gray text-aurivian-gray' :
                              'bg-aurivian-dark-gray text-aurivian-gray'
                            }`}>
                              {k.engagementPriority?.split(' - ')[0] || 'Tier 3'}
                            </span>
                          </td>
                          <td className="py-2 px-2 text-aurivian-gray text-xs max-w-[120px] truncate" title={k.focusAreas?.join(', ')}>
                            {k.focusAreas?.slice(0, 2).join(', ')}
                          </td>
                          <td className="py-2 px-2 text-center text-aurivian-light-gray text-xs">{k.congressTalks}</td>
                          <td className="py-2 px-2 text-center text-aurivian-light-gray text-xs">{k.publications}</td>
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
