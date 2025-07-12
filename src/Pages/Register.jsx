import Login from "../Components/Login"
import SignUp from "../Components/SignUp"
import React from "react"

import { motion } from 'motion/react';

export default function Register(props) {

    let [newUser, setNewUser] = React.useState(props.newUse);

    const [hasMounted, setHasMounted] = React.useState(false);


    React.useEffect(() => {
        setNewUser(props.newUse);
    }, [props.newUse]);

    React.useEffect(() => {
        // Triggered after first render
        setHasMounted(true);
    }, []);

    const rotation = newUser ? 180 : 0;

    return (
        <div className="absolute overflow-hidden">
            <div className="bg w-screen h-screen bg-[#252525] box-border overflow-hidden">
                <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(135deg,_#1e1e1e00,_#131313)] z-1"></div>
                <img src="/landing-background.svg" className="absolute top-0 left-0 object-cover bg-[#252525] w-full h-full" />
            </div>

            <motion.div
                initial={{ x: '5vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0,        // 1 second delay
                    duration: 0.75,   // animation duration
                    ease: 'easeOut'  // smooth easing
                }}


                className="perspective-[1000] h-135 w-100 z-2 absolute top-[50%] transform -translate-y-[50%] right-[50%] translate-x-[50%] md:translate-x-[0] md:right-[10%] lg:right-[15%]">
                <motion.div
                    className="w-full h-full preserve-3d relative"
                    initial={{ rotateY: rotation }}
                    animate={hasMounted ? { rotateY: rotation } : false}
                    transition={{ duration: 0.7 }}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* absolute right-[10%] top-[50%] transform -translate-y-[50%] z-2 translate rotate-y-180  */}
                    <div className="absolute w-full h-full backface-hidden">
                        <Login setNewUser={setNewUser} />
                    </div>

                    <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                        <SignUp setNewUser={setNewUser} />
                    </div>
                </motion.div>
            </motion.div >
        </div>
    )
}
