
import styles from '@/app/styles/navbar.module.css'
import Link from "next/link";

const Nav = props => {
    return (
       <nav  >
           <div  >
               <ul className={styles.navbarList}>
                   <li className={styles.navbarItem}>
                       <Link   href="#"

                       >Home</Link>
                   </li>
                   <li className={styles.navbarItem}>
                       <Link   href="/about"

                       >About</Link>
                   </li>
                   <li className={styles.navbarItem}>
                       <Link

                           href="/movie">Movie</Link>
                   </li>
                   <li className={styles.navbarItem}>
                       <Link

                           href="/contact">Contact</Link>
                   </li>
               </ul>

               {/*/!* //nav icon *!/*/}
               {/*<div className={styles['mobile-navbar-btn']}>*/}
               {/*    <CgMenu*/}
               {/*        name="menu-outline"*/}
               {/*        className={styles['mobile-nav-icon']}*/}
               {/*        onClick={() => setOpenMenu(true)}*/}
               {/*    />*/}
               {/*    <CgCloseR*/}
               {/*        name="close-outline"*/}
               {/*        className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}*/}
               {/*        onClick={() => setOpenMenu(false)}*/}
               {/*    />*/}
               {/*</div>*/}
           </div>
       </nav>
    );
};

Nav.propTypes = {

};

export default Nav;