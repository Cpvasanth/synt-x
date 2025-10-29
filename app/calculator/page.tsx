'use client';

import Link from 'next/link';
import React, { useMemo, useState } from 'react';

// --- TYPE DEFINITIONS ---

type PlanKey = 'custom' | 'standard';

interface FeatureDef {
  id: string;
  label: string;
  hours: number;
  price: number;
  customOnly?: boolean;
}

interface PackDef {
  id: string;
  label: string;
  hours: number;
  price: number;
  description: string;
}

// --- CONSTANTS ---

const PLANS = {
  standard: {
    key: 'standard' as PlanKey,
    title: 'Standard Website',
    description: 'Ideal if you want a clean, efficient site using only Our’s native features.',
    baseHours: 125,
    basePrice: 11050,
    includedPages: 5,
    perPageHours: 3,
    perPagePrice: 150,
    defaultPages: 5,
    discountPercent: 15,
    includedPack: [
      'Sitemap',
      'Wireframes',
      'Prototype',
      'Custom theme integration',
      '10 page templates',
      'Responsive layout',
      'Testing & go-live',
      'Training',
    ],
  },
  custom: {
    key: 'custom' as PlanKey,
    title: 'Custom Website',
    description: 'Perfect for a tailored experience, with advanced design and feature customisation.',
    baseHours: 180,
    basePrice: 16000,
    includedPages: 10,
    perPageHours: 4,
    perPagePrice: 250,
    defaultPages: 10,
    discountPercent: 15,
    includedPack: [
      'Sitemap',
      'Professional design with the website builder',
      '5 page templates',
      'Responsive layout',
      'Testing & go-live',
      'Training',
    ],
  },
};

const FEATURES: FeatureDef[] = [
  { id: 'ecommerce', label: 'eCommerce', hours: 10, price: 750 },
  { id: 'events', label: 'Events', hours: 6, price: 400 },
  { id: 'blog', label: 'Blog', hours: 4, price: 250 },
  { id: 'portal', label: 'Portal', hours: 18, price: 1400 },
  { id: 'elearning', label: 'eLearning', hours: 20, price: 1800 },
  { id: 'appointment', label: 'Appointment', hours: 6, price: 350 },
  { id: 'store_locator', label: 'Store Locator', hours: 8, price: 600, customOnly: true },
];

const PACKS: PackDef[] = [
  { id: 'seo', label: 'SEO Pack', hours: 12, price: 950, description: 'Enhance your online visibility with our SEO pack, designed to optimize your website for search engines and boost your rankings.' },
  { id: 'marketing', label: 'Marketing Pack', hours: 18, price: 1500, description: 'Access valuable insights and data-driven strategies to attract the right audience, foster engagement, and achieve measurable success.' },
  { id: 'logo', label: 'Logo Pack', hours: 10, price: 1200, description: 'Elevate your brand with our logo pack, offering custom logo design and comprehensive graphic identity creation.' },
];

// --- HELPERS ---

function formatEuro(value: number) {
  return `${value.toLocaleString('de-DE', { maximumFractionDigits: 0 })}€`;
}

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
        checked ? 'bg-neon' : 'bg-gray-500'
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

function OptionToggle({
  label,
  description,
  checked,
  onChange,
  disabled = false,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}) {
  const isDisabled = disabled && !checked;
  return (
    <label
      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
        isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-500'
      } ${
        checked
          ? 'bg-[#282828] border-2 border-neon shadow-[0_0_15px_rgba(168,240,0,0.5)]'
          : 'bg-[#282828] border-2 border-gray-700'
      }`}
    >
      <div className="pr-4">
        <div className={`font-semibold ${description ? 'text-base' : 'text-sm'}`}>{label}</div>
        {description && (
          <p className="text-xs text-gray-400 mt-1" dangerouslySetInnerHTML={{ __html: description.replace(/More information/g, '<span class="font-semibold text-gray-300">More information</span>') }} />
        )}
      </div>
      <div className="flex-shrink-0">
        <ToggleSwitch
          checked={checked}
          onChange={() => {
            if (!isDisabled) onChange();
          }}
        />
      </div>
    </label>
  );
}

function WavyLineIcon() {
  return (
    <svg width="200" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 9.40084C10.6131 3.12078 23.956 2.06211 35.3238 2.06211C53.764 2.06211 66.377 9.40084 85.3406 9.40084C104.304 9.40084 116.917 2.06211 135.881 2.06211C147.249 2.06211 160.592 3.12078 177.728 9.40084" stroke="#A8F000" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// --- MAIN ---

export default function PageCalculator() {
  const [planKey, setPlanKey] = useState<PlanKey>('custom');
  const plan = PLANS[planKey];
  const [pages, setPages] = useState<number>(plan.defaultPages);
  const [selectedFeatures, setSelectedFeatures] = useState<Record<string, boolean>>({});
  const [selectedPacks, setSelectedPacks] = useState<Record<string, boolean>>({});
  const [showValidation, setShowValidation] = useState<string | null>(null);

  React.useEffect(() => {
    setPages(plan.defaultPages);
    setSelectedFeatures(prev => {
      const newFeatures: Record<string, boolean> = {};
      if (planKey === 'standard') {
        for (const feature of FEATURES) {
          if (!feature.customOnly && prev[feature.id]) newFeatures[feature.id] = true;
        }
      } else {
        return prev;
      }
      return newFeatures;
    });
    setShowValidation(null);
  }, [planKey]);

  const featuresAvailable = FEATURES; 

  const pageExtras = useMemo(() => {
    const extraPages = Math.max(0, Math.floor(pages) - plan.includedPages);
    const hours = extraPages * plan.perPageHours;
    const price = extraPages * plan.perPagePrice;
    return { extraPages, hours, price };
  }, [pages, plan]);

  const featuresTotals = useMemo(() => {
    const selected = featuresAvailable.filter(f => selectedFeatures[f.id] && !(f.customOnly && planKey === 'standard'));
    const hours = selected.reduce((s, f) => s + f.hours, 0);
    const price = selected.reduce((s, f) => s + f.price, 0);
    return { selected, hours, price };
  }, [selectedFeatures, featuresAvailable, planKey]);

  const packsTotals = useMemo(() => {
    const selected = PACKS.filter(p => selectedPacks[p.id]);
    const hours = selected.reduce((s, p) => s + p.hours, 0);
    const price = selected.reduce((s, p) => s + p.price, 0);
    return { selected, hours, price };
  }, [selectedPacks]);

  const totals = useMemo(() => {
    const totalHours = plan.baseHours + pageExtras.hours + featuresTotals.hours + packsTotals.hours;
    const originalPrice = plan.basePrice + pageExtras.price + featuresTotals.price + packsTotals.price;
    const discountRate = plan.discountPercent / 100;
    const discountAmount = Math.round(originalPrice * discountRate);
    const finalPrice = Math.round(originalPrice - discountAmount);
    return {
      totalHours,
      originalPrice,
      discountAmount,
      finalPrice,
    };
  }, [plan, pageExtras, featuresTotals, packsTotals]);

  function toggleFeature(id: string) {
    setSelectedFeatures(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function togglePack(id: string) {
    setSelectedPacks(prev => ({ ...prev, [id]: !prev[id] }));
  }

  function onPagesChange(value: string) {
    const num = Number(value);
    if (Number.isNaN(num) || num < 1) {
      setPages(1);
      return;
    }
    if (num > 20) {
      setPages(20);
      setShowValidation('For projects of more than 20 pages, please contact the web design team.');
    } else {
      setShowValidation(null);
      setPages(Math.floor(num));
    }
  }

  const tailwindConfig = {
    theme: {
      extend: {
        colors: {
          neon: '#A8F000',
        },
      },
    },
  };

  return (
    <main className="min-h-screen text-gray-100 p-6 mt-24 md:p-12 font-sans">

      <style>{`
        :root { --color-neon: ${tailwindConfig.theme.extend.colors.neon}; }
        .bg-neon { background-color: var(--color-neon); }
        .text-neon { color: var(--color-neon); }
        .border-neon { border-color: var(--color-neon); }
        .accent-neon { accent-color: var(--color-neon); }
        .shadow-neon { box-shadow: 0 0 15px rgba(168, 240, 0, 0.5); }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <section className="lg:col-span-2 space-y-8">

          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold">Website calculator</h1>
            <div className="mt-2 -ml-1">
              <WavyLineIcon />
            </div>
            <p className="mt-4 text-gray-400">
              Use our calculator below to get an estimated cost for your web design project. This tool provides
              approximate pricing based on your selected requirements and serves as a starting point for
              planning your project. The results provided by this calculator are estimates only and do not
              constitute a binding commercial offer or final quote.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(Object.keys(PLANS) as PlanKey[]).map(key => (
              <button
                key={key}
                onClick={() => setPlanKey(key)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  planKey === key
                    ? 'bg-[#282828] border-neon shadow-neon'
                    : 'bg-[#282828] border-gray-700 hover:border-gray-500'
                }`}
              >
                <div className="font-bold text-xl">{PLANS[key].title}</div>
                <div className="text-sm text-gray-400 mt-2">{PLANS[key].description}</div>
              </button>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">
            Learn more about our <a href="#" className="font-semibold text-gray-300 underline">standard</a> or <a href="#" className="font-semibold text-gray-300 underline">custom</a> websites.
          </p>

          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Which extra features would you like to include?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuresAvailable.map(f => (
                <OptionToggle
                  key={f.id}
                  label={f.label}
                  checked={!!selectedFeatures[f.id]}
                  onChange={() => toggleFeature(f.id)}
                  disabled={f.customOnly && planKey === 'standard'}
                />
              ))}
            </div>
            <div className="bg-[#282828] p-4 rounded-lg text-sm text-gray-400">
              <p>The website app is included by default.</p>
              <p>For custom features that are not listed in this form, please <Link href="/contact" className="font-semibold text-gray-300 underline">contact the web design team</Link>.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-2xl">How many pages do you have?</h3>
            <div className="bg-[#282828] p-6 rounded-lg flex items-center gap-6">
              <input
                type="range"
                min={1}
                max={20}
                value={pages}
                onChange={(e) => onPagesChange(e.target.value)}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-neon"
              />
              <span className="text-2xl font-bold text-neon w-12 text-right">{pages}</span>
            </div>
            {showValidation && (
              <p className="text-yellow-300 text-sm">{showValidation}</p>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-2xl">Which packs would you like to add?</h3>
            <div className="space-y-4">
              {PACKS.map(pack => (
                <OptionToggle
                  key={pack.id}
                  label={pack.label}
                  description={pack.description}
                  checked={!!selectedPacks[pack.id]}
                  onChange={() => togglePack(pack.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:sticky lg:top-48 h-fit bg-gradient-to-br from-[#282828]/60 to-[#1a1a1a]/60 p-6 rounded-2xl border-2 border-gray-700 backdrop-blur-sm shadow-lg relative">

          <div className="absolute -top-6 -right-6 bg-neon text-black text-sm font-bold p-4 rounded-full w-24 h-24 flex items-center justify-center text-center -rotate-12 shadow-neon">
            15% off
            <br />
            for new customers
          </div>

          <h3 className="text-lg font-semibold text-gray-400 mb-2">TOTAL</h3>
          <div className="text-6xl font-bold mb-1">{totals.totalHours} Hours</div>
          <div className="text-5xl font-bold text-neon mb-2">{formatEuro(totals.finalPrice)}</div>

          <p className="text-sm text-gray-400 mb-6">15% discount included.</p>

          {/* Updated summary list */}
          <div className="mt-6 text-sm text-gray-300 border-t border-gray-700 pt-6">
            <h4 className="font-medium mb-3">Included in your pack:</h4>
            <ul className="space-y-2 text-gray-400">
              
              {plan.includedPack.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" stroke="#A8F000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16">
                    <path d="M13.3334 4L6.00002 11.3333L2.66669 8"/>
                  </svg>
                  {item}
                </li>
              ))}

              {packsTotals.selected.map(pack => (
                <li key={pack.id} className="flex items-center gap-2">
                  <svg width="16" height="16" fill="none" stroke="#A8F000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 16 16">
                    <path d="M13.3334 4L6.00002 11.3333L2.66669 8"/>
                  </svg>
                  {pack.label}
                </li>
              ))}

            </ul>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-neon hover:bg-opacity-90 text-black font-bold text-lg transition-all transform hover:scale-105">
              Discuss your project
              <ArrowRightIcon />
            </Link>
          </div>
        </aside>

      </div>
    </main>
  );
}
