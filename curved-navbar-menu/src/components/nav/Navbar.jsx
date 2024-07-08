import { menuSlide } from '../animation'
import Curve from './curve/Curve'
import Footer from './footer/Footer'
import NavLink from './navLink/NavLink'
import styles from './styles.module.scss'
import { motion } from 'framer-motion'

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => (
            <NavLink data={{ ...item, index }} key={index} />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}