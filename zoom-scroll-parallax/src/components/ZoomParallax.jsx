"use client";

import Image from 'next/image';
import styles from './styles.module.scss';
import Picture1 from '../../public/assets/Picture1.png';
import Picture2 from '../../public/assets/Picture2.png';
import Picture3 from '../../public/assets/Picture3.png';
import Picture4 from '../../public/assets/Picture4.png';
import Picture5 from '../../public/assets/Picture5.png';
import Picture6 from '../../public/assets/Picture6.png';
import Picture7 from '../../public/assets/Picture7.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';


export default function ZoomParallax() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const Pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale6,
    },
    {
      src: Picture3,
      scale: scale9,
    },
    {
      src: Picture4,
      scale: scale9,
    },
    {
      src: Picture5,
      scale: scale8,
    },
    {
      src: Picture6,
      scale: scale6,
    },
    {
      src: Picture7,
      scale: scale6,
    },
  ];

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.sticky}>
        {Pictures.map(({ src, scale }, index) => (
          <motion.div style={{ scale: scale }} className={styles.el} key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                layout="fill"
                alt="Image"
                placeholder="blur"
                className={styles.img}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
