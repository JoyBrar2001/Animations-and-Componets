import Link from 'next/link'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { slide } from '@/components/animation'

export default function NavLink({ data }) {
  return (
    <motion.div
      variants={slide}
      custom={data.index}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <Link href={data.href}>
        {data.title}
      </Link>
    </motion.div>
  )
}