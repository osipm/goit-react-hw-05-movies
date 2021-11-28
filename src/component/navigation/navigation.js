import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';
const Navigation = () => {
  return (
    <header className={s.navigation}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
