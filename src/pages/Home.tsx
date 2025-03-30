import React from 'react';
import mainhero from "../assets/mainhero.png";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="font-['Crimson_Text'] text-4xl text-center md:text-left md:text-5xl lg:text-6xl leading-tight mb-6">
            AI-Powered CRM: Helping You Win Clients Effortlessly
          </h1>
          <p className="font-['Futura_Md_BT'] text-lg md:text-xl text-gray-600 mb-8">
            We leverage AI-driven CRM solutions to connect businesses with their ideal clients effortlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="font-['Futura_Md_BT'] bg-[#E7F5FF] px-6 py-3 border-2 border-[#0F1054] text-[#0F1054] rounded-md hover:bg-[#0F1054] hover:text-white transition-colors">
              Watch Demo
            </button>
            <button className="font-['Futura_Md_BT'] px-6 py-3 bg-[#0F1054] text-white rounded-md hover:bg-[#0F1054]/90">
              Start free trial →
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src={mainhero}
            alt="Hero illustration"
            className="w-[100%] h-auto"
          />
        </div>
      </div>
      <div className="fixed bottom-8 right-8">
        <button className="font-['Futura_Md_BT'] bg-[#E7F5FF] px-4 py-2 border-2 border-[#0F1054] text-[#0F1054] rounded-md hover:bg-[#0F1054] hover:text-white transition-colors">
          Ask our GrowSuite AI Agent
        </button>
      </div>
    </div>
  );
};

export default Home;