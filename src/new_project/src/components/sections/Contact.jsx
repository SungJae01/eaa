// 메인페이지 '참여하기' 섹션 컴포넌트

import React from 'react';
import Section from '../Section';

const Contact = () => {
    return (
        <Section id="contact" title="함께 참여하세요" bgColor="bg-gray-900" isLast={true} className="text-white">
            <p className="text-gray-400 mb-10 text-lg">지구를 지키는 작은 실천, 지금 바로 시작할 수 있습니다.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-32 text-gray-900">
                <input 
                    type="email" 
                    placeholder="이메일 주소 입력" 
                    className="px-6 py-4 rounded-xl w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-green-500" 
                />
                <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors cursor-pointer">
                    구독하기
                </button>
            </div>
        </Section>
    );
};

export default Contact;