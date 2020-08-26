import React from "react";
import { auth } from "../../shared/firebase";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="box">
      <div>Perfil</div>

      <Link to="/" onClick={() => auth.signOut()}>
        <button>Salir</button>
      </Link>
    </div>
  );
};
