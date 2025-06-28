import Login from "../Components/Login"
import SignUp from "../Components/SignUp"
import React from "react"

import { motion } from 'motion/react';

export default function Landing() {

    let [newUser, setNewUser] = React.useState(false);

    return (
        <>
            <div className="bg w-screen h-screen bg-[#252525] box-border overflow-hidden">
                <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(135deg,_#1e1e1e00,_#131313)] z-1"></div>
                <img src="/landing-background.svg" className="absolute top-0 left-0 object-cover bg-[#252525] w-full h-full" />
            </div>
            {/* {newUser ?
                <motion.div className="signup-component">
                    <SignUp setNewUser={setNewUser} />
                </motion.div>
                :
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="login-component">
                    <Login setNewUser={setNewUser} />
                </motion.div>
            } */}

            <div className="perspective-[1000] h-135 w-100 z-2 absolute top-[50%] transform -translate-y-[50%] right-[50%] translate-x-[50%] md:translate-x-[0] md:right-[10%] lg:right-[15%]">
                <motion.div
                    className="w-full h-full preserve-3d relative transition-transform duration-700"
                    animate={{ rotateY: newUser ? 180 : 0 }}
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
            </div>
        </>
    )
}
