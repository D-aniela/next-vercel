import styles from './Navbar.module.css'
import ActiveLink from './ActiveLink'

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
]

const Navbar = () => {
  return (
    <div>
      <div className={styles['menu-container']}>
        <nav>
          {menuItems.map((m, index) => 
             <ActiveLink key={index} text={m.text} href={m.href} />
          )}
        </nav>
      </div>
    </div>
  )
}

export default Navbar
