import React, { useState, useEffect } from 'react'; // 🚀 useEffect 추가
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import Section from '../Section'; 
// import mainBanner from '../../assets/main_banner.png'; // 🚀 이제 서버 이미지를 사용합니다.

const Activity = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [activities, setActivities] = useState([]); // 🚀 DB 데이터를 담을 상태

    // 🚀 데이터 불러오기
    useEffect(() => {
        fetch('/new_project/api/get_board.php')
            .then(res => res.json())
            .then(data => setActivities(data))
            .catch(err => console.error(err));
    }, []);

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
                                <motion.div 
                                    layout
                                    className="h-full bg-gray-200 overflow-hidden relative shrink-0"
                                    style={{ width: selectedId ? 0 : '144px' }}
                                    transition={transitionConfig}
                                >
                                    <AnimatePresence mode="wait">
                                        {!selectedId && (
                                            <motion.img 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                // 🚀 서버의 업로드 폴더 주소를 사용합니다.
                                                src={`/new_project/uploads/${item.image_path}`} 
                                                alt="thumbnail" 
                                                className="w-36 h-full object-cover"
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                <div className="flex-1 px-4 flex flex-col justify-center overflow-hidden text-left">
                                    <motion.h4 layout="position" className={`font-bold text-sm md:text-base mb-1 truncate ${selectedId === item.id ? 'text-white' : 'text-gray-800'}`}>
                                        {item.title}
                                    </motion.h4>
                                    
                                    <AnimatePresence>
                                            <motion.p 
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className={`text-xs truncate ml-1 ${selectedId === item.id ? 'text-white' : 'text-gray-500'}`}
                                            >
                                                {item.summary}
                                            </motion.p>
                                    </AnimatePresence>
                                    <motion.div layout="position" className="flex items-center gap-2 mt-8">
                                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${selectedId === item.id ? 'bg-white/20 text-white border-white/30' : tagStyles[item.tag]}`}>
                                            {item.tag}
                                        </span>
                                        <span className={`pt-1 text-[10px] font-bold tracking-widest ${selectedId === item.id ? 'text-green-200' : 'text-gray-400'}`}>
                                            {item.reg_date.split(' ')[0]} {/* 날짜만 표시 */}
                                        </span>
                                    </motion.div>
                                </div>

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
                                        src={`/new_project/uploads/${selectedActivity.image_path}`} 
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
                                        <span className="text-gray-400 text-xs mt-2 font-bold uppercase tracking-widest">{selectedActivity.reg_date.split(' ')[0]} 등록</span>
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-black text-gray-800 mb-6 leading-tight break-keep">
                                        {selectedActivity.title}
                                    </h3>
                                    <div className="w-full h-px bg-gray-100 mb-6" />
                                    <p className="text-gray-500 leading-relaxed text-base md:text-lg break-keep mb-10 whitespace-pre-wrap">
                                        {selectedActivity.content}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-gray-50 flex justify-end">
                                        <Link to={`/activity_detail/${selectedActivity.id}`} className="bg-green-500 text-white py-3.5 px-8 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100 flex items-center gap-2 group">
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