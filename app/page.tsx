'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Inter } from 'next/font/google'
import Image from "next/image"
import PartnerLogos from "@/components/PartnerLogos";
import StatisticCard from "@/components/StatisticCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import ArticleCard from "@/components/ArticleCard";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header / Navbar */}
      <header className="flex items-center justify-between py-6 px-6 md:px-16">
        <div className="flex items-center gap-2">
          <Image src="/new_images/company_logo.png" alt="Agency Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-wide">Agency</span>
        </div>
        <nav className="hidden md:flex gap-8 text-white/80 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Service</a>
          <a href="#" className="hover:text-white">Solutions</a>
        </nav>
        <Button className="bg-[#6C63FF] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#5548c8]">Get in touch</Button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-12 pb-8 bg-black min-h-[480px]">
        <div className="flex-1 z-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let’s make<br />your Home the<br />Best
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-md">
            Our business consulting services can help you adapt to today’s market dynamics.
          </p>
          <div className="flex gap-8 mb-8">
            <StatisticCard value="53k" label="Case Completed" />
            <StatisticCard value="30+" label="Year of Excellent" />
            <StatisticCard value="100%" label="Client Satisfaction" />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center relative z-10">
          <Image src="/new_images/hero_section_image.png" alt="Hero Graphic" width={400} height={300} className="rounded-xl shadow-2xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-transparent to-[#6C63FF] opacity-60 pointer-events-none" />
      </section>

      {/* Partners Section */}
      <section className="bg-[#f6f6ff] py-8 px-6 md:px-16">
        <h2 className="text-center text-lg font-semibold text-black mb-4">Our Client & Partner</h2>
        <PartnerLogos />
      </section>

      {/* Features Section (Below Partners) - Pixel-perfect recreation */}
      <section className="w-full bg-[#F5F6FF] flex justify-center py-16">
        <div className="flex flex-row gap-8 max-w-4xl w-full">
          <div className="flex-1 bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(44,62,80,0.08)] px-8 py-10 flex flex-col justify-center min-h-[200px]">
            <h4 className="text-xl font-semibold text-[#181A2A] mb-2">Consumer insights</h4>
            <p className="text-[#6C6E8F] text-base leading-relaxed">Our business consulting services can help you adapt to today’s market dynamics.</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(44,62,80,0.08)] px-8 py-10 flex flex-col justify-center min-h-[200px]">
            <h4 className="text-xl font-semibold text-[#181A2A] mb-2">Emerging Ideas</h4>
            <p className="text-[#6C6E8F] text-base leading-relaxed">Our business consulting services can help you adapt to today’s market dynamics.</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(44,62,80,0.08)] px-8 py-10 flex flex-col justify-center min-h-[200px]">
            <h4 className="text-xl font-semibold text-[#181A2A] mb-2">Thought Leadership</h4>
            <p className="text-[#6C6E8F] text-base leading-relaxed">Our business consulting services can help you adapt to today’s market dynamics.</p>
          </div>
        </div>
      </section>

      {/* Super Customers Section */}
      <section className="bg-[#6C63FF] py-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12">
          <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-8">
            <h2 className="text-4xl font-bold mb-4">Your super customers</h2>
            <p className="mb-8 text-white/90">Efficiently incentivize scenarios rather than competitive materials.</p>
            <Button className="bg-white text-[#6C63FF] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 w-fit">Learn More</Button>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard icon="/new_images/modern_software.png" title="Modern software" description="Is your day-to-day work and project work in the financial sector exposing what" bg="bg-white" shadow={true} textAlign="text-left" padding="p-6" />
            <FeatureCard icon="/new_images/build_organization.png" title="Build organization" description="Do you want to centralize or harmonize processes between various locations or companies?" bg="bg-white" shadow={true} textAlign="text-left" padding="p-6" />
            <FeatureCard icon="/new_images/changing_mindset.png" title="Changing mindset" description="Are you facing large-scale IT projects over the short term for which you need to train up on" bg="bg-white" shadow={true} textAlign="text-left" padding="p-6" />
            <FeatureCard icon="/new_images/faster_business.png" title="Faster business" description="Would it be beneficial for your company to have a consulting company" bg="bg-white" shadow={true} textAlign="text-left" padding="p-6" />
          </div>
        </div>
      </section>

      {/* Articles & Resources Section */}
      <section className="bg-white py-20 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-8">
            <h2 className="text-3xl font-bold mb-6 text-black">Articles & Resources</h2>
            <Button className="bg-[#6C63FF] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#5548c8] mb-8 w-fit">Learn More</Button>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <ArticleCard image="/new_images/Articles_and Rsources_business.png" title="Business" description="In today’s climate, business agility is essential to keep pace with rapid change." />
            <ArticleCard image="/new_images/Articles_and Rsources_consulting.png" title="Consulting" description="As organizations continue to evolve, leaders must encourage and prepare their teams." />
            <ArticleCard image="/new_images/Articles_and Rsources_marketing.png" title="Marketing" description="Discover what it takes to drive business transformation by changing the way employees" />
          </div>
        </div>
      </section>

      {/* Best Service Better Business Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-[#6C63FF] via-[#7f6cff] to-[#a18fff]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-stretch">
          <div className="flex-1 grid grid-cols-2 gap-6 bg-white/10 rounded-2xl p-8">
            <ServiceCard icon="/new_images/Business_service.png" title="Business Service" description="Online sales regularly" bg="bg-white/90" textColor="text-[#6C63FF]" shadow={true} />
            <ServiceCard icon="/new_images/consumer_product.png" title="Consumer Product" description="Online sales channel" bg="bg-white/90" textColor="text-[#6C63FF]" shadow={true} />
            <ServiceCard icon="/new_images/financial_services.png" title="Financial Service" description="Online daily homework" bg="bg-white/90" textColor="text-[#6C63FF]" shadow={true} />
            <ServiceCard icon="/new_images/software_services.png" title="Software service" description="Various and all objects" bg="bg-white/90" textColor="text-[#6C63FF]" shadow={true} />
          </div>
          <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-8 items-start">
            <h3 className="text-3xl font-bold text-white mb-4">Best Service Better Business</h3>
            <p className="text-white/90 mb-6">A best and cheapest way of getting know learning to make a better tomorrow</p>
            <Button className="bg-white text-[#6C63FF] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 w-fit">Get Service</Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#f4f5ff] py-20 px-4 md:px-0">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#6C63FF] mb-6">
              <Image src="/new_images/client_photo.png" alt="Client" width={160} height={160} className="object-cover w-full h-full" />
            </div>
            <span className="font-semibold text-black text-lg">Seara Purnamill, Urban Corp</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-start">
            <p className="text-2xl text-black font-medium mb-6">I am grateful to the company for the timely and exceptionally accurate delivery of result. Everything is very tasty and high quality. And it follows that the weight loss plan I have chosen really worked! I was surprised!</p>
            <div className="flex items-center gap-4 mt-4">
              <button className="w-10 h-10 rounded-full bg-white border border-[#6C63FF] flex items-center justify-center text-[#6C63FF] hover:bg-[#ecebff]">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 17l-5-5 5-5" /></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-[#6C63FF] flex items-center justify-center text-[#6C63FF] hover:bg-[#ecebff]">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7l5 5-5 5" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black py-12 px-6 md:px-16">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Let us help you plan for your future</h3>
            <p className="text-white/80 text-sm">See your customers the best payment experience with multiple payment options.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-full text-black w-full md:w-64" />
            <Button className="bg-[#6C63FF] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-[#5548c8]">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181824] text-white py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/new_images/company_logo.png" alt="Agency Logo" width={32} height={32} />
              <span className="text-lg font-bold">Agency</span>
            </div>
            <p className="text-white/70 mb-4">techlead@gmail.com<br />070765 221</p>
            <p className="text-xs text-white/40">© July 2022 All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">MENU</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Home</li>
              <li>Services</li>
              <li>Package</li>
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">SOFTWARE</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>InDesign</li>
              <li>Invision</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">SERVICES</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Graphic Design</li>
              <li>Print Design</li>
              <li>Logo Design</li>
              <li>Brand Identity</li>
              <li>Packaging</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}