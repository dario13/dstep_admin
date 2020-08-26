import React from "react";
import { GiWallet } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

export type Props = {
  name: string;
};

export const MenuButton: React.FC<Props> = ({ name }) => {
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
    <div className="has-tooltip-bottom is-active" data-tooltip={name}>
      <div className="icon-menu">{iconRender(name)}</div>
    </div>
  );
};
