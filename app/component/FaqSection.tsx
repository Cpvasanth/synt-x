'use client'; // This component needs to be a client component for interactivity

import React, { useState } from 'react';
// We'll use react-icons for the plus/minus icons
// Install with: npm install react-icons
import { FiPlus, FiMinus } from 'react-icons/fi';

// 1. Define the type for our FAQ data
type FaqItem = {
  question: string;
  answer: string;
};

// 2. Add your FAQ content here
const faqData: FaqItem[] = [
  {
    question: "What are the prices?",
    answer: "Our pricing is flexible and depends on the scope of your project. We offer package deals and hourly rates. Get an instant estimate from our calculator or contact us for a detailed quote.",
  },
  {
    question: "What if I need more hours?",
    answer: "No problem! You can easily purchase additional hours at our standard hourly rate. We're flexible and can scale with your needs.",
  },
  {
    question: "Are there maintenance fees?",
    answer: "We offer optional monthly maintenance plans to keep your site updated, secure, and running smoothly. These are not required, but highly recommended.",
  },
  {
    question: "Do you provide training?",
    answer: "Yes, we provide comprehensive training on how to manage your new website, update content, and use any new features we've built for you.",
  },
  {
    question: "Can I request additional features later?",
    answer: "Absolutely. Your website is built to be scalable. We can add new features, pages, or integrations as your business grows.",
  },
  {
    question: "Do you write content?",
    answer: "We partner with expert copywriters and SEO specialists who can help craft compelling content for your website. This can be included as part of your project proposal.",
  },
];

// 3. The Accordion Item Sub-Component
interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-neutral-700">
      <button
        className="flex w-full items-center justify-between py-6 text-left"
        onClick={onToggle}
      >
        <span className="text-lg md:text-xl font-medium text-white">
          {item.question}
        </span>
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-400 text-white">
          {isOpen ? <FiMinus className="h-5 w-5" /> : <FiPlus className="h-5 w-5" />}
        </div>
      </button>
      
      {/* This div controls the expand/collapse animation.
        It uses 'grid-template-rows' for a smooth height transition.
      */}
      <div
        className={`grid overflow-hidden text-neutral-300 transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-10">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// 4. The Main FAQ Section Component
const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-4 px-6 lg:py-24 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          
          {/* --- Left Column: Title --- */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold md:text-5xl">FAQ</h2>
            <p className="mt-4 text-lg text-neutral-400">
              Got questions? We've got answers! Explore our FAQ to learn more
              about our web design process, services, and how we can bring
              your vision to life.
            </p>
          </div>
          
          {/* --- Right Column: Accordion --- */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FaqSection;