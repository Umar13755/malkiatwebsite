"use client"
import CountUp from "react-countup";

export default function SuccessStories() {
  return (
    <div className="py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Users */}
          <div className="p-8 bg-slate-800 rounded-lg shadow-lg">
            <h2 className="title-font font-bold text-5xl text-red-600 mb-2">
              <CountUp start={0} end={500} duration={3} separator="," />
            </h2>
            <p className="leading-relaxed text-white">Client's Success</p>
          </div>
          
          {/* Subscribes */}
          <div className="p-8 bg-slate-800 rounded-lg shadow-lg">
            <h2 className="title-font font-bold text-5xl text-red-600 mb-2">
              <CountUp start={0} end={1800} duration={3} separator="," />
            </h2>
            <p className="leading-relaxed text-white">Subscribes</p>
          </div>
          
          {/* Downloads */}
          <div className="p-8 bg-slate-800 rounded-lg shadow-lg">
            <h2 className="title-font font-bold text-5xl text-red-600 mb-2">
              <CountUp start={0} end={35} duration={3} />
            </h2>
            <p className="leading-relaxed text-white">Downloads</p>
          </div>

          {/* Products */}
          <div className="p-8 bg-slate-800 rounded-lg shadow-lg">
            <h2 className="title-font font-bold text-5xl text-red-600 mb-2">
              <CountUp start={0} end={99} duration={3} suffix="%"/>
            </h2>
            <p className="leading-relaxed text-white">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}
