// 메인페이지 '사업 소개' 섹션 컴포넌트

import React from 'react';
import Section from '../Section';
import collect from '../../assets/collect.png';
import planting from '../../assets/planting.png';
import donate from '../../assets/donate.png';

const About = () => {
    return (
        <Section id="about" title="" bgColor="bg-gray-50">
            <div className="max-w-7xl mx-auto mt-12 px-4">
                <div className="max-w-4xl mx-auto my-3 text-center px-4 relative">
                    {/* 배경 장식 요소 (선택 사항) */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-10 select-none pointer-events-none">
                        <span className="text-8xl font-black text-green-600 tracking-widest uppercase">Circulation</span>
                    </div>

                    {/* 메인 멘트 */}
                    <h2 className="relative z-10 text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                        당신이 놓아준 <span className="text-green-600 underline underline-offset-8 decoration-green-200">화분 한 자리</span>, <br className="md:hidden" />
                        우리 이웃의 <span className="text-green-700">작은 숲</span>이 됩니다.
                    </h2>

                    {/* 서브 설명 문구 (추가 시 더욱 풍성해집니다) */}
                    <p className="text-sm md:text-lg text-gray-500 font-medium tracking-tight">
                        매립될 위기의 폐화분을 수거하여 전문가의 손길로 다시 꽃피우는 <br className="hidden md:block" />
                        환경실천연합회의 <strong>자원순환 프로젝트</strong>를 소개합니다.
                    </p>
                    
                    {/* 구분선 */}
                    <div className="mt-8 flex justify-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-200"></div>
                        <div className="w-12 h-1.5 rounded-full bg-green-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-200"></div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                    {/* STEP 01 */}
                    <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col min-h-[520px] z-10 transition-transform hover:scale-[1.02]">
                        <div className="h-48 bg-gray-200 relative">
                            <img src={collect} alt="폐화분 수거" className="w-full h-full object-cover" onContextMenu={(e) => e.preventDefault()} />
                            <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">STEP 01</div>
                        </div>
                        <div className="px-8 py-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 text-center tracking-tight">녹색 손길, '화분 마당'</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-3 text-center">전국 주거단지와 기관을 대상으로 폐화분 수거 캠페인을 진행합니다.</p>
                            <div className="mt-auto">
                                <p className="text-[11px] font-black text-green-600 mb-3 uppercase tracking-[0.2em] text-left">Upcoming</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {['--시 --동 주거단지 일대', '--시 --읍 아파트 단지'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-green-50/50 px-3 py-2 rounded-xl border border-green-100/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                            <span className="text-xs font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[11px] font-black text-gray-500 my-3 uppercase tracking-[0.2em] text-left">Completed</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {['--시 --동 주거단지 일대', '--시 --읍 아파트 단지'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-green-50/50 px-3 py-2 rounded-xl border border-green-100/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                            <span className="text-xs font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Arrow />

                    {/* STEP 02 */}
                    <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col min-h-[520px] z-10 transition-transform hover:scale-[1.02]">
                        <div className="h-48 bg-gray-200 relative">
                            <img src={planting} alt="보완 식재" className="w-full h-full object-cover transform rotate-180" />
                            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">STEP 02</div>
                        </div>
                        <div className="px-8 py-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 text-center tracking-tight">다시 피움, '보완 식재'</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-3 text-center">전문가의 손길로 폐화분에 새로운 생명을 불어넣는 보완 식재를 진행합니다.</p>
                            <div className="mt-auto">
                                <p className="text-[11px] font-black text-blue-600 mb-3 uppercase tracking-[0.2em] text-left">Upcoming</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {['환경실천연합회 활동가 그룹', '지역 원예 전문가 자문단'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-blue-50/50 px-3 py-2 rounded-xl border border-blue-100/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                                            <span className="text-xs font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[11px] font-black text-gray-500 my-3 uppercase tracking-[0.2em] text-left">Completed</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {['환경실천연합회 활동가 그룹', '지역 원예 전문가 자문단'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-blue-50/50 px-3 py-2 rounded-xl border border-blue-100/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
                                            <span className="text-xs font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Arrow />

                    {/* STEP 03 */}
                    <div className="flex-1 bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col min-h-[520px] z-10 transition-transform hover:scale-[1.02]">
                        <div className="h-48 bg-gray-200 relative">
                            <img src={donate} alt="사회적 나눔" className="w-full h-full object-cover" onContextMenu={(e) => e.preventDefault()} />
                            <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">STEP 03</div>
                        </div>
                        <div className="px-8 py-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-2 text-gray-800 text-center tracking-tight">화분 숲, '사회적 나눔'</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-3 text-center">완성된 화분을 복지 기관에 나눔하여 실내 녹지를 조성합니다.</p>
                            <div className="mt-auto">
                                <p className="text-[11px] font-black text-orange-600 mb-3 uppercase tracking-[0.2em] text-left">Upcoming</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {['시립 양로원 및 요양 센터 15곳', '지역 아동 복지 센터 10곳'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-orange-50/50 px-3 py-2 rounded-xl border border-orange-100/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                                            <span className="text-xs font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[11px] font-black text-gray-500 my-3 uppercase tracking-[0.2em] text-left">Completed</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {['시립 양로원 및 요양 센터 15곳', '지역 아동 복지 센터 10곳'].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-orange-50/50 px-3 py-2 rounded-xl border border-orange-100/50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                                            <span className="text-xs font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};

// 내부 화살표 컴포넌트
const Arrow = () => (
    <div className="flex items-center justify-center w-8 md:w-12 h-8 md:h-full rotate-90 md:rotate-0 opacity-20 shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    </div>
);

export default About;