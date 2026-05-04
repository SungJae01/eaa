// 메인페이지 카운트업 컴포넌트

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const CountUp = ({ to, duration = 2, active }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (active) {
            count.set(0);
            const controls = animate(count, to, { 
                duration: duration, 
                ease: "easeOut" 
            });
            return controls.stop;
        }
    }, [count, to, duration, active]);

    return <motion.span>{rounded}</motion.span>;
};

export default CountUp;