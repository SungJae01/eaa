import React from 'react';
import logo from '../assets/logo.png'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ activeSection, onMenuClick }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { id: 'home', label: '홈' },
        { id: 'about', label: '사업소개' },
        { id: 'activity', label: '활동소식' },
        { id: 'contact', label: '참여하기' },
    ];

    // 메뉴 클릭 핸들러
    const handleNavClick = (e, index, id) => {
        e.preventDefault();

        // 현재 경로가 메인('/')이 아니면 메인으로 먼저 이동 후 스크롤
        if (location.pathname !== '/') {
            navigate(`/#${id}`);
            return;
        }

        // 1. App.jsx에서 내려받은 스크롤 함수 실행
        onMenuClick(index); 
        
        // 2. 주소창 주소 업데이트 (페이지 튕김 없는 pushState 방식 권장)
        window.history.pushState(null, null, `#${id}`);
    };
    
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                {/* 로고 클릭 시 홈으로 이동 및 주소창 초기화 */}
                <img 
                    src={logo} 
                    alt="환경실천연합회 로고" 
                    className="h-6 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={(e) => handleNavClick(e, 0, 'home')} 
                />
                
                <nav className="flex space-x-10">
                    {menuItems.map((item, index) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleNavClick(e, index, item.id)}
                            className={`text-sm font-bold transition-colors duration-300 ${
                                activeSection === item.id ? 'text-green-600' : 'text-gray-500 hover:text-green-600'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    
                    {/* 공지사항 같은 독립 페이지는 Link 컴포넌트 유지 */}
                    <Link to="/notice"
                        className="text-sm text-gray-500 font-bold transition-colors duration-300 hover:text-green-600"
                    >
                        공지사항
                    </Link>
                </nav>

                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors duration-300">
                    함께하기
                </button>
            </div>
        </header>
    );
};

export default Header;