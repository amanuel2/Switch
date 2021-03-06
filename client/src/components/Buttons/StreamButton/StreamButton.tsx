import React from 'react'

import "./StreamButton.css";
import { useState, Suspense } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { useSmoothTransform } from "../../../util/anim/stream_button/use-smooth-transform";
import { transition } from "../../../util/anim/stream_button/settings";
import { Shapes } from '../../../util/anim/stream_button/shapes';
import useMeasure from "react-use-measure";

import { useRef, useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";


const StreamButton = () => {

    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const resetMousePosition = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
            <MotionConfig transition={transition}>
                    <motion.button
                        ref={ref}
                        initial={false}
                        animate={isHover ? "hover" : "rest"}
                        whileTap="press"
                        variants={{
                            rest: { scale: 0.7 },
                            hover: { scale: 0.9 },
                            press: { scale: 0.8 }
                        }}
                        onHoverStart={() => {
                            resetMousePosition();
                            setIsHover(true);
                        }}
                        onHoverEnd={() => {
                            resetMousePosition();
                            setIsHover(false);
                        }}
                        onTapStart={() => setIsPress(true)}
                        onTap={() => setIsPress(false)}
                        onTapCancel={() => setIsPress(false)}
                        onPointerMove={(e) => {
                            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                        }}
                        className="stream_motion_button"
                    >
                        <motion.div
                        className="shapes"
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 }
                        }}
                        >
                        <div className="pink blush" />
                        <div className="blue blush" />
                        <div className="container">
                            <Suspense fallback={null}>
                            <Shapes
                                isHover={isHover}
                                isPress={isPress}
                                mouseX={mouseX}
                                mouseY={mouseY}
                            />
                            </Suspense>
                        </div>
                        </motion.div>
                        <motion.div
                        variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                        className="label"
                        >
                        Go Live
                        </motion.div>
                    </motion.button>
        </MotionConfig>
    )
}

export default StreamButton
