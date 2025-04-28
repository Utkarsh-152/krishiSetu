"use client"

import { useState } from "react"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CloudSun,
  Droplets,
  Flame,
  Globe,
  Instagram,
  Leaf,
  Menu,
  MessageSquare,
  Phone,
  TreesIcon as Plant,
  SproutIcon as Seedling,
  Sun,
  Twitter,
  X,
  Youtube,

  CloudRain,
  TreePine,
  Download,
  HelpCircle,
  Languages,
  CheckSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBlogPost, setCurrentBlogPost] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [language, setLanguage] = useState("English")

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Punjab",
      image: "https://images.unsplash.com/photo-1631819539802-720166c2651f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1bmphYmklMjBwZXJzb258ZW58MHx8MHx8fDI%3D",
      quote: "KrishiSetu helped me increase my crop yield by 30% through their soil testing and crop recommendations.",
    },
    {
      name: "Anita Devi",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1602793778401-d5ddab8febd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGluZGlhbiUyMGZlbWFsZXxlbnwwfHwwfHx8Mg%3D%3D",
      quote:
        "The weather alerts saved my harvest during unexpected rains. This app is a blessing for small farmers like me.",
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      image: "https://images.unsplash.com/photo-1642151054985-609d594ba1f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3VqcmF0aXxlbnwwfHwwfHx8Mg%3D%3D",
      quote:
        "I sold my crop residue through KrishiSetu instead of burning it. Better for the environment and I made extra income!",
    },
  ]

  const blogPosts = [
    {
      title: "5 Ways to Improve Soil Health Naturally",
      excerpt: "Discover organic methods to enhance soil fertility without harmful chemicals.",
      image: "https://images.unsplash.com/photo-1593412369977-d3b53ca6b53a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2F5cyUyMHRvJTIwSW1wcm92ZSUyMFNvaWwlMjBIZWFsdGglMjBOYXR1cmFsbHl8ZW58MHx8MHx8fDI%3D",
      date: "April 15, 2025",
      author: "Dr. Priya Sharma",
      category: "Soil Health",
    },
    {
      title: "Understanding Climate-Resilient Farming",
      excerpt: "Learn how to adapt your farming practices to changing weather patterns.",
      image: "https://images.unsplash.com/photo-1660892507980-a8259d7162e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VW5kZXJzdGFuZGluZyUyMENsaW1hdGUlMjBSZXNpbGllbnQlMjBGYXJtaW5nfGVufDB8fDB8fHwy",
      date: "April 10, 2025",
      author: "Amit Verma",
      category: "Climate",
    },
    {
      title: "The Economics of Sustainable Agriculture",
      excerpt: "How eco-friendly farming practices can increase your long-term profitability.",
      image: "https://images.unsplash.com/photo-1632083000159-8e17b5ae7fd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGhlJTIwRWNvbm9taWNzJTIwb2YlMjBTdXN0YWluYWJsZSUyMEFncmljdWx0dXJlfGVufDB8fDB8fHwy",
      date: "April 5, 2025",
      author: "Neha Gupta",
      category: "Economics",
    },
  ]

  const faqs = [
    {
      question: "How does the soil testing service work?",
      answer:
        "Our soil testing service involves collecting soil samples from your field, analyzing them in our lab for nutrients, pH levels, and organic matter content, and providing you with detailed recommendations for soil improvement and crop selection based on the results.",
    },
    {
      question: "How accurate are the weather predictions?",
      answer:
        "Our weather predictions are based on data from multiple meteorological sources and have an accuracy rate of over 90% for 3-day forecasts. We continuously improve our algorithms to provide the most reliable weather information for your specific location.",
    },
    {
      question: "Can I use KrishiSetu if I have a small farm?",
      answer:
        "KrishiSetu is designed for farmers of all scales. Our services are particularly beneficial for small farmers who want to maximize productivity with limited resources. We offer affordable plans specifically tailored for small landholdings.",
    },
    {
      question: "How do I sell my crop residue through the platform?",
      answer:
        "To sell crop residue, simply create a listing in the 'Sell Residue' section of the app. Specify the type, quantity, and quality of residue available. Once approved, your listing becomes visible to buyers. When a buyer shows interest, we facilitate the transaction and help arrange collection logistics.",
    },
    {
      question: "Is the app available in regional languages?",
      answer:
        "Yes, KrishiSetu is available in multiple Indian languages including Hindi, Punjabi, Gujarati, Marathi, Tamil, and Telugu. You can change your language preference in the settings menu or through the language selector in the footer.",
    },
  ]

  const languages = ["English", "हिंदी", "ਪੰਜਾਬੀ", "ગુજરાતી", "मराठी", "தமிழ்", "తెలుగు"]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextBlogPost = () => {
    setCurrentBlogPost((prev) => (prev + 1) % blogPosts.length)
  }

  const prevBlogPost = () => {
    setCurrentBlogPost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-sm">
        <div className="container  mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Seedling className="h-6 w-6 text-[#3A632F]" />
            <div className="top-4 left-4">
              <h1 className="text-[#3A632F] text-2xl font-sans">
                <span className="font-bold">K</span>rishi
                <span className="font-bold">S</span>etu
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-black hover:text-emerald-700">
              Home
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-black hover:text-emerald-700">
              Dashboard
            </Link>
            <Link to="/crop-recommendations" className="text-sm font-medium text-black hover:text-emerald-700">
              Crop recommendations
            </Link>
            <Link to="/online-mandi" className="text-sm font-medium text-black hover:text-emerald-700">
              Online Mandi
            </Link>
            <Link to="/about-us" className="text-sm font-medium text-black hover:text-emerald-700">
              About us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="flex bg-black hover:bg-gray-800 text-white px-6 py-2 text-base rounded-full items-center gap-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
              </svg>
              <Link to="/register" className="text-white">Sign-up</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        <div className="w-[60%] mx-auto border-1 border-[#76b764]"></div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t p-4 bg-white">
            <nav className="flex flex-col space-y-4 px-4">
              <Link to="/" className="text-sm font-medium text-green-900 hover:text-green-700">
                Home
              </Link>
              <Link to="/dashboard" className="text-sm font-medium text-green-900 hover:text-green-700">
                Dashboard
              </Link>
              <Link to="/crop-recommendations" className="text-sm font-medium text-green-900 hover:text-green-700">
                Crop recommendations
              </Link>
              <Link to="/online-mandi" className="text-sm font-medium text-green-900 hover:text-green-700">
                Online Mandi
              </Link>
              <Link to="/about-us" className="text-sm font-medium text-green-900 hover:text-green-700">
                About us
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button className="w-full bg-black hover:bg-gray-900 text-white px-6 py-2 text-base rounded-full items-center gap-2 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
                  </svg>
                  <Link to="/register" className="text-white">Sign-up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden h-[91vh] bg-white">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <img
              src="wheat.png"
              alt="Wheat field"
              className="w-full h-full object-fill object-right"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
            <div className="grid md:grid-cols-2 gap-8 ml-20 mr-10 items-start">
              <motion.div
                className="max-w-2xl space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-[64px] font-mono leading-[64px]">
                  Revolutionizing
                  <div className="relative">
                    <span className="text-[#3A632F] font-bold font-sans">Indian</span>
                    <div className="absolute -z-10 w-[40%] h-4 bg-[#ebc276] bottom-0"></div>
                  </div>
                  Agriculture
                </h1>
                <p className="text-xl text-gray-600 max-w-xl">
                  Empowering farmers with technology for sustainable farming, higher yields, and better livelihoods.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button className="bg-black shadow-lg shadow-black/50 hover:bg-gray-900 text-white px-8 py-6 text-lg rounded-full flex items-center">
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-800 text-gray-800 hover:bg-gray-50 px-4 py-6 text-lg rounded-full"
                  >
                    Watch Demo
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex flex-col gap-4 w-[520px] mt-45 mr-50">
                  {/* Top full-width card */}
                  <div className="bg-gray-50 rounded-2xl px-6 py-3 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Take Krishi Setu Everywhere</h3>
                      <p className="text-gray-600 text-sm">Download our mobile app to access all KrishiSetu features on the go.</p>
                    </div>
                    <img src="page1mask.png" alt="Plant" className="w-24 h-24 object-contain" />
                  </div>
                  {/* Bottom row: two half-width cards */}
                  <div className="flex gap-4">
                    <div className="bg-gray-50 rounded-2xl px-6 py-3 flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Soil Testing</h3>
                        <p className="text-gray-600 text-sm">Do soil tests with few simple steps</p>
                      </div>
                      <img src="soil.jpg" alt="Soil" className="w-24 h-24 object-contain" />
                    </div>
                    <div className="bg-gray-50 rounded-2xl px-6 py-3 flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Climate Tips</h3>
                        <p className="text-gray-600 text-sm">Get weather insights</p>
                      </div>
                      <img src="sun.jpg" alt="Sun" className="w-24 h-24 object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Agricultural Challenges Section */}
        <section className="relative overflow-hidden">
          <div className="w-full h-[91vh]  bg-white flex relative">
            {/*top left Image */}
            <div className=" absolute bg-white rounded-4xl px-12 flex-1 py-12 -mt-6 flex items-start justify-center">
              <img
                src="feild1.png"
                alt="Corn field"
                className="rounded-tl-3xl rounded-br-lg object-cover w-full h-[260px] md:h-full md:w-[320px]"
              />
            </div>

            {/* Gradient Box */}
            <div
              className="flex-[2] rounded-3xl rounded-l-full p-10 flex flex-col h-full justify-center"
              style={{
                background: "linear-gradient(90deg, #80CA6C 10%, #3A632F 100%)"
              }}
            >
        
              <h2 className="text-white text-4xl md:text-4xl -mt-10 font-extrabold mb-4 text-center">
                Agricultural Challenges <br /> And Our Solution <span role="img" aria-label="leaf">🌿</span>
              </h2>
              <p className="text-white text-lg mb-40 text-center">
                KrishiSetu addresses key farming challenges with innovative technology solutions
              </p>
              {/* Cards */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl shadow-lg flex-1 p-6 flex flex-col items-center">
                  <div className="bg-orange-100 p-3 rounded-full mb-3">
                    <Flame className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Stubble Burning</h3>
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    Burning causes air pollution and soil damage.
                  </p>
                  <div className="bg-[#E8F5E9] text-[#2B5219] text-xs py-1 px-3 rounded-full font-semibold">
                    Marketplace to sell stubble to power plants 🌱
                  </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-2xl shadow-lg flex-1 p-6 flex flex-col items-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <CloudRain className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Climate Impact</h3>
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    Patterns damage crops and disrupt farming cycles.
                  </p>
                  <div className="bg-[#E8F5E9] text-[#2B5219] text-xs py-1 px-3 rounded-full font-semibold">
                    Smart weather-based sowing & harvesting 🌱
                  </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-2xl shadow-lg flex-1 p-6 flex flex-col items-center">
                  <div className="bg-green-100 p-3 rounded-full mb-3">
                    <TreePine className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Wrong Crop</h3>
                  <p className="text-gray-600 text-sm mb-3 text-center">
                    Inappropriate crop choices waste soil and resources.
                  </p>
                  <div className="bg-[#E8F5E9] text-[#2B5219] text-xs py-1 px-3 rounded-full font-semibold">
                    AI powered Crop Advisor 🌱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our services*/}
        <section className="relative bg-[#f7f7f5] py-8 overflow-x-hidden">
          {/* Decorative leaf image */}
          <img src="plant8.png" alt="Leaves" className="absolute left-0 top-0 w-144 z-0 select-none pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              Explore our farmer-friendly digital tools designed to transform your agricultural practices
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1: Soil Test */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col items-center pb-8">
                <div className="w-full h-24 overflow-hidden flex items-end justify-center bg-red-400 relative">
                  <img src="image1.png" alt="Soil" className="w-full h-full object-cover" />
                  <div className="absolute z-10 -bottom-8 left-1/2 -translate-x-1/2 bg-yellow-100 rounded-full p-4 border-4 border-white shadow">
                    <Flame className="h-7 w-7 text-yellow-500" />
                  </div>
                </div>
                <div className="mt-10 px-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Soil test</h3>
                  <p className="text-gray-500 mb-6 text-sm">comprehensive soil analysis with detailed nutrient profiles and personalized recommendations</p>
                  <div className="flex flex-col gap-2 text-left text-base">
                    <div className="flex items-center gap-2"><span>✓</span> NPK and micronutrient analysis</div>
                    <div className="flex items-center gap-2"><span>✓</span> Customized fertilizer recommendations</div>
                    <div className="flex items-center gap-2"><span>✓</span> pH level assessment</div>
                  </div>
                </div>
              </div>
              {/* Card 2: Crop Selector */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col items-center pb-8">
                <div className="w-full h-24 rounded-t-2xl overflow-hidden flex items-end justify-center relative">
                  <img src="image3.png" alt="Crop Selector" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-blue-100 rounded-full p-4 border-4 border-white shadow">
                    <CloudRain className="h-7 w-7 text-blue-400" />
                  </div>
                </div>
                <div className="mt-10 px-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Crop Selector</h3>
                  <p className="text-gray-500 mb-6 text-sm">best crops to plant based on your soil conditions, local climate and rain metering</p>
                  <div className="flex flex-col gap-2 text-left text-base">
                    <div className="flex items-center gap-2"><span>✓</span> Soil-specific crop suggestions</div>
                    <div className="flex items-center gap-2"><span>✓</span> Seasonal planting calendar</div>
                    <div className="flex items-center gap-2"><span>✓</span> Market demand forecasts</div>
                  </div>
                </div>
              </div>
              {/* Card 3: Sell Residue */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col items-center pb-8">
                <div className="w-full h-24 rounded-t-2xl overflow-hidden flex items-end justify-center relative">
                  <img src="image4.png" alt="Sell Residue" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-red-100 rounded-full p-4 border-4 border-white shadow">
                    <Droplets className="h-7 w-7 text-red-400" />
                  </div>
                </div>
                <div className="mt-10 text-center px-6">
                  <h3 className="text-xl font-bold mb-2">Sell Residue</h3>
                  <p className="text-gray-500 mb-6 text-sm">Turn agricultural waste into income by connecting with buyers who use residue sustainably</p>
                  <div className="flex flex-col gap-2 text-left text-base">
                    <div className="flex items-center gap-2"><span>✓</span> Direct connection to biomass buyers</div>
                    <div className="flex items-center gap-2"><span>✓</span> Collection logistics support</div>
                    <div className="flex items-center gap-2"><span>✓</span> Transparent pricing</div>
                  </div>
                </div>
              </div>
              {/* Card 4: Climate Tips */}
              <div className="bg-white rounded-2xl shadow-md flex flex-col items-center pb-8">
                <div className="w-full h-24 rounded-t-2xl overflow-hidden flex items-end justify-center relative">
                  <img src="image5.png" alt="Climate Tips" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-purple-100 rounded-full p-4 border-4 border-white shadow">
                    <CloudSun className="h-7 w-7 text-purple-400" />
                  </div>
                </div>
                <div className="mt-10 text-center px-6">
                  <h3 className="text-xl font-bold mb-2">Climate Tips</h3>
                  <p className="text-gray-500 mb-6 text-sm">Receive localized weather forecasts and actionable advice to protect your crops from weather effects</p>
                  <div className="flex flex-col gap-2 text-left text-base">
                    <div className="flex items-center gap-2"><span>✓</span> 7-day weather forecasts</div>
                    <div className="flex items-center gap-2"><span>✓</span> Extreme weather alerts</div>
                    <div className="flex items-center gap-2"><span>✓</span> Crop-specific protection measures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Hub Section */}
        <section className="relative py-10 md:py-16 bg-black overflow-hidden">
          {/* Background image overlay */}
          <img src="leafs.png" alt="Leaf background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" />
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
            {/* Left: Heading */}
            <div className="flex-1 flex flex-col items-start md:items-start justify-center py-8">
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-0 md:mb-0">
                Knowledge Hub<br />Read More &<br />Know More
              </h2>
            </div>
            {/* Center: Circular images */}
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4 flex-shrink-0">
              <div className="relative flex items-center justify-center">
                <img src="imgcir1.png" alt="Field" className="w-40 h-40 md:w-48 md:h-48 rounded-full border-8 border-white shadow-lg object-cover" />
                <img src="plant.png" alt="Plant" className="absolute -bottom-6 -left-8 w-20 h-20 rounded-full border-4 border-white shadow-md object-cover bg-white" />
              </div>
            </div>
            {/* Right: Text and Button */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center py-8">
              <p className="text-white text-lg md:text-xl mb-6 max-w-md text-center md:text-left">
                Latest insights, farming tips, and agricultural best practices from our experts
              </p>
              <button className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition text-lg">
                View Articles
              </button>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16 overflow-x-hidden">
          {/* Decorative wheat image on the right */}
          <img src="wheatbg.png" alt="Wheat" className="hidden md:block absolute right-0 top-0 h-full w-auto z-0 pointer-events-none select-none" />
          {/* Decorative leaf bottom left */}
          <img src="leafs2.png" alt="Leaf" className="absolute left-0 bottom-0 w-[50%] z-2 opacity-100 pointer-events-none select-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">How KrishiSetu Works</h2>
            <p className="text-lg text-gray-700 mb-12 text-left max-w-2xl">A simple three-step process to transform your farming practices</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white">
                <div className="relative">
                  <img src="soiltest.png" alt="Soil testing" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow">1</div>
                </div>
                <div className="bg-[#FAD9CF] p-6 flex-1">
                  <h3 className="font-semibold text-lg mb-2">Soil testing</h3>
                  <p className="text-gray-700 text-sm">Request a soil test or input your field data through our simple mobile app or website interface.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white">
                <div className="relative">
                  <img src="get-rec.png" alt="Get Recommendations" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow">2</div>
                </div>
                <div className="bg-[#D8FFC7] p-6 flex-1">
                  <h3 className="font-semibold text-lg mb-2">Get Recommendations</h3>
                  <p className="text-gray-700 text-sm">Receive personalized recommendations for crops, fertilizers, and farming practices based on AI analysis</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white">
                <div className="relative">
                  <img src="max-soil.png" alt="Maximize Yield & Profit" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow">3</div>
                </div>
                <div className="bg-[#F7FFB0] p-6 flex-1">
                  <h3 className="font-semibold text-lg mb-2">Maximize Yield & Profit</h3>
                  <p className="text-gray-700 text-sm">Implement the recommendations to improve soil health, increase crop yields, and boost your farm income.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-gradient-to-br rounded-r-full from-[#5e9441] to-[#8fc36b] overflow-hidden">
          {/* Decorative wheat image on the right */}
          <img src="wheat.png" alt="Wheat" className="hidden md:block absolute right-0 top-0 h-full w-auto z-0 pointer-events-none select-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Montserrat]">Farmer Stories</h2>
              <p className="text-lg text-[#e6f3de] max-w-xl font-[calibri]">Hear from farmers who have transformed their agricultural practices with KrishiSetu</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-end mt-12">
              {/* Testimonial 1 */}
              <div className="relative bg-white rounded-[2rem] shadow-xl flex flex-col items-center px-8 pt-16 pb-8 w-full md:w-96 max-w-sm mx-auto">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <img src="https://images.unsplash.com/photo-1631819539802-720166c2651f?w=200&q=80" alt="Rajesh Kumar" className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 font-[calibri]">Rajesh Kumar</h3>
                <div className="flex items-center justify-center mt-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">★</span>
                  ))}
                </div>
                <hr className="w-2/3 my-4 border-gray-200" />
                <p className="text-gray-700 text-base text-center font-[calibri]">"KrishiSetu helped me increase my crop yield by 30% through their soil testing and crop recommendations."</p>
              </div>
              {/* Testimonial 2 */}
              <div className="relative bg-white rounded-[2rem] shadow-xl flex flex-col items-center px-8 pt-16 pb-8 w-full md:w-96 max-w-sm mx-auto">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <img src="https://images.unsplash.com/photo-1602793778401-d5ddab8febd5?w=200&q=80" alt="Ankita Devi" className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 font-[calibri]">Ankita Devi</h3>
                <div className="flex items-center justify-center mt-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">★</span>
                  ))}
                </div>
                <hr className="w-2/3 my-4 border-gray-200" />
                <p className="text-gray-700 text-base text-center font-[calibri]">"The weather alerts saved my harvest during unexpected rains. This app is a blessing for small farmers like me."</p>
              </div>
              {/* Testimonial 3 */}
              <div className="relative bg-white rounded-[2rem] shadow-xl flex flex-col items-center px-8 pt-16 pb-8 w-full md:w-96 max-w-sm mx-auto">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                  <img src="https://images.unsplash.com/photo-1642151054985-609d594ba1f7?w=200&q=80" alt="Suresh Patel" className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-2 font-[calibri]">Suresh Patel</h3>
                <div className="flex items-center justify-center mt-2 mb-2">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">★</span>
                  ))}
                  <span className="text-gray-400 text-xl">★</span>
                </div>
                <hr className="w-2/3 my-4 border-gray-200" />
                <p className="text-gray-700 text-base text-center font-[calibri]">"I sold my crop residue through KrishiSetu instead of burning it. Better for the environment and I made extra income!"</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-10 pb-4 font-[calibri]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-8">
            {/* Left: Logo, description, social */}
            <div className="flex-1 min-w-[220px] flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="h-7 w-7 text-green-700" />
                <span className="text-2xl md:text-3xl font-bold text-green-700">KrishiSetu</span>
              </div>
              <p className="text-gray-800 text-base md:text-lg max-w-xs">
                Empowering farmers with technology for sustainable farming, higher yields, and better livelihoods.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="bg-[#FAD97F] rounded-full p-3 flex items-center justify-center hover:bg-yellow-300 transition">
                  <Twitter className="h-6 w-6 text-gray-800" />
                </a>
                <a href="#" className="bg-[#FAD97F] rounded-full p-3 flex items-center justify-center hover:bg-yellow-300 transition">
                  <Instagram className="h-6 w-6 text-gray-800" />
                </a>
                <a href="#" className="bg-[#FAD97F] rounded-full p-3 flex items-center justify-center hover:bg-yellow-300 transition">
                  <Globe className="h-6 w-6 text-gray-800" />
                </a>
              </div>
            </div>
            {/* Center: Links */}
            <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-8 md:mt-0">
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">Quick Links</h3>
                <ul className="space-y-1 text-gray-800 text-base">
                  <li><a href="#" className="hover:underline">Soil testing</a></li>
                  <li><a href="#" className="hover:underline">Crop advisory</a></li>
                  <li><a href="#" className="hover:underline">weather alerts</a></li>
                  <li><a href="#" className="hover:underline">Residue Marketplace</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">About Us</h3>
                <ul className="space-y-1 text-gray-800 text-base">
                  <li><a href="#" className="hover:underline">About us</a></li>
                  <li><a href="#" className="hover:underline">Carrers</a></li>
                  <li><a href="#" className="hover:underline">Blogs</a></li>
                  <li><a href="#" className="hover:underline">Partners</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-2">Contact</h3>
                <ul className="space-y-2 text-gray-800 text-base">
                  <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-green-700" /><span>+ 123 456 7890</span></li>
                  <li className="flex items-center gap-2"><span className="bg-green-100 rounded p-1"><CheckSquare className="h-5 w-5 text-green-700" /></span><span>support@krishisetu.com</span></li>
                  <li>Delhi India</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200" />
          <div className="text-gray-800 text-sm">© 2023, All Right Reserved.</div>
        </div>
      </footer>
    </div>
  )
}
