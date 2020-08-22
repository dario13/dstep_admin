import React from "react";
import { GiWallet } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

export type Props = {
  name: string;
  active: boolean;
  href: string;
  handleClick: (id: string) => void;
};

export const MenuButton: React.FC<Props> = ({
  name,
  active,
  href,
  handleClick,
}) => {
  const iconRender = (iconName: string) => {
    switch (iconName) {
      case "Tablero":
        return <GoDashboard />;
      case "Cuentas":
        return <GiWallet />;
      case "Stock":
        return <FiBox />;
      case "Ventas":
        return <FaHandHoldingUsd />;
      case "Movimientos":
        return <FaFileInvoiceDollar />;
      case "Perfil":
        return <AiOutlineUser />;
    }
  };
  return (
    <a
      href={href}
      className={"has-tooltip-bottom " + (active && "is-active")}
      data-tooltip={name}
      onClick={() => handleClick(name)}
    >
      <div className="icon-menu">{iconRender(name)}</div>
    </a>
  );
};
