import Link from 'next/link'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
          <div className={classes.logo}>React</div>
          <nav className={classes.links}>
              <ul className={classes.tags}>
                  <li className={classes.list}>
                      <Link href='/'>All Meetups</Link>
                  </li>
                  <li className={classes.list}>
                    <Link href='/new-meetup'>Add New Meetup</Link>
                  </li>
              </ul>
          </nav>
        </header>
    )
} 

export default MainNavigation