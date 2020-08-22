import React from "react";
import { MenuButton } from "./MenuButton";

export const Menu: React.FC = () => {
  const [buttonActived, setButtonActived] = React.useState<string>("");
  const handleClick = (id: string) => {
    setButtonActived(id);
  };

  console.log(buttonActived);

  return (
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <MenuButton
            name="Tablero"
            active={buttonActived === "Tablero"}
            href="#"
            handleClick={handleClick}
          />
        </li>
        <li>
          <MenuButton
            name="Cuentas"
            active={buttonActived === "Cuentas"}
            href="#"
            handleClick={handleClick}
          />
        </li>
        <li>
          <MenuButton
            name="Stock"
            active={buttonActived === "Stock"}
            href="#"
            handleClick={handleClick}
          />
        </li>
        <li>
          <MenuButton
            name="Ventas"
            active={buttonActived === "Ventas"}
            href="#"
            handleClick={handleClick}
          />
        </li>
        <li>
          <MenuButton
            name="Movimientos"
            active={buttonActived === "Movimientos"}
            href="#"
            handleClick={handleClick}
          />
        </li>
        <li>
          <MenuButton
            name="Perfil"
            active={buttonActived === "Perfil"}
            href="#"
            handleClick={handleClick}
          />
        </li>
      </ul>
    </aside>
  );
};
