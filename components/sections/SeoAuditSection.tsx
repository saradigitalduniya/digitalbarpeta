'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Globe,
  Gauge,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface AuditMetrics {
  url: string;
  performance: number;
  seoScore: number;
  mobileScore: number;
  securityScore: number;
  recommendations: string[];
}

export const SeoAuditSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [auditResult, setAuditResult] = useState<AuditMetrics | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scanSteps = [
    'Connecting to website host & verifying SSL certificates...',
    'Inspecting HTML structure, canonical tags & meta descriptions...',
    'Measuring Core Web Vitals (LCP, CLS, INP) & asset payload...',
    'Compiling performance diagnostic & actionable roadmap...',
  ];

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic URL validation
    let cleanUrl = url.trim();
    if (!cleanUrl) {
      setError('Please enter a website URL to begin the audit.');
      return;
    }

    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    try {
      new URL(cleanUrl);
    } catch {
      setError('Please enter a valid website address (e.g., yourcompany.com).');
      return;
    }

    setIsScanning(true);
    setAuditResult(null);
    setScanStep(0);

    // Simulated 4-stage diagnostic scan
    const interval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsScanning(false);
          // Set dynamic diagnostic result
          setAuditResult({
            url: cleanUrl,
            performance: Math.floor(Math.random() * 22) + 68, // 68 - 90
            seoScore: Math.floor(Math.random() * 20) + 72,    // 72 - 92
            mobileScore: Math.floor(Math.random() * 18) + 78,  // 78 - 96
            securityScore: 94,
            recommendations: [
              'Image payload optimization could improve LCP by ~1.2 seconds',
              'Missing OpenGraph social card metadata on primary landing pages',
              'Structured Schema markup (LocalBusiness/Organization) not fully configured',
              'Google Business Profile integration requires citation synchronization',
            ],
          });
          return prev;
        }
      });
    }, 900);
  };

  const handleReset = () => {
    setUrl('');
    setAuditResult(null);
    setError(null);
    setIsScanning(false);
  };

  return (
    <section id="audit" className="relative py-24 bg-background border-t border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-green/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="FREE INSTANT SCANNER"
          title="WHAT'S HOLDING YOUR WEBSITE BACK?"
          subtitle="Get a quick look at your website's digital health and discover opportunities for improvement."
          align="center"
        />

        {/* Interactive Audit Engine Box */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-brand-green/40 shadow-glow-green-lg relative overflow-hidden">
          
          {!auditResult && !isScanning && (
            <form onSubmit={handleAuditSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-green" />
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="ENTER YOUR WEBSITE URL (e.g. yourcompany.com)"
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-dark-green/70 border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green text-sm font-medium tracking-wide"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto px-8 py-4 text-xs uppercase tracking-wider font-bold whitespace-nowrap shadow-glow-green"
                >
                  <Search className="w-4 h-4" />
                  <span>GET FREE SEO AUDIT</span>
                </button>
              </div>

              {error && (
                <p className="text-xs text-red-400 font-mono flex items-center gap-1.5 pl-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              )}

              <p className="text-[11px] text-brand-muted font-mono text-center pt-2">
                🔒 100% Free &amp; Instant Diagnostic • No credit card required • Future API ready
              </p>
            </form>
          )}

          {/* Scanning Progress State */}
          <AnimatePresence>
            {isScanning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-center flex flex-col items-center justify-center space-y-6"
              >
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-brand-green/20 border-t-brand-green animate-spin" />
                  <div className="absolute inset-2 rounded-full border-4 border-brand-blue/20 border-b-brand-blue animate-spin" style={{ animationDirection: 'reverse' }} />
                  <div className="w-full h-full flex items-center justify-center text-brand-green">
                    <Search className="w-8 h-8 animate-pulse" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white">
                    Auditing <span className="text-brand-green font-mono">{url}</span>
                  </h4>
                  <p className="text-xs text-brand-muted mt-2 font-mono h-6 transition-all">
                    {scanSteps[scanStep]}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full max-w-md h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-green via-brand-blue to-emerald-400 rounded-full"
                    initial={{ width: '5%' }}
                    animate={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scan Results State */}
          <AnimatePresence>
            {auditResult && !isScanning && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-mono text-brand-green">DIAGNOSTIC REPORT FOR:</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-mono break-all">
                      {auditResult.url}
                    </h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="btn-secondary text-xs py-2 px-4 flex items-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Audit Another URL</span>
                  </button>
                </div>

                {/* 4 Diagnostic Score Gauges */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Gauge 1: Performance */}
                  <div className="bg-dark-green/60 border border-brand-green/30 p-4 rounded-2xl text-center">
                    <Gauge className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {auditResult.performance}
                      <span className="text-xs text-brand-muted font-normal">/100</span>
                    </div>
                    <p className="text-[11px] font-mono text-brand-muted mt-1 uppercase">Performance</p>
                  </div>

                  {/* Gauge 2: SEO */}
                  <div className="bg-dark-green/60 border border-brand-green/30 p-4 rounded-2xl text-center">
                    <Search className="w-5 h-5 text-brand-green mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-black text-brand-green">
                      {auditResult.seoScore}
                      <span className="text-xs text-brand-muted font-normal">/100</span>
                    </div>
                    <p className="text-[11px] font-mono text-brand-muted mt-1 uppercase">SEO Health</p>
                  </div>

                  {/* Gauge 3: Mobile UX */}
                  <div className="bg-dark-green/60 border border-brand-green/30 p-4 rounded-2xl text-center">
                    <Smartphone className="w-5 h-5 text-brand-purple mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      {auditResult.mobileScore}
                      <span className="text-xs text-brand-muted font-normal">/100</span>
                    </div>
                    <p className="text-[11px] font-mono text-brand-muted mt-1 uppercase">Mobile UX</p>
                  </div>

                  {/* Gauge 4: Security */}
                  <div className="bg-dark-green/60 border border-brand-green/30 p-4 rounded-2xl text-center">
                    <ShieldCheck className="w-5 h-5 text-brand-green-bright mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-black text-brand-green-bright">
                      {auditResult.securityScore}
                      <span className="text-xs text-brand-muted font-normal">/100</span>
                    </div>
                    <p className="text-[11px] font-mono text-brand-muted mt-1 uppercase">SSL Security</p>
                  </div>
                </div>

                {/* Actionable Suggestions */}
                <div className="bg-background-secondary/80 border border-white/10 rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-brand-green" />
                    Key High-Priority Improvement Areas:
                  </h4>
                  <ul className="space-y-2.5">
                    {auditResult.recommendations.map((rec) => (
                      <li key={rec} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conversion Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-dark-green/80 border border-brand-green/40 p-6 rounded-2xl">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Ready to fix these issues and rank #1?
                    </h4>
                    <p className="text-xs text-brand-muted mt-0.5">
                      Let our engineering and SEO team execute a complete overhaul.
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="btn-primary text-xs uppercase tracking-wider py-3 px-6 whitespace-nowrap"
                  >
                    <span>CLAIM FULL EXPERT AUDIT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
