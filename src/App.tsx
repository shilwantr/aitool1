/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Search, Zap, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600">
            <Bot className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">All AI Tools</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-indigo-600 transition-colors">Directory</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Submit Tool</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Guides</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl mb-6">
            Discover the Best <span className="text-indigo-600">AI Tools & GPTs</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Your fast, reliable, and continuously updated directory for artificial intelligence tools, chatbots, and productivity boosters.
          </p>
          
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-lg shadow-sm transition-shadow"
              placeholder="Search for tools (e.g., Image Generation, Coding...)"
            />
            <button className="absolute inset-y-1.5 right-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full px-6 py-2 transition-colors">
              Search
            </button>
          </div>
        </section>

        <section className="bg-white py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Why use aallaitools.online?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Optimized for extreme performance and fast loading speeds to get you the tools you need instantly.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
                <p className="text-gray-600">Built with modern SEO standards to help discoverability across all major search engines and GPTs.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive</h3>
                <p className="text-gray-600">A meticulously curated directory covering everything from generative text to advanced automation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} aallaitools.online. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
