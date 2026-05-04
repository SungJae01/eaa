import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import Section from '../Section'; 
import mainBanner from '../../assets/main_banner.png';

const Activity = () => {
    const [selectedId, setSelectedId] = useState(null);

    // 끊김 없는 부드러운 전환을 위해 stiffness와 damping을 미세 조정합니다.
    const transitionConfig = {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1
    };

    const tagStyles = {
        "화분 마당": "bg-green-100 text-green-700 border-green-200",
        "보완 식재": "bg-blue-100 text-blue-700 border-blue-200",
        "사회적 나눔": "bg-orange-100 text-orange-700 border-orange-200"
    };

    const activities = [
        { 
            id: 1, 
            tag: "화분 마당",
            title: "오산시 궐동 폐화분 수거 캠페인", 
            date: "2026.04.12", 
            summary: "지역 주민들과 함께하는 자원순환의 첫걸음",
            content: "지역 주민들의 적극적인 참여로 150개의 폐화분을 수거했습니다. 수거된 화분은 세척 과정을 거쳐 보완 식재 단계로 이동합니다.", 
            image: mainBanner 
        },
        { 
            id: 2, 
            tag: "보완 식재",
            title: "수원대학교 자원봉사자 식재 교육", 
            date: "2026.04.15", 
            summary: "청년들의 손길로 다시 피어나는 녹색 생명",
            content: "환경실천연합회 전문가와 함께 수원대학교 학생들이 참여하여 올바른 분갈이 및 보완 식재 기술을 습득했습니다.", 
            image: mainBanner
        },
        { 
            id: 3, 
            tag: "사회적 나눔",
            title: "봉담읍 아파트 단지 화분 교환 행사", 
            date: "2026.04.20", 
            summary: "이웃과 나누는 깨끗한 공기, 탄소저감 화분 나눔",
            content: "재사용 화분을 시민들에게 나누어주며 자원순환의 중요성을 알렸습니다. 약 200가구가 참여하여 큰 호응을 얻었습니다.", 
            image: mainBanner
        },
        { 
            id: 4, 
            tag: "사회적 나눔",
            title: "사회복지시설 '나눔 숲' 조성 완료", 
            date: "2026.04.25", 
            summary: "어르신들의 일상에 싱그러운 활력을 더해드립니다",
            content: "보완 식재가 완료된 탄소저감 화분들을 시립 양로원에 전달하여 어르신들을 위한 실내 녹색 쉼터를 조성했습니다.", 
            image: mainBanner
        },
    ];

    const selectedActivity = activities.find(a => a.id === selectedId);

    return (
        <Section id="activity" title="" bgColor="bg-green-50" className="pt-24 md:pt-32">
            <div className="max-w-6xl mx-auto w-full px-4">
                
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-4 tracking-tight">
                        함께 만든 <span className="text-green-600">녹색 변화</span>의 기록들
                    </h2>
                    <p className="text-sm md:text-lg text-gray-500 font-medium leading-relaxed">
                        버려진 화분이 다시 생명을 얻어 우리 이웃에게 전달되기까지,<br className="hidden md:block" />
                        환경실천연합회와 시민들이 함께 땀 흘린 소중한 순간들입니다.
                    </p>
                </div>

                <motion.div 
                    layout
                    className="flex flex-col md:flex-row w-full gap-8 items-start min-h-[600px]"
                >
                    {/* 1. 게시물 목록 (Master) */}
                    <motion.div 
                        layout 
                        transition={transitionConfig}
                        className={`${selectedId ? 'w-full md:w-2/5' : 'w-full md:w-3/4 mx-auto'} flex flex-col gap-4`}
                    >
                        {activities.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                transition={transitionConfig}
                                onClick={() => setSelectedId(item.id === selectedId ? null : item.id)}
                                className={`cursor-pointer overflow-hidden rounded-2xl border flex items-center h-32 md:h-32 transition-colors duration-300 ${
                                    selectedId === item.id 
                                        ? 'bg-green-600 border-green-600 shadow-xl' 
                                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                                }`}
                            >
                                {/* 썸네일 컨테이너: 고정 너비를 유지하여 레이아웃 끊김을 방지합니다. */}
                                <motion.div 
                                    layout
                                    className="h-full bg-gray-200 overflow-hidden relative shrink-0"
                                    style={{ width: selectedId ? 0 : '144px' }} // 선택 시 너비를 0으로 부드럽게 축소
                                    transition={transitionConfig}
                                >
                                    <AnimatePresence mode="wait">
                                        {!selectedId && (
                                            <motion.img 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                src={item.image} 
                                                alt="thumbnail" 
                                                className="w-36 h-full object-cover"
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* 리스트 텍스트 정보 */}
                                <div className="flex-1 px-4 flex flex-col justify-center overflow-hidden">
                                    <motion.h4 layout="position" className={`font-bold text-sm md:text-base mb-1 truncate text-left ${selectedId === item.id ? 'text-white' : 'text-gray-800'}`}>
                                        {item.title}
                                    </motion.h4>
                                    
                                    <AnimatePresence>
                                            <motion.p 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className={`text-xs truncate text-left ml-1 ${selectedId === item.id ? 'text-white' : 'text-gray-500'}`}
                                            >
                                                {item.summary}
                                            </motion.p>
                                    </AnimatePresence>
                                    <motion.div layout="position" className="flex items-center gap-2 mt-8">
                                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${selectedId === item.id ? 'bg-white/20 text-white border-white/30' : tagStyles[item.tag]}`}>
                                            {item.tag}
                                        </span>
                                        <span className={`pt-1 text-[10px] font-bold tracking-widest ${selectedId === item.id ? 'text-green-200' : 'text-gray-400'}`}>
                                            {item.date}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* 우측 화살표 */}
                                <AnimatePresence>
                                    {!selectedId && (
                                        <motion.div 
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            className="px-5 text-gray-300 shrink-0"
                                        >
                                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* 2. 상세보기 영역 (Detail) */}
                    <AnimatePresence mode="popLayout">
                        {selectedId && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={transitionConfig}
                                className="w-full md:w-3/5 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col sticky top-24"
                            >
                                <div className="w-full h-53 md:h-53 bg-gray-100 relative overflow-hidden">
                                    <img 
                                        src={selectedActivity.image} 
                                        alt="상세이미지" 
                                        className="w-full h-full object-cover" 
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                    <button 
                                        onClick={() => setSelectedId(null)}
                                        className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 backdrop-blur-sm transition-all z-10"
                                    >
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                                    </button>
                                </div>

                                <div className="p-8 flex flex-col flex-1 text-left">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${tagStyles[selectedActivity.tag]}`}>
                                            {selectedActivity.tag}
                                        </span>
                                        <span className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">{selectedActivity.date} 등록</span>
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-black text-gray-800 mb-6 leading-tight break-keep">
                                        {selectedActivity.title}
                                    </h3>
                                    <div className="w-full h-px bg-gray-100 mb-6" />
                                    <p className="text-gray-500 leading-relaxed text-base md:text-lg break-keep mb-10">
                                        {selectedActivity.content}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 flex justify-end">
                                        <Link to="/activity_detail" className="bg-green-500 text-white py-3.5 px-8 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100 flex items-center gap-2 group">
                                            기사 전문 보기
                                            <svg className="group-hover:translate-x-1 transition-transform" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 7l5 5-5 5M6 7l5 5-5 5" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    );
};

export default Activity;