// 메인페이지 섹션 컴포넌트

import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Section = ({ id, children, bgColor, title, isLast, className }) => (
    <motion.section 
        id={id} 
        className={`w-full flex flex-col items-center ${bgColor} ${isLast ? 'min-h-screen pt-32' : 'h-screen justify-center'} ${className || ''}`}
    >
        <div className="text-center px-4 flex flex-col justify-center w-full">
            {title && <motion.h2 className="text-4xl md:text-6xl font-black mb-8">{title}</motion.h2>}
            <motion.div className="w-full">{children}</motion.div>
        </div>
        {isLast && <Footer />}
    </motion.section>
);

export default Section;