import React from "react";
import { Menu } from "./Menu";

export const Home: React.FC = () => {
  //const [, set] = React.useState<>();

  //React.useEffect(() => {}, [])
  return (
    <section className="section is-large">
      <div className="columns is-vcentered is-mobile">
        <div className="column is-1-desktop">
          <Menu />
        </div>
        <div className="column "></div>
      </div>
    </section>
  );
};
