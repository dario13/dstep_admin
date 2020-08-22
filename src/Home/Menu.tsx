import React from "react";
import { MenuButton } from "./MenuButton";
import { NavLink } from "react-router-dom";

export const Menu: React.FC = () => {
  return (
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <NavLink activeClassName="is-active" to={"/dashboard"}>
            <MenuButton name="Tablero" />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to={"/accounts"}>
            <MenuButton name="Cuentas" />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to={"/stock"}>
            <MenuButton name="Stock" />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to={"/sales"}>
            <MenuButton name="Ventas" />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to={"/transactions"}>
            <MenuButton name="Movimientos" />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" to={"/profile"}>
            <MenuButton name="Perfil" />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
