import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}>
          <NavLink
            to="/profile"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Profile
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Messages
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/news"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            News
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/music"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Music
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/settings"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Settings
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink
            to="/Friends"
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
