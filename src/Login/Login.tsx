import React from "react";
import { auth } from "../shared/firebase";
import { useHistory, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const Login = () => {
  const history = useHistory();
  const [loginError, setLoginError] = React.useState(false as boolean);
  const [loading, setLoading] = React.useState(false as boolean);
  const [rememberMe, setRememberMe] = React.useState(true as boolean);

  const handleLogin = React.useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      const { email, password } = event.target.elements;
      try {
        await auth.signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        setLoading(false);
        setLoginError(true);
      }
    },
    [history]
  );

  const { currentUser } = React.useContext(AuthContext);

  const loggedUser = () => {
    return currentUser ? <Redirect to="/home" /> : printLoginPage();
  };

  const printLoginPage = () => {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-black">Login</h3>
              <hr className="login-hr"></hr>
              <p className="subtitle has-text-black">
                Inicie sesión para comenzar.
              </p>
              <div className="box">
                <figure className="avatar">
                  <img alt="logo" src="logo128x128.png"></img>
                </figure>
                <form onSubmit={handleLogin}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={() => setLoginError(false)}
                      ></input>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        onChange={() => setLoginError(false)}
                      ></input>
                    </div>
                  </div>

                  <div className="field">
                    <input
                      id="switchRememberMe"
                      type="checkbox"
                      className="switch is-rounded is-info"
                      onChange={() => {
                        setRememberMe(!rememberMe);
                      }}
                      defaultChecked={rememberMe}
                    ></input>
                    <label htmlFor="switchRememberMe">
                      {rememberMe ? "Recordarme" : "No recordarme"}
                    </label>
                  </div>
                  {loginError && (
                    <p className="has-text-danger">
                      Email o contraseña incorrecto
                    </p>
                  )}
                  <button
                    type="submit"
                    className={
                      "button is-block is-info is-large is-fullwidth " +
                      (loading && "is-loading")
                    }
                  >
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return loggedUser();
};
