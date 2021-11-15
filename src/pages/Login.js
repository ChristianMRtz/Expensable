import { useState } from "react";
import { useHistory } from "react-router";
import { ButtonBlue, LoginStyle } from "../components/Styles";
import { LoginUser } from "../services/SessionUser";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const setData = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await LoginUser(email, password);
    if (!response) return alert("Invalid Email or Password");
    history.push("/index");
  };

  return (
    <LoginStyle>
      <h1>Welcome to Expensable</h1>
      <p className="informativeText">Please login to start using the app</p>
      <form>
        <div className="inputBox">
          <p className="textForm">Email</p>
          <input
            type="email"
            name="email"
            required="required"
            placeholder="somebody@mail.com"
            onChange={setData}
          />
        </div>
        <div className="inputBox">
          <p className="textForm">Password</p>
          <input
            type="password"
            name="password"
            required="required"
            placeholder="********"
            onChange={setData}
          />
        </div>
        <div className="inputBox">
          <ButtonBlue onClick={handleSubmit}>Login</ButtonBlue>
        </div>
      </form>
    </LoginStyle>
  );
};
