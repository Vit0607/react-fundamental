import { NavLink } from 'react-router';
import cn from 'classnames';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn([
            styles.link,
            {
              [styles.active]: isActive
            }
          ])
        }
      >
        Главная
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          cn([
            styles.link,
            {
              [styles.active]: isActive
            }
          ])
        }
      >
        О сайте
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          cn([
            styles.link,
            {
              [styles.active]: isActive
            }
          ])
        }
      >
        Посты
      </NavLink>
    </div>
  );
};

export default Navbar;
