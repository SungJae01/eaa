import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

// 섹션 및 페이지 임포트
import Home from './components/sections/Home';
import About from './components/sections/About';
import Activity from './components/sections/Activity';
import Contact from './components/sections/Contact';
import Sitemap from './pages/Sitemap'; 
import Notice from './pages/Notice';
import ActivityDetail from './pages/ActivityDetail';

function MainPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [vh, setVh] = useState(window.innerHeight);
    const sectionIds = ['home', 'about', 'activity', 'contact'];
    const isScrolling = useRef(false);
    
    const location = useLocation();
    const navigate = useNavigate();

    // 섹션 이동 함수
    const moveSection = (index) => {
        if (index < 0 || index >= sectionIds.length || isScrolling.current) return;
        
        isScrolling.current = true;
        setActiveIndex(index);

        // 주소창의 Hash 업데이트 (페이지 튕김 방지를 위해 pushState 사용)
        const targetId = sectionIds[index];
        window.history.pushState(null, null, `#${targetId}`);

        setTimeout(() => {
            isScrolling.current = false;
        }, 1200);
    };

    // 🚀 [추가] 외부 페이지에서 해시를 들고 들어올 때 감지하는 로직
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const index = sectionIds.indexOf(hash);
            if (index !== -1 && index !== activeIndex) {
                // 렌더링 타이밍을 고려해 약간의 지연 후 이동
                setTimeout(() => moveSection(index), 100);
            }
        }
    }, [location]);

    useEffect(() => {
        const handleResize = () => setVh(window.innerHeight);
        
        const handleWheel = (e) => {
            if (isScrolling.current) return;
            
            // 마지막 섹션(Contact)에서 아래로 스크롤할 때는 스크롤이 Footer까지 내려가도록 허용
            if (activeIndex === sectionIds.length - 1 && e.deltaY > 0) return;

            e.preventDefault();
            if (e.deltaY > 0) moveSection(activeIndex + 1);
            else if (e.deltaY < 0) moveSection(activeIndex - 1);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeIndex]);

    return (
        <div className="relative">
            <Header 
                activeSection={sectionIds[activeIndex]} 
                onMenuClick={moveSection} 
            />
            
            <motion.div
                animate={{ y: -(activeIndex * vh) }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
                className="w-full"
            >
                <Home activeIndex={activeIndex} />
                <About />
                <Activity />
                <Contact />
                <Footer />
            </motion.div>

            {/* 페이지 네비게이션 인디케이터 */}
            <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                {sectionIds.map((id, index) => (
                    <button
                        key={id}
                        onClick={() => moveSection(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white shadow-md ${
                            activeIndex === index ? 'bg-green-500 scale-150' : 'bg-gray-400 opacity-50'
                        }`}
                        title={id}
                    />
                ))}
            </nav>
        </div>
    );
}

function App() {
    useEffect(() => {
        // 이미지 우클릭 방지 전역 설정
        const handleImageContextMenu = (e) => {
            if (e.target.tagName === 'IMG') e.preventDefault();
        };
        document.addEventListener('contextmenu', handleImageContextMenu);
        
        // 새로고침 시 스크롤 위치 초기화
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }

        return () => document.removeEventListener('contextmenu', handleImageContextMenu);
    }, []);

    return (
        <div className="bg-gray-50 text-gray-900 font-sans overflow-hidden">
            <Routes>
                {/* 메인 원페이지 스크롤 경로 */}
                <Route path="/" element={<MainPage />} />
                {/* 추가 페이지 경로 */}
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/activity_detail" element={<ActivityDetail />} />
            </Routes>
        </div>
    );
}

export default App;