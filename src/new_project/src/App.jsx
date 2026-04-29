import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

const sectionVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
        opacity: 1,      
        y: 0,      
        transition: { duration: 0.8, ease: "easeOut" }       
    }
};

const Section = ({ id, children, bgColor, title, isLast }) => (
    <motion.section id={id} className={`w-full flex flex-col items-center ${bgColor} ${isLast ? 'min-h-screen pt-32' : 'h-screen justify-center px-4'}`}>
        
        {/* 콘텐츠 영역: 가로 제한(max-w-7xl) 있음 */}
        <div className="max-w-7xl mx-auto text-center px-4 flex-grow flex flex-col justify-center">
            <motion.h2 className="text-4xl md:text-6xl font-black mb-8">{title}</motion.h2>
            <motion.div>{children}</motion.div>
        </div>

        {/* 푸터 영역: 가로 제한 없음! (w-full) */}
        {isLast && <Footer />}
        
    </motion.section>
);

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionIds = ['home', 'about', 'activity', 'contact'];
    const isScrolling = useRef(false);

    // 섹션 인덱스를 기반으로 ID 문자열 반환
    const activeSectionId = sectionIds[activeIndex];

    const moveSection = (index) => {
        if (index < 0 || index >= sectionIds.length || isScrolling.current) return;
        
        isScrolling.current = true;
        setActiveIndex(index);
        
        // 1.2초(duration) 후에 스크롤 잠금 해제
        setTimeout(() => {
            isScrolling.current = false;
        }, 1200);
    };

    useEffect(() => {
        const handleWheel = (e) => {
            // 마지막 섹션(Contact)에 도달했을 때
            if (activeIndex === sectionIds.length - 1) {
                // 아래로 스크롤할 때는 이벤트를 막지 않아 푸터가 보이게 함
                if (e.deltaY > 0) return; 
                
                // 위로 스크롤할 때, 브라우저 스크롤 위치가 맨 위일 때만 이전 섹션으로 이동
                if (e.deltaY < 0 && window.scrollY <= 0) {
                    e.preventDefault();
                    moveSection(activeIndex - 1);
                }
                return;
            }

            // 그 외 섹션에서는 기본 스크롤을 막고 섹션 단위로 이동
            e.preventDefault();
            if (isScrolling.current) return;

            if (e.deltaY > 0) moveSection(activeIndex + 1);
            else if (e.deltaY < 0) moveSection(activeIndex - 1);
        };

        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        // passive: false를 설정해야 e.preventDefault()가 작동합니다.
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [activeIndex]);

    return (
        // min-h-screen을 주어 전체 높이를 확보합니다.
        <div className="bg-gray-50 text-gray-900 font-sans">
            <Header 
                activeSection={activeSectionId} 
                onMenuClick={moveSection}
            />

            <motion.div
                animate={{ y: -(activeIndex * window.innerHeight) }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
                className="w-full"
            >
                <Section id="home" title="환경을 위한 실천" bgColor="bg-white">
                    <p className="text-xl text-gray-600 mb-10">버려지는 폐화분 관리, 환경실천연합회가 함께합니다.</p>
                    <button className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-xl cursor-pointer">
                        프로젝트 시작하기
                    </button>
                </Section>

                <Section id="about" title="사업 소개" bgColor="bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 font-bold">0{i}</div>
                                <h3 className="text-xl font-bold mb-2">지속 가능한 관리</h3>
                                <p className="text-gray-500">환경 데이터를 수집하고 분석하여 최적의 솔루션을 제공합니다.</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="activity" title="활동 소식" bgColor="bg-green-50">
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="w-full md:w-96 h-64 bg-white rounded-3xl shadow-lg flex items-center justify-center text-gray-300">[활동 이미지]</div>
                        <div className="w-full md:w-96 h-64 bg-white rounded-3xl shadow-lg flex items-center justify-center text-gray-300">[활동 이미지]</div>
                    </div>
                </Section>

                {/* 마지막 섹션: 이 섹션 안에 Footer를 넣어 함께 움직이게 합니다. */}
                <Section id="contact" title="함께 참여하세요" bgColor="bg-gray-900 text-white" isLast={true}>
                    <p className="text-gray-400 mb-10 text-lg">지구를 지키는 작은 실천, 지금 바로 시작할 수 있습니다.</p>
                    <div className="flex gap-4 justify-center mb-32 text-gray-900">
                        <input type="email" placeholder="이메일 주소 입력" className="px-6 py-4 rounded-xl w-64 focus:outline-none" />
                        <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 cursor-pointer">구독하기</button>
                    </div>
                </Section>
            </motion.div>

            {/* 인디케이터 */}
            <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                {sectionIds.map((id, index) => (
                    <button
                        key={id}
                        onClick={() => moveSection(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border-2 cursor-pointer border-white shadow-sm ${
                            activeIndex === index ? 'bg-green-500 scale-150' : 'bg-gray-300'
                        }`}
                        title={id}
                    />
                ))}
            </nav>
        </div>
    );
}

export default App;