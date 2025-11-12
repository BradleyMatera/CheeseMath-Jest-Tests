import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BasicCalculator from '@/components/BasicCalculator';
import AdvancedCalculator from '@/components/AdvancedCalculator';
import RegexAnalyzer from '@/components/RegexAnalyzer';
import CardObscurer from '@/components/CardObscurer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Calculator Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section id="basic">
          <BasicCalculator />
        </section>

        <section id="advanced">
          <AdvancedCalculator />
        </section>

        <section id="regex">
          <RegexAnalyzer />
        </section>

        <section id="card">
          <CardObscurer />
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-divider mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-2xl">
              <span>🧀</span>
              <span className="font-bold">CheeseMath</span>
            </div>
            <p className="text-sm text-foreground/60">
              Built with Next.js 16, TypeScript, Tailwind CSS, and NextUI
            </p>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Bradley Matera. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
