import React from 'react';
import { notFound } from 'next/navigation';
import { Star, Quote, UserRound, ArrowLeft } from 'lucide-react';
import { successStoryCategories } from '@/lib/successStoriesData';
import Link from 'next/link';

// Generate static params for all the routes based on the defined categories
export function generateStaticParams() {
  return successStoryCategories.map((category) => ({
    type: category.slug,
  }));
}

// Generate SEO Metadata for the specific category
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = successStoryCategories.find((c) => c.slug === resolvedParams.type);
  
  if (!category) return {};

  return {
    title: `${category.title} | Pravi Global IVF`,
    description: category.description,
    openGraph: {
      title: `${category.title} | Pravi Global IVF`,
      description: category.description,
    },
  };
}

export default async function SuccessStoryDynamicPage({ params }) {
  const resolvedParams = await params;
  const category = successStoryCategories.find(c => c.slug === resolvedParams.type);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-8">
          <Link href="/success-stories" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Stories
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">{category.title}</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
             {category.description}
          </p>
        </div>

        {/* Testimonials Grid (Cards without sliders) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-2xl transition-all duration-300 relative border border-slate-100 flex flex-col h-full group">
              
              {/* Decorative Quote Icon Background */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-50 opacity-50 rotate-180 group-hover:text-teal-50 transition-colors" />
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-slate-700 italic flex-grow mb-10 relative z-10 leading-relaxed text-lg sm:text-xl">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              {/* Patient Info Footer */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <UserRound className="w-7 h-7 text-teal-700" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm font-medium text-slate-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-slate-100">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to start your journey?</h2>
           <p className="text-slate-600 text-lg mb-8">Consult with our expert doctors to understand your best treatment options.</p>
           <Link href="/book-appointment" className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition shadow-md hover:shadow-lg">
              Book a Consultation
           </Link>
        </div>
      </div>
    </div>
  );
}
