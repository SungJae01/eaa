import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Sitemap = () => {
    // 사이트 맵 데이터 구조화
    const sitemapData = [
        {
            title: "홈 (Main)",
            path: "/",
            icon: "🏠",
            subMenus: [
                { name: "사업소개", link: "/#about" },
                { name: "활동소식", link: "/#activity" },
                { name: "참여하기", link: "/#contact" }
            ]
        },
        {
            title: "진행중인 다른 캠페인",
            path: "/ecology",
            icon: "🌿",
            subMenus: [
                { name: "우리하천 지킴이", link: "https://ecowater.or.kr/" },
                { name: "자원순환활동", link: "https://www.ecolink.or.kr/nbe" },
                { name: "생물다양성 보호", link: "/animal" },
                { name: "대기 환경 개선", link: "https://ecolink.kr/" }
            ]
        },
        {
            title: "활동 및 참여",
            path: "/participation",
            icon: "🤝",
            subMenus: [
                { name: "공지사항", link: "/notice" },
                { name: "최신 활동 상세보기", link: "/activity_detail" },
                { name: "함께하기", link: "/volunteer" }
            ]
        },
        {
            title: "정보 및 고객지원",
            path: "/support",
            icon: "📢",
            subMenus: [
                { name: "정보광장", link: "/info" },
                { name: "오시는 길", link: "/#contact" },
                { name: "사이트맵", link: "/sitemap" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* 고정 헤더와의 간격을 위해 pt-24 적용 */}
            <Header activeSection="sitemap" />
            
            <main className="flex-1 pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* 상단 타이틀 영역 */}
                    <div className="mb-36 border-l-8 border-green-500 pl-6">
                        <h1 className="text-4xl font-black text-gray-800 mb-2">사이트맵</h1>
                        <p className="text-gray-500 text-lg">환경실천연합회의 모든 서비스를 한눈에 확인하세요.</p>
                    </div>

                    {/* 사이트맵 그리드 레이아웃 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sitemapData.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group"
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>
                                <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                                    {category.title}
                                </h2>
                                
                                <ul className="space-y-4">
                                    {category.subMenus.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <Link 
                                                to={sub.link}
                                                className="text-gray-500 hover:text-green-600 hover:translate-x-2 transition-all flex items-center gap-2 text-sm md:text-base font-medium"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-green-400 transition-colors" />
                                                {sub.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Sitemap;