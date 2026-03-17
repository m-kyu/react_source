//  FramaMotion.jsx

import * as motion from "motion/react-client"
import {variants} from '../motion'

export default function FramaMotion() {
    
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}
            />

            <motion.p 
                style={box}
                variants={variants}
                initial="initial"
                animate="animate"
                drag="y"
            >
                content...
            </motion.p>

        </>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#161219",
    borderRadius: 5,
}

