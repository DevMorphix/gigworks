"use client";

import { useState } from "react";
import { Menu, X, Play, CheckCircle, Users, Globe, Smartphone, TrendingUp, Settings, Share2, ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FooterSection } from "../components/FooterSection";
import LoginPopup from "../components/loginpopup";

export default function TutorialPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState<string | undefined>(undefined);
  const router = useRouter();

  const isLoggedIn = () => {
    return document.cookie.includes("token=");
  };

  const handleJoinClick = () => {
    if (!isLoggedIn()) {
      setIsLoginPopupOpen(true);
      setRedirectPath("/signup");
    } else {
      const profile = localStorage.getItem("profile");
      if (profile) {
        const { slug } = JSON.parse(profile);
        router.push(`/${slug}`);
      } else {
        router.push("/signup");
      }
    }
  };

  const tutorialSteps = [
    {
      step: "1",
      title: "Sign Up & Login",
      description: "Create your Gigwork account using your phone number. You'll receive an OTP for verification.",
      details: [
        "Click on 'Get Started' button",
        "Enter your phone number",
        "Verify with OTP sent to your phone",
        "Complete your basic profile"
      ],
      icon: Smartphone
    },
    {
      step: "2",
      title: "Business Information",
      description: "Fill in your business details to create your professional profile.",
      details: [
        "Enter your business name and category",
        "Add your business description",
        "Set your operating hours",
        "Add your location and service areas"
      ],
      icon: Settings
    },
    {
      step: "3",
      title: "Add Photos & Portfolio",
      description: "Showcase your work with high-quality images that attract customers.",
      details: [
        "Upload your business logo",
        "Add photos of your work/products",
        "Create a portfolio gallery",
        "Add before/after images if applicable"
      ],
      icon: Globe
    },
    {
      step: "4",
      title: "WhatsApp Integration",
      description: "Connect your WhatsApp number to enable direct customer communication.",
      details: [
        "Add your business WhatsApp number",
        "Customize your WhatsApp greeting message",
        "Enable quick response templates",
        "Set up automated replies (optional)"
      ],
      icon: Users
    },
    {
      step: "5",
      title: "Payment & Go Live",
      description: "Complete your subscription payment and publish your business profile.",
      details: [
        "Choose your subscription plan",
        "Complete secure payment (₹1500/month)",
        "Review your profile preview",
        "Click 'Publish' to go live instantly"
      ],
      icon: TrendingUp
    },
    {
      step: "6",
      title: "Share & Promote",
      description: "Start promoting your business using your unique profile link and QR code.",
      details: [
        "Download your custom QR code",
        "Share your profile link on social media",
        "Add to your business cards",
        "Start receiving customer inquiries!"
      ],
      icon: Share2
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Professional Web Presence",
      description: "Get a beautiful, mobile-optimized business profile that showcases your services 24/7"
    },
    {
      icon: Users,
      title: "Direct Customer Connect",
      description: "Let customers reach you instantly via WhatsApp - the platform they trust and use daily"
    },
    {
      icon: TrendingUp,
      title: "Boost Your Visibility",
      description: "Appear in search results when customers look for services in your category and location"
    },
    {
      icon: Smartphone,
      title: "Easy to Manage",
      description: "Update your business info, photos, and hours anytime from your phone or computer"
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
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-green-600 transition">
                Home
              </a>
              <a href="/explore" className="text-gray-700 hover:text-green-600 transition">
                Explore
              </a>
              <a href="/business" className="text-gray-700 hover:text-green-600 transition">
                For Business
              </a>
              <a href="/faqs" className="text-gray-700 hover:text-green-600 transition">
                FAQs
              </a>
              <button 
                onClick={handleJoinClick}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Create Profile
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
                <a href="/explore" className="text-gray-700 hover:text-green-600 transition">
                  Explore
                </a>
                <a href="/partners" className="text-gray-700 hover:text-green-600 transition">
                  For Partners
                </a>
                <a href="/faqs" className="text-gray-700 hover:text-green-600 transition">
                  FAQs
                </a>
                <button 
                  onClick={handleJoinClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 w-full"
                >
                  Create Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              📚 Complete Setup Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              How to Create Your <span className="text-green-600">Business Profile</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Follow our step-by-step tutorial to get your business online in just 10 minutes. Watch the video or read the guide below.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="pb-12 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/47zmJBG0oCo"
                title="Gigwork Tutorial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={handleJoinClick}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Create Your Profile
                <ArrowRight className="ml-2" size={20} />
              </button>
              <a
                href="#benefits"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 rounded-lg transition duration-300 text-lg font-semibold"
              >
                Learn More
              </a>
            </div>
            {/* <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Grow your business</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Touch on the client</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500" size={20} />
                <span>Increse you cash flow</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      

      {/* Quick Benefits */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Businesses Love Gigwork
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step-by-Step Tutorial */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Step-by-Step Setup Guide
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Follow these simple steps to create your professional business profile and start connecting with customers today.
          </p>

          <div className="space-y-8">
            {tutorialSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive ? 'border-green-500 shadow-lg' : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <button
                    onClick={() => setActiveStep(isActive ? -1 : index)}
                    className="w-full p-6 md:p-8 flex items-start gap-6 text-left"
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-green-600' : 'bg-gray-100'
                      }`}>
                        <span className={`text-2xl font-bold ${
                          isActive ? 'text-white' : 'text-gray-700'
                        }`}>
                          {step.step}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">
                            {step.description}
                          </p>
                        </div>
                        <Icon className={`flex-shrink-0 ${
                          isActive ? 'text-green-600' : 'text-gray-400'
                        }`} size={32} />
                      </div>
                    </div>
                  </button>

                  {isActive && (
                    <div className="px-6 md:px-8 pb-8 md:pl-32">
                      <div className="bg-green-50 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">What you need to do:</h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pro Tips for Success
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="font-bold text-lg mb-2">Quality Photos</h3>
                <p className="text-sm text-green-50">Use clear, well-lit photos that showcase your best work</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-bold text-lg mb-2">Detailed Info</h3>
                <p className="text-sm text-green-50">Complete all fields to build trust with potential customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-sm text-green-50">Reply fast to WhatsApp inquiries to convert more leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses already growing with Gigwork. Create your profile today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleJoinClick}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg transition duration-300 text-lg font-semibold inline-flex items-center justify-center"
            >
              Create Your Profile
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-4 rounded-lg transition duration-300 text-lg font-semibold">
              View Pricing
            </button>
          </div>
          <p className="text-gray-500 mt-4">⭐ Special Offer: ₹1500/month (40% OFF) • No Setup Fees</p>
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