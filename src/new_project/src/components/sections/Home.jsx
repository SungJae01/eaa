// 메인페이지 '홈' 섹션 컴포넌트

import React from 'react';
import Section from '../Section';
import CountUp from '../CountUp';
import mainBanner from '../../assets/main_banner.png';

const Home = ({ activeIndex }) => {
    return (
        <Section id="home" title="" bgColor="bg-slate-50" className="p-0 flex flex-col justify-center">
            <div className="relative w-screen h-[70vh] left-1/2 right-1/2 -ml-[50vw] +mr-[50vw] mt-15 overflow-hidden shadow-lg">
                <img 
                    src={mainBanner} 
                    alt="메인베너" 
                    className="w-full h-full object-cover shadow-2xl" 
                />
                
                <div className="absolute left-[81%] top-[85%] -translate-x-1/2 -translate-y-1/2 flex gap-8 md:gap-16 z-20">
                    <div className="text-center group">
                        <p className="text-white/70 text-xs md:text-sm font-bold mb-2 uppercase">Collected</p>
                        <div className="relative">
                            <h4 className="text-4xl md:text-6xl font-black text-white tabular-nums drop-shadow-lg">
                                <CountUp to={2500} active={activeIndex === 0} />
                                <span className="text-xl md:text-2xl ml-1 text-green-400">+</span>
                            </h4>
                            <div className="w-full h-1 bg-green-500/50 mt-2 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                        <p className="text-white/90 text-sm md:text-base font-bold mt-2">회수된 폐화분</p>
                    </div>

                    <div className="text-center group">
                        <p className="text-white/70 text-xs md:text-sm font-bold mb-2 uppercase">Reborn</p>
                        <div className="relative">
                            <h4 className="text-4xl md:text-6xl font-black text-white tabular-nums drop-shadow-lg">
                                <CountUp to={2000} active={activeIndex === 0} />
                                <span className="text-xl md:text-2xl ml-1 text-blue-400">+</span>
                            </h4>
                            <div className="w-full h-1 bg-blue-500/50 mt-2 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                        <p className="text-white/90 text-sm md:text-base font-bold mt-2">다시 피운 화분</p>
                    </div>
                </div>
                
                <div className="absolute right-[5%] md:right-[8%] top-[25%] text-right drop-shadow-2xl select-none">
                    <div className="mb-4">
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                            "화분 한 자리로 만드는<br />
                            <span className="text-green-400">환경 다시 피움"</span>
                        </h3>
                    </div>
                    <p className="text-white/90 text-sm md:text-lg font-bold mb-6 leading-relaxed">
                        매립과 소각 대신 자원순환으로<br />
                        더 푸른 내일을 약속합니다.
                    </p>
                    <div className="flex flex-col gap-2 items-end">
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold">#자원순환</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold">#탄소중립</span>
                        <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold text-green-400">#환경실천연합회</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center py-10 bg-slate-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                        버려지는 폐화분에 새로운 생명을 더합니다.
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg px-4">
                        우리는 매립되거나 소각될 위기의 폐화분을 직접 수거하여 <br className="hidden md:block" />
                        전문적인 보완식재 과정을 거쳐 사회복지기관에 기부하고 있습니다.
                    </p>
                </div>
                <div className="flex flex-col items-center mt-10 animate-bounce opacity-60">
                    <p className="text-xs text-gray-400 font-bold tracking-widest mb-1 uppercase font-sans">Next Step</p>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </div>
            </div>
        </Section>
    );
};

export default Home;