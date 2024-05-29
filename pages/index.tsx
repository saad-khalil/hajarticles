import Image from "next/image";
import {Inter} from "next/font/google";
import {useEffect, useRef} from "react";
import styles from "@/styles/index.module.css"
import {motion, useScroll, useTransform,} from "framer-motion";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    const initialMaskSize = .8;

    const targetMaskSize = 70;

    const container = useRef(null);

    const stickyMask = useRef(null);

    useEffect( () => {

        requestAnimationFrame(animate)

    }, [])


    const animate = () => {

        const maskSizeProgress = targetMaskSize * getScrollProgress();


        // @ts-ignore
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";

        requestAnimationFrame(animate)

    }



    const getScrollProgress = () => {

        // @ts-ignore
        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)

        return scrollProgress

    }
    return (
   <main className={styles.main}>
           <div ref={container} className={styles.container}>
               <div ref={stickyMask} className={styles.stickyMask}>
                   <video autoPlay muted loop className="w-full">
                       <source src="/intro.mp4" type="video/mp4"/>
                   </video>
               </div>
           </div>
   </main>
    )
}
