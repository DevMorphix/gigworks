"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  MessageCircle,
  Phone,
  Instagram,
  Globe,
} from "lucide-react";
import { FooterSection } from "../components/FooterSection";
import Image from "next/image";
import Navbar from "../components/navSection";


// Navbar Component
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Image
//               src="/assets/media/gigworksblk.svg"
//               alt="Logo"
//               width={150}
//               height={50}
//               className="max-w-[206px] max-h-[216px]"
//             />
//           </div>

//           <div className="hidden md:flex space-x-8">
//             <a
//               href="/"
//               className="text-gray-700 hover:text-green-600 transition"
//             >
//               Home
//             </a>
//             <a
//               href="https://blog.gigwork.co.in"
//               className="text-gray-700 hover:text-green-600 transition"
//             >
//               Blog
//             </a>
//             <a
//               href="/#about"
//               className="text-gray-700 hover:text-green-600 transition"
//             >
//               About
//             </a>
//             <a href="/faqs" className="text-green-600 font-semibold">
//               FAQ
//             </a>
//             <a
//               href="/contact"
//               className="text-gray-700 hover:text-green-600 transition"
//             >
//               Contact
//             </a>
//           </div>

//           <div className="hidden md:block">
//             <a
//               href="https://wa.me/918590012027"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition flex items-center gap-2"
//             >
//               <MessageCircle size={18} />
//               Chat Now
//             </a>
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700"
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {isOpen && (
//           <div className="md:hidden pb-4">
//             <a
//               href="/"
//               className="block py-2 text-gray-700 hover:text-green-600"
//             >
//               Home
//             </a>
//             <a
//               href="/services"
//               className="block py-2 text-gray-700 hover:text-green-600"
//             >
//               Services
//             </a>
//             <a
//               href="/about"
//               className="block py-2 text-gray-700 hover:text-green-600"
//             >
//               About
//             </a>
//             <a href="/faq" className="block py-2 text-green-600 font-semibold">
//               FAQ
//             </a>
//             <a
//               href="/contact"
//               className="block py-2 text-gray-700 hover:text-green-600"
//             >
//               Contact
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white mt-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold text-green-500 mb-4">Gigwork</h3>
//             <p className="text-gray-400 text-sm">
//               Kerala's WhatsApp-based service directory connecting you with verified professionals 24/7.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li><a href="/" className="text-gray-400 hover:text-green-500 transition">Home</a></li>
//               <li><a href="/services" className="text-gray-400 hover:text-green-500 transition">Services</a></li>
//               <li><a href="/about" className="text-gray-400 hover:text-green-500 transition">About Us</a></li>
//               <li><a href="/faq" className="text-gray-400 hover:text-green-500 transition">FAQ</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Services</h4>
//             <ul className="space-y-2 text-sm">
//               <li className="text-gray-400">Electricians</li>
//               <li className="text-gray-400">Plumbers</li>
//               <li className="text-gray-400">AC Technicians</li>
//               <li className="text-gray-400">Mechanics</li>
//               <li className="text-gray-400">Cleaning Services</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center gap-2 text-gray-400">
//                 <MessageCircle size={16} />
//                 <a href="https://wa.me/918590012027" className="hover:text-green-500">+91 85900 12027</a>
//               </li>
//               <li className="flex items-center gap-2 text-gray-400">
//                 <Phone size={16} />
//                 <a href="tel:+917306104563" className="hover:text-green-500">+91 73061 04563</a>
//               </li>
//               <li className="flex items-center gap-2 text-gray-400">
//                 <Globe size={16} />
//                 <a href="https://gigwork.co.in" className="hover:text-green-500">gigwork.co.in</a>
//               </li>
//               <li className="flex items-center gap-2 text-gray-400">
//                 <Instagram size={16} />
//                 <a href="https://instagram.com/gigwork.co.in" className="hover:text-green-500">@gigwork.co.in</a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Gigwork. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggle }: FAQItemProps) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden hover:shadow-md transition">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-green-600 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-5 bg-gray-50 border-t border-gray-200">
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "about", name: "About Gigwork" },
    { id: "usage", name: "How It Works" },
    { id: "services", name: "Services & Coverage" },
    { id: "trust", name: "Trust & Verification" },
    { id: "providers", name: "For Providers" },
    { id: "payment", name: "Payment & Pricing" },
    { id: "safety", name: "Safety & Privacy" },
  ];

  const faqs = [
    {
      category: "about",
      question: "Is it Gigwork or Gig Work?",
      answer:
        'It\'s Gigwork (one word)! But whether you search for "Gig Work", "Gigworks", or "Gigwork Kerala", you\'ll find us. We\'re Kerala\'s WhatsApp-based service directory that helps you discover verified electricians, plumbers, AC repair technicians, and more—instantly, without any app downloads.',
    },
    {
      category: "about",
      question: "What is Gigwork?",
      answer:
        "Gigwork is India's first WhatsApp-based business directory that connects you with verified local service providers. Need an electrician at midnight? A plumber on a holiday? Just message us on WhatsApp, and we'll help you find trusted professionals in your area—24/7, no app needed.",
    },
    {
      category: "about",
      question: "Why did Gigwork choose WhatsApp instead of creating an app?",
      answer:
        "Because everyone already knows WhatsApp! We believe service discovery should be instant and effortless. With WhatsApp:<ul class='list-disc ml-5 mt-2 space-y-1'><li><strong>No downloads</strong> – Start using Gigwork in seconds</li><li><strong>No learning curve</strong> – You already know how to use it</li><li><strong>Works everywhere</strong> – Even on basic phones and slow networks</li><li><strong>Instant communication</strong> – Direct chat with providers</li><li><strong>More trusted</strong> – People feel safer on WhatsApp than on an unknown app</li></ul>",
    },
    {
      category: "usage",
      question: "How do I use Gigwork?",
      answer:
        "It's simple:<ol class='list-decimal ml-5 mt-2 space-y-1'><li>Message us on WhatsApp at <strong>+91 85900 12027</strong></li><li>Tell us what service you need (e.g., \"Need an electrician in Kottayam\")</li><li>Get verified provider details instantly</li><li>Contact the provider directly and book your service</li></ol>That's it! No registration, no forms, no complications.",
    },
    {
      category: "usage",
      question: "Is Gigwork available 24/7?",
      answer:
        "Yes! Our WhatsApp chatbot works 24 hours a day, 7 days a week—including nights, weekends, and holidays. Whether you need help at 3 AM or on Christmas Day, Gigwork is always ready to connect you with service providers.",
    },
    {
      category: "usage",
      question: "Do I need to install any apps?",
      answer:
        "No! That's the whole point. Gigwork works entirely through WhatsApp, which you already have on your phone. Just save our number <strong>(+91 85900 12027)</strong> and start chatting.",
    },
    {
      category: "usage",
      question: "Is Gigwork free to use?",
      answer:
        "Yes, absolutely! Finding and discovering service providers through Gigwork is completely free for customers. You only pay the service provider directly for the actual service you book.",
    },
    {
      category: "services",
      question: "What services are available on Gigwork?",
      answer:
        "We help you find verified professionals across multiple categories:<ul class='list-disc ml-5 mt-2 space-y-1'><li><strong>Electricians</strong> – Wiring, repairs, installations</li><li><strong>Plumbers</strong> – Pipe repairs, bathroom fixes, water leaks</li><li><strong>AC Technicians</strong> – AC repair, servicing, installation</li><li><strong>Mechanics</strong> – Vehicle repairs and maintenance</li><li><strong>Cleaning Services</strong> – Home and office cleaning</li><li><strong>And more</strong> – We're constantly adding new service categories</li></ul>",
    },
    {
      category: "services",
      question: "Which areas does Gigwork cover?",
      answer:
        "Currently, Gigwork covers all major cities and districts across Kerala, including Kottayam, Kochi (Ernakulam), Thiruvananthapuram, Kozhikode, Thrissur, Kannur, Kollam, Palakkad, and more locations across Kerala.",
    },
    {
      category: "services",
      question: "Can I get service during emergencies or odd hours?",
      answer:
        "Absolutely! That's one of Gigwork's core strengths. Whether it's a midnight electrical emergency, a holiday plumbing disaster, or a weekend AC breakdown, we help you find providers who can assist even during odd hours.",
    },
    {
      category: "trust",
      question: "Are the service providers verified?",
      answer:
        "Yes! Every service provider listed on Gigwork goes through our verification process. We check their credentials, experience, and reliability to ensure you get trustworthy professionals—not random contacts.",
    },
    {
      category: "trust",
      question: "How does Gigwork verify service providers?",
      answer:
        "We verify providers through:<ul class='list-disc ml-5 mt-2 space-y-1'><li><strong>Identity verification</strong> – Confirming their business credentials</li><li><strong>Experience check</strong> – Reviewing their work history</li><li><strong>Quality assessment</strong> – Evaluating their service standards</li><li><strong>Background screening</strong> – Ensuring reliability and professionalism</li></ul>",
    },
    {
      category: "trust",
      question: "What if I'm not satisfied with a service provider?",
      answer:
        "Your satisfaction matters! If you face any issues with a service provider recommended by Gigwork, please contact our customer support at <strong>+91 73061 04563</strong>. We take feedback seriously and continuously work to maintain high-quality standards.",
    },
    {
      category: "providers",
      question: "How can I register as a service provider on Gigwork?",
      answer:
        "Joining Gigwork is simple:<ol class='list-decimal ml-5 mt-2 space-y-1'><li>Message us on WhatsApp at <strong>+91 85900 12027</strong></li><li>Tell us about your service (electrician, plumber, AC technician, etc.)</li><li>Share your location (which area/city in Kerala you serve)</li><li>Complete our verification process</li><li>Start receiving leads and get connected with customers</li></ol>The entire process typically takes 24-48 hours.",
    },
    {
      category: "providers",
      question: "How do service providers receive customer requests?",
      answer:
        "Once you're verified and listed on Gigwork, customers search for services through our WhatsApp chatbot. When your service matches their need, we share your contact details. The customer contacts you directly via phone or WhatsApp. You handle the booking and service delivery directly with them. You maintain full control over your pricing and scheduling.",
    },
    {
      category: "payment",
      question: "How do payments work on Gigwork?",
      answer:
        "Gigwork is a discovery platform, not a payment intermediary. You find service providers through Gigwork (free for customers), contact the provider directly, negotiate pricing and pay the provider directly—not through Gigwork. This ensures transparency and gives you flexibility in payment methods.",
    },
    {
      category: "payment",
      question: "Are there any hidden charges?",
      answer:
        "No! Gigwork's service discovery is completely free for customers. When you book a service, you pay only the service provider for their work. The provider sets their own pricing. No commission or platform fees are added by Gigwork. What the provider quotes is what you pay.",
    },
    {
      category: "safety",
      question: "Is my personal information safe with Gigwork?",
      answer:
        "Yes, your privacy is important to us. We collect only essential information (your service need and location). Your contact details are not shared publicly. Provider contacts are verified and screened. We follow industry-standard data protection practices, and conversations on WhatsApp are end-to-end encrypted.",
    },
    {
      category: "safety",
      question: "Can I report a service provider?",
      answer:
        "Yes, absolutely. If you experience unprofessional behavior, poor quality work, pricing disputes, or any safety concerns, contact our customer support immediately at <strong>+91 73061 04563</strong>. We take all complaints seriously and investigate every report to maintain our platform's quality and trust.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Everything you need to know about Gigwork - Kerala's WhatsApp-based
            service directory
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === cat.id
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto mb-16">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No questions found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is ready to
              help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/918590012027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                <MessageCircle size={20} />
                WhatsApp Chat
              </a>
              <a
                href="tel:+917306104563"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
              >
                <Phone size={20} />
                Call Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default FAQPage;
