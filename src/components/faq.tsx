"use client";
import React, { useState } from "react";

// Definisikan tipe data FAQ untuk memastikan kesesuaian tipe
type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is Webflow and why is it the best website builder and anjay keren banget?",
    answer:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  },
  {
    id: 2,
    question: "How to use Webflow for building websites?",
    answer:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Amet nulla facilisi morbi tempus iaculis urna id volutpat."
  },
  {
    id: 3,
    question: "Anjayyyy",
    answer:
      "Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Amet nulla facilisi morbi tempus iaculis urna id volutpat."
  }
];

const Faq = () => {
  // Inisialisasi state openFaqId dengan id pertanyaan pertama
  const [openFaqId, setOpenFaqId] = useState<number | null>(faqData[0].id); 

  const toggle = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="w-full flex flex-col items-center gap-6 mt-40">
      <div className="w-11/12">
        <h1 className="text-[64px] max-md:text-[48px] font-[600] leading-none">Frequently Asked <span className="text-[#E6B345]">Questions</span></h1>
        <p className="font-nunito text-[16px] font-[400]">These are frequently asked question that related to our service.</p>
      </div>  

      <div className="w-11/12 p-14 bg-[rgb(235,244,246)] rounded-[25px] text-[#071952] font-spartan flex flex-col gap-7">
        {faqData.map((faq) => (
          <div key={faq.id} className="flex flex-col gap-2">
            <div
              className="flex justify-between items-center relative cursor-pointer"
              onClick={() => toggle(faq.id)}
            >
              <p className={`text-[22px] duration-100 max-md:w-[88%] ${openFaqId === faq.id ? "text-[#E6B345]" : "text-[#071952]"}`}>{faq.question}</p>
              <div id="plusMinus"></div>
              <div
                id="plusMinus2"
                className={`transition-all ${
                  openFaqId === faq.id ? "rotate-90 bg-secondary" : "bg-primary"
                }`}
              ></div>
            </div>

            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openFaqId === faq.id ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <p className="font-[400] text-[18px] text-[#088395] w-[80%]">
                {faq.answer}
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#D9DBE9]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
