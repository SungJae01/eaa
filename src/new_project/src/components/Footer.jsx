import React from 'react';
import { Link } from 'react-router-dom';

// 이미지 자산을 상단에서 import 합니다.
import logoWatermark from '../assets/logo_watermark.png';
import iconInstagram from '../assets/icon_instargram.png';
import iconYoutube from '../assets/icon_youtube.png';
import iconKakao from '../assets/icon_kakaoch.png';
import iconNaver from '../assets/icon_naver.png';

const SocialIcon = ({ href, src, alt }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-md bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300 overflow-hidden"
    >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
    </a>
);

const Footer = () => {
    return (
        /* 1. 배경색이 끝까지 차도록 w-full과 bg색상을 여기 둡니다. */
        <footer className="w-full bg-[#111111] text-zinc-400 font-sans border-t border-zinc-800 mt-50">
            
            {/* 2. 콘텐츠가 들어갈 영역만 중앙 정렬(mx-auto)과 최대 너비(max-w-7xl)를 설정합니다. */}
            <div className="max-w-7xl mx-auto px-20 py-6">
                
                {/* 상단: 로고, 메뉴, 소셜 아이콘 */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-7 border-b border-zinc-800">
                    
                    {/* 로고 영역 */}
                    <div className="flex items-center gap-3">
                        <img src={logoWatermark} alt="환경실천연합회 로고" className="h-6 md:h-6" />
                    </div>

                    {/* 주요 메뉴 */}
                    <nav className="flex items-center gap-x-8 text-sm font-medium">
                        <Link to="/endangered-species" className="hover:text-white transition-colors">생태계교란종</Link>
                        <Link to="/threatened-species" className="hover:text-white transition-colors">멸종위기종</Link>
                        <Link to="/volunteer" className="hover:text-white transition-colors">활동참여</Link>
                        <Link to="/information" className="hover:text-white transition-colors">정보광장</Link>
                        <Link to="/sitemap" className="hover:text-white transition-colors">사이트맵</Link>
                    </nav>

                    {/* 소셜 미디어 아이콘 영역 */}
                    <div className="flex items-center gap-2.5">
                        <SocialIcon href="https://www.instagram.com/eaa_ecolink?igsh=bmNobTV0ODJobnc5" src={iconInstagram} alt="Instagram" />
                        <SocialIcon href="https://www.youtube.com/@eaa_ecolink" src={iconYoutube} alt="YouTube" />
                        <SocialIcon href="https://pf.kakao.com/_xmgQSb" src={iconKakao} alt="Kakao Channel" />
                        <SocialIcon href="https://blog.naver.com/eaa_ecolink" src={iconNaver} alt="Naver Blog" />
                    </div>
                </div>

                {/* 하단: 주소, 연락처, 카피라이트 */}
                <div className="pt-10 text-center text-[11px] md:text-xs leading-relaxed space-y-3">
                    <p className="max-w-4xl mx-auto">
                        환경부 법인설립허가 제228호 | UN 경제사회이사회 특별협의지위 취득 | UN Global Compact Active 지위 취득
                        <span className="block mt-1">
                            (06694) 서울시 서초구 효령로 43, 2층(방배동 980-26, IT타워빌딩) | TEL : 02)805-8840~2 | FAX : 02)805-8843
                        </span>
                    </p>
                    <p className="font-medium text-zinc-600 tracking-wider">
                        Copyright @ (사)환경실천연합회 ALL RIGHTS RESERVED.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;