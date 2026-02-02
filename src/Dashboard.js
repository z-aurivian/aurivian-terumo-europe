import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  MOCK_TREND_SENTIMENT,
  MOCK_COMPETITOR_VISIBILITY,
  MOCK_THEMES,
  MOCK_TOP_KOLS,
  MOCK_INGESTION,
} from './data/demoData';

const COLORS = ['#00A8FF', '#00D4FF', '#00FFB3', '#9D4EDD', '#FF8800'];

// Transform trend data for Recharts (one line per product)
function useTrendChartData() {
  const scientific = MOCK_TREND_SENTIMENT.scientific.map((row) => ({
    period: row.period,
    LifePearl: row.LifePearl,
    'DC Bead': row['DC Bead'],
    HepaSphere: row.HepaSphere,
    Other: row.Other,
  }));
  const social = MOCK_TREND_SENTIMENT.social.map((row) => ({
    period: row.period,
    LifePearl: row.LifePearl,
    'DC Bead': row['DC Bead'],
    HepaSphere: row.HepaSphere,
    Other: row.Other,
  }));
  return { scientific, social };
}

// Congress ingestion as pie/bar data
const ingestionChartData = [
  { name: 'Abstracts', value: MOCK_INGESTION.abstracts },
  { name: 'Posters', value: MOCK_INGESTION.posters },
  { name: 'Speakers', value: MOCK_INGESTION.speakers },
  { name: 'Publications linked', value: MOCK_INGESTION.publicationsLinked },
  { name: 'Agendas', value: MOCK_INGESTION.agendas },
];

// Data modules scope (counts for pie)
const dataModulesChartData = [
  { name: 'Congress', value: MOCK_INGESTION.abstracts },
  { name: 'Trials', value: 47 },
  { name: 'Claims (K)', value: 12 },
  { name: 'Registries', value: 8 },
  { name: 'Social', value: 3840 },
];

function Dashboard() {
  const { scientific, social } = useTrendChartData();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111111', color: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-2" style={{ color: '#FAFAFA' }}>
          Dashboard & Visualizations
        </h1>
        <p className="text-aurivian-gray mb-8">
          Congress & KOL Intelligence · LifePearl (TACE/IO) · Text metrics in graph form
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h2 className="font-semibold mb-4 text-aurivian-cyan">Scientific sentiment over time (CIRSE 2024 → 2025)</h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={scientific} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2C2C" />
                <XAxis dataKey="period" tick={{ fill: '#8D8C8C', fontSize: 11 }} />
                <YAxis tick={{ fill: '#8D8C8C', fontSize: 11 }} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} labelStyle={{ color: '#FAFAFA' }} />
                <Legend />
                <Line type="monotone" dataKey="LifePearl" stroke="#00A8FF" strokeWidth={2} dot={{ fill: '#00A8FF' }} />
                <Line type="monotone" dataKey="DC Bead" stroke="#00FFB3" strokeWidth={2} dot={{ fill: '#00FFB3' }} />
                <Line type="monotone" dataKey="HepaSphere" stroke="#9D4EDD" strokeWidth={2} dot={{ fill: '#9D4EDD' }} />
                <Line type="monotone" dataKey="Other" stroke="#8D8C8C" strokeWidth={2} dot={{ fill: '#8D8C8C' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h2 className="font-semibold mb-4 text-aurivian-cyan">Social sentiment over time (CIRSE 2024 → 2025)</h2>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={social} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2C2C" />
                <XAxis dataKey="period" tick={{ fill: '#8D8C8C', fontSize: 11 }} />
                <YAxis tick={{ fill: '#8D8C8C', fontSize: 11 }} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} labelStyle={{ color: '#FAFAFA' }} />
                <Legend />
                <Line type="monotone" dataKey="LifePearl" stroke="#00A8FF" strokeWidth={2} dot={{ fill: '#00A8FF' }} />
                <Line type="monotone" dataKey="DC Bead" stroke="#00FFB3" strokeWidth={2} dot={{ fill: '#00FFB3' }} />
                <Line type="monotone" dataKey="HepaSphere" stroke="#9D4EDD" strokeWidth={2} dot={{ fill: '#9D4EDD' }} />
                <Line type="monotone" dataKey="Other" stroke="#8D8C8C" strokeWidth={2} dot={{ fill: '#8D8C8C' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h2 className="font-semibold mb-4 text-aurivian-cyan">Competitor visibility at congress</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={MOCK_COMPETITOR_VISIBILITY} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2C2C" />
                <XAxis type="number" domain={[0, 40]} tick={{ fill: '#8D8C8C' }} />
                <YAxis type="category" dataKey="product" tick={{ fill: '#8D8C8C', fontSize: 10 }} width={75} />
                <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} />
                <Bar dataKey="share" fill="#00A8FF" radius={[0, 4, 4, 0]} name="Share %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h2 className="font-semibold mb-4 text-aurivian-cyan">Key themes momentum</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={MOCK_THEMES} margin={{ top: 5, right: 20, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2C2C" />
                <XAxis dataKey="theme" tick={{ fill: '#8D8C8C', fontSize: 10 }} angle={-25} textAnchor="end" height={70} />
                <YAxis tick={{ fill: '#8D8C8C' }} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} />
                <Bar dataKey="momentum" fill="#00FFB3" radius={[4, 4, 0, 0]} name="Momentum" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h2 className="font-semibold mb-4 text-aurivian-cyan">Top KOLs by score</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={MOCK_TOP_KOLS} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D2C2C" />
                <XAxis dataKey="name" tick={{ fill: '#8D8C8C', fontSize: 10 }} angle={-35} textAnchor="end" height={80} />
                <YAxis tick={{ fill: '#8D8C8C' }} domain={[0, 100]} />
                <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} />
                <Bar dataKey="score" fill="#9D4EDD" radius={[4, 4, 0, 0]} name="Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
            <h2 className="font-semibold mb-4 text-aurivian-cyan">Congress ingestion</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={ingestionChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {ingestionChartData.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-aurivian-dark-gray/80 rounded-xl p-6 border border-aurivian-blue/20">
          <h2 className="font-semibold mb-4 text-aurivian-cyan">Data modules scope</h2>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={dataModulesChartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D2C2C" />
              <XAxis dataKey="name" tick={{ fill: '#8D8C8C' }} />
              <YAxis tick={{ fill: '#8D8C8C' }} />
              <Tooltip contentStyle={{ backgroundColor: '#2D2C2C', border: '1px solid #00A8FF' }} />
              <Bar dataKey="value" fill="#00A8FF" radius={[4, 4, 0, 0]} name="Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
