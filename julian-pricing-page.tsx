import React, { useState } from 'react';
import { ChevronRight, Code, FileText, Calendar, Users, TrendingUp, Calculator, ExternalLink, Plus, Minus, ArrowLeft, Briefcase, Eye } from 'lucide-react';

export default function PricingPage() {
  const [serviceQuantities, setServiceQuantities] = useState({
    'linkedin-post': 0,
    'technical-article': 0,
    'content-pilot': 0
  });

  const workSamples = {
    posts: [
      { title: "Salesforce DevOps innovation", url: "https://www.linkedin.com/posts/juliandjoseph_oops-i-think-i-just-made-salesforce-devops-activity-7307869326047432704-LNzK" },
      { title: "AI Flow creation demo", url: "https://www.linkedin.com/posts/juliandjoseph_creating-a-salesforce-flow-using-ai-resslai-activity-7323828089480753152-3rhE" },
      { title: "ChatGPT Operator for SF", url: "https://www.linkedin.com/posts/juliandjoseph_i-asked-chatgpt-operator-to-do-a-salesforce-activity-7288638631202701312-U8mC" }
    ],
    articles: [
      { title: "Salesforce Inspector Guide", url: "https://www.salto.io/blog-posts/salesforce-inspector-reloaded-features" },
      { title: "Choosing DevOps Tools", url: "https://www.salto.io/blog-posts/choosing-the-right-salesforce-devops-tools" },
      { title: "AI Documentation for SF", url: "https://www.salto.io/blog-posts/ai-documentation-for-salesforce-teams-the-markdown-compromise" }
    ]
  };

  const services = [
    {
      id: 'linkedin-post',
      name: 'Sponsored LinkedIn Post',
      basePrice: 750,
      description: 'One post (copy + creative) crafted for your product or brand',
      icon: <Users className="w-5 h-5" />,
      unit: 'post',
      highlight: false
    },
    {
      id: 'technical-article',
      name: 'Technical Article',
      basePrice: 2000,
      description: '≈ 2-page deep dive that explains and positions your solution',
      icon: <FileText className="w-5 h-5" />,
      unit: 'article',
      highlight: false
    },
    {
      id: 'content-pilot',
      name: 'Two-Month Content Pilot',
      basePrice: 20000,
      description: '10 LinkedIn posts, 1 technical article, performance report, light founder-post guidance',
      icon: <Calendar className="w-5 h-5" />,
      unit: 'pilot',
      highlight: true
    }
  ];

  const pricingSources = [
    {
      text: 'Medium survey (Feb 2025): $200-$500/post for 10k-50k followers',
      url: 'https://medium.com/@ivanpalii/how-much-does-it-cost-to-hire-an-influencer-on-linkedin-42f88f594094'
    },
    {
      text: 'Shopify Influencer Report: B2B niches command premium rates',
      url: 'https://www.shopify.com/blog/influencer-pricing'
    },
    {
      text: 'Thibaut Souyris: $800-$1,500/post for 15k-30k LinkedIn followers',
      url: 'https://www.linkedin.com/posts/thibautsouyris_i-used-to-think-b2b-influencer-pricing-was-activity-7346507721132638208-MssC'
    }
  ];

  const updateQuantity = (serviceId, delta) => {
    setServiceQuantities(prev => ({
      ...prev,
      [serviceId]: Math.max(0, prev[serviceId] + delta)
    }));
  };

  const calculateBaseTotal = () => {
    return Object.entries(serviceQuantities).reduce((total, [serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service ? service.basePrice * quantity : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <a 
              href="https://julianjoseph-dev-ed.my.site.com/portfolio/s/" 
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:underline transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </a>
          </div>
        </div>
      </div>

            <div className="bg-gray-50 border-b border-gray-200">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
                <div className="flex flex-wrap gap-8 justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Followers</p>
                    <p className="text-3xl font-bold text-gray-900">24K+</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Avg. Reach/Post</p>
                    <p className="text-3xl font-bold text-gray-900">3K</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">SF Developers</p>
                    <p className="text-3xl font-bold text-gray-900">1K+</p>
                  </div>
                </div>
              </div>
            </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Work with Julian Joseph
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Salesforce DevOps Engineer - Developer Advocate
          </p>
        </div>

        {/* Work Samples - Compact */}
        <div className="mb-8 px-6 py-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-gray-700">Sample Work:</span>
              </div>
              <a
                href="https://julianjoseph-dev-ed.my.site.com/portfolio/s/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 hover:underline font-medium"
              >
                View All →
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-gray-600">LinkedIn:</span>
              {workSamples.posts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {post.title}
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-gray-600">Articles:</span>
              {workSamples.articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline"
                >
                  {article.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative p-6 rounded-xl border-2 transition-all ${
                serviceQuantities[service.id] > 0
                  ? 'border-blue-500 bg-blue-50'
                  : service.highlight
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                  POPULAR
                </div>
              )}
              
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${
                    serviceQuantities[service.id] > 0 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                <p className="text-3xl font-bold mb-3">
                  ${service.basePrice.toLocaleString()}
                  <span className="text-base font-normal text-gray-500">/{service.unit}</span>
                </p>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(service.id, -1)}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    disabled={serviceQuantities[service.id] === 0}
                    aria-label={`Decrease quantity for ${service.name}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold" aria-live="polite">
                    {serviceQuantities[service.id]}
                  </span>
                  <button
                    onClick={() => updateQuantity(service.id, 1)}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    aria-label={`Increase quantity for ${service.name}`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Hire Full-Time Option */}
          <div className="relative p-6 rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white hover:border-gray-300 transition-all">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gray-100 text-gray-600">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">Hire Me Full-Time</h3>
              </div>
              <p className="text-2xl font-bold mb-3">
                Let's Discuss
              </p>
              <p className="text-gray-600 mb-6">
                Looking for a dedicated Salesforce DevOps Engineer?
              </p>
            </div>
            
            <a
              href="https://calendly.com/julianjoseph/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 hover:underline text-white rounded-lg font-medium text-sm transition-colors"
            >
              Book a 30-min intro call
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Simple Calculator & Interview Link */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200 mb-12">
          {calculateBaseTotal() > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Calculator className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">Your Estimate</h2>
              </div>
              
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-600">Selected Services:</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ${calculateBaseTotal().toLocaleString()}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  {serviceQuantities['linkedin-post'] > 0 && (
                    <p>• {serviceQuantities['linkedin-post']} LinkedIn post{serviceQuantities['linkedin-post'] > 1 ? 's' : ''}</p>
                  )}
                  {serviceQuantities['technical-article'] > 0 && (
                    <p>• {serviceQuantities['technical-article']} technical article{serviceQuantities['technical-article'] > 1 ? 's' : ''}</p>
                  )}
                  {serviceQuantities['content-pilot'] > 0 && (
                    <p>• {serviceQuantities['content-pilot']} content pilot{serviceQuantities['content-pilot'] > 1 ? 's' : ''}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              If you're curious about my skillset specifically, feel free to interview me using my custom GPT
            </p>
            <a
              href="https://chatgpt.com/g/g-685c90ace82481918804e759a1fc3b2d-interview-julian-joseph"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors"
            >
              Interview Julian Joseph's GPT
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Pricing Context */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-12">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            Industry Pricing Context
          </h3>
          <div className="space-y-3">
            {pricingSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm group"
              >
                <span className="text-gray-600">•</span>
                <span className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  {source.text}
                </span>
                <ExternalLink className="w-3 h-3 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </a>
            ))}
            <p className="text-sm text-gray-600 mt-3 pt-3 border-t border-gray-200">
              • My rates reflect specialized Salesforce DevOps expertise & highly engaged, targeted audience
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://calendly.com/julianjoseph/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Book a 30-min intro call
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}