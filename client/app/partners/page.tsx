"use client";

import { useState, useEffect } from "react";
import { Menu, X, DollarSign, TrendingUp, Users, Zap, Award, Target, Briefcase, Phone, Mail, CheckCircle, ArrowRight, Star, Gift, Percent, Clock, MapPin, ChevronDown, ChevronUp, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FooterSection } from "../components/FooterSection";
import LoginPopup from "../components/loginpopup";
import { GetPartner } from "../api";

export default function PartnersPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState<string | undefined>(undefined);
  const router = useRouter();

  const isLoggedIn = () => {
    return document.cookie.includes("token=");
  };

  const handlePartnerClick = async () => {
    if (!isLoggedIn()) {
      setIsLoginPopupOpen(true);
      setRedirectPath("/partnerSignup/1");
      return;
    }

    try {
      const response = await GetPartner();
      if (response.data) {
        router.push("/partnerProfile");
      } else {
        router.push("/partnerSignup/1");
      }
    } catch (error) {
      console.error("Error checking partner status:", error);
      router.push("/partnerSignup/1");
    }
  };

  const earningHighlights = [
    {
      icon: DollarSign,
      title: "Earn Per Business",
      value: "💰",
      description: "Get rewarded for every business you onboard"
    },
    {
      icon: TrendingUp,
      title: "Unlimited Potential",
      value: "∞",
      description: "The more you bring, the more you earn"
    },
    {
      icon: Clock,
      title: "Regular Payouts",
      value: "⏱️",
      description: "Consistent payment schedule"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Commissions",
      description: "Get rewarded for every business you onboard. Unlimited earning potential!"
    },
    {
      icon: Clock,
      title: "Flexible Working",
      description: "Work at your own pace, set your own hours. Perfect for part-time or full-time income."
    },
    {
      icon: Target,
      title: "Easy to Sell",
      description: "Every business needs online presence. Our proven pitch makes selling simple."
    },
    {
      icon: Zap,
      title: "Quick Onboarding",
      description: "Get businesses live in minutes. Our simple process means faster commissions."
    },
    {
      icon: Award,
      title: "Performance Bonuses",
      description: "Extra rewards for top performers. Monthly incentives and exclusive perks."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager and 24/7 support to help you succeed."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sign Up as Partner",
      description: "Register with your details and get instant access to your partner dashboard and marketing materials.",
      icon: Briefcase
    },
    {
      step: "2",
      title: "Find Local Businesses",
      description: "Approach businesses in your area - salons, restaurants, mechanics, shops, and service providers.",
      icon: MapPin
    },
    {
      step: "3",
      title: "Show Them the Value",
      description: "Demonstrate how Gigwork helps them get more customers through WhatsApp and online visibility.",
      icon: TrendingUp
    },
    {
      step: "4",
      title: "Help Them Sign Up",
      description: "Assist with profile creation, photo upload, and payment. We make it super easy!",
      icon: Users
    },
    {
      step: "5",
      title: "Earn Commission",
      description: "Get rewarded as soon as the business completes their registration. Start earning today!",
      icon: DollarSign
    }
  ];

  const perks = [
    "🎯 Exclusive Partner Dashboard",
    "📱 Marketing Materials & Scripts",
    "🏆 Monthly Performance Rewards",
    "📊 Real-time Earnings Tracking",
    "🎓 Free Sales Training",
    "💰 Weekly Payouts",
    "🎁 Referral Bonuses",
    "⚡ Priority Support"
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Kochi",
      businesses: "30+",
      quote: "I started as a part-time partner while doing my regular job. The flexible earning opportunity has been amazing!",
      rating: 5
    },
    {
      name: "Priya Menon",
      location: "Thrissur",
      businesses: "20+",
      quote: "Being a Gigwork partner gave me financial independence. I work flexible hours and help local businesses grow.",
      rating: 5
    },
    {
      name: "Arun Pillai",
      location: "Kozhikode",
      businesses: "45+",
      quote: "Best decision I made! The earning structure is transparent and payments are always on time. Highly recommend!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How much can I earn as a Gigwork partner?",
      answer: "You earn a commission for every business you successfully onboard. There's no limit to how many businesses you can bring or how much you can earn. The more you help, the more you earn!"
    },
    {
      question: "Do I need any prior experience?",
      answer: "No prior experience needed! We provide complete training, sales scripts, marketing materials, and ongoing support. If you can talk to people and have basic smartphone skills, you can succeed as a partner."
    },
    {
      question: "How and when do I get paid?",
      answer: "Start earning as soon as you onboard businesses. We process payouts weekly directly to your bank account. Simple, fast, and transparent."
    },
    {
      question: "Is there any registration fee or investment required?",
      answer: "No! Registration is completely FREE. There are no hidden charges, no inventory to maintain, and no upfront investment needed. You start earning from day one."
    },
    {
      question: "What kind of businesses can I approach?",
      answer: "Any local business! Salons, restaurants, plumbers, electricians, mechanics, tutors, photographers, boutiques, gyms, clinics - any service provider or shop that wants more customers."
    },
    {
      question: "Can I do this part-time?",
      answer: "Absolutely! Many of our successful partners work part-time. You set your own schedule and work at your own pace. Whether it's 2 hours or 8 hours a day, it's completely up to you."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-bold">
            <Image
              src="/assets/media/gigworksblk.svg"
              alt="Logo"
              width={150}
              height={50}
              className="max-w-[206px] max-h-[216px]"
            />
          </Link>
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                PARTNERS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 transition">
                Home
              </a>
              <a href="/business" className="text-gray-700 hover:text-green-600 transition">
                For Business
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-green-600 transition">
                Benefits
              </a>
              <a href="#earnings" className="text-gray-700 hover:text-green-600 transition">
                Earnings
              </a>
              <button 
                onClick={handlePartnerClick}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 font-semibold"
              >
                Become a Partner
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 transition"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-green-600 transition">
                  Home
                </a>
                <a href="/business" className="text-gray-700 hover:text-green-600 transition">
                  For Business
                </a>
                <a href="#benefits" className="text-gray-700 hover:text-green-600 transition">
                  Benefits
                </a>
                <a href="#earnings" className="text-gray-700 hover:text-green-600 transition">
                  Earnings
                </a>
                <button 
                  onClick={handlePartnerClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 w-full font-semibold"
                >
                  Become a Partner
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              🚀 Unlimited Earning Opportunity
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Start Earning with <span className="text-green-600">Gigwork</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Kerala's fastest-growing partner program. Help local businesses go online and earn income on your own terms.
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/PrGo4OFz-dg"
                  title="Gigwork Partner Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600">
                <PlayCircle className="inline mr-2" size={20} />
                Watch our complete tutorial to get started
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={handlePartnerClick}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Join as Partner Now
                <ArrowRight className="ml-2" size={20} />
              </button>
              <a
                href="#benefits"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 rounded-lg transition duration-300 text-lg font-semibold"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>No Investment Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Work From Anywhere</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Regular Payouts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">Growing</div>
              <div className="text-green-100 text-sm md:text-base">Partner Network</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">Easy</div>
              <div className="text-green-100 text-sm md:text-base">Onboarding Process</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">Regular</div>
              <div className="text-green-100 text-sm md:text-base">Earning Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Earning Highlights */}
      <section id="earnings" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Why <span className="text-green-600">Partner With Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible earning opportunity with unlimited potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {earningHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{item.value}</div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 shadow-lg">
              <p className="text-2xl font-bold mb-2">
                � Grow Your Income
              </p>
              <p className="text-green-100">
                The more businesses you help, the more you earn. Start your journey today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Why Partner with <span className="text-green-600">Gigwork?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            How It <span className="text-green-600">Works</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Start earning in 5 simple steps. We've made it incredibly easy for you to succeed!
          </p>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-green-200 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {howItWorks.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center flex flex-col">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex-1 flex flex-col">
                      <div className="text-green-600 font-bold text-sm mb-2">STEP {step.step}</div>
                      <h3 className="text-lg font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm flex-1">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Exclusive <span className="text-green-600">Partner Perks</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-3"
              >
                <div className="text-2xl">{perk.split(" ")[0]}</div>
                <div className="text-gray-700 font-medium">{perk.substring(perk.indexOf(" ") + 1)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Success <span className="text-green-600">Stories</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">Hear from our top-performing partners across Kerala</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="mt-3">
                    <div className="text-xs text-gray-500">Businesses Onboarded</div>
                    <div className="text-green-600 font-bold text-xl">{testimonial.businesses}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-green-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join 500+ partners already earning with Gigwork. Register now and start making money today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handlePartnerClick}
              className="bg-white hover:bg-gray-100 text-green-600 px-12 py-5 rounded-lg transition duration-300 text-xl font-bold shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              Register as Partner
              <ArrowRight className="ml-2" size={24} />
            </button>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-5 rounded-lg transition duration-300 text-xl font-bold inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={24} />
              Call Us Now
            </a>
          </div>
          <p className="text-green-100">
            💰 Start earning from your first business • ⚡ Instant partner approval
          </p>
        </div>
      </section>

      {/* Login Popup */}
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => {
          setIsLoginPopupOpen(false);
          setRedirectPath(undefined);
        }}
      />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}