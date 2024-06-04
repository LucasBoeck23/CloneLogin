import { useEffect, useState } from "react";

import video from "../../assets/images/background.mp4";
import style from "./Styles.module.css";
import logo from "../../assets/images/LogoMinecraft2.png";
import { Input } from '../../assets/components/input/index.jsx';
import { Button } from '../../assets/components/button/index.jsx';
import "./Styles.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [count, setCount] = useState(0);

  function add() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    if (count >= 1) {
      if (email === "LucasBoeck@hotmail.com" && password === "2308") {
        console.log(`Login Aprovado!`);
        console.log(`Usuario : ${email}`);
        console.log(`Senha : ${password}`);
        console.log(`Aceitou os Termos ? ${check}`);
        window.alert(`Bem Vindo!`);
      } else {
        window.alert("Login Inválido, tente novamente!");
      }
    }
  }, [count]);

  function validacheck() {
    setCheck(!check);
  }

  return (
    <>
      <div className={style.conteiner}>
        <video className={style.video} src={video} loop muted autoPlay></video>
        <div className={style.logo}>
          <img src={logo} alt="logo do Minecraft" />
        </div>

        <div className={style.content}>
          <p>Username</p>
        <Input
          onChange={(e)=>
          setEmail(e.target.value)}
          type="text"
          placeholder="Ex: GuguTremBala@Gmail.com"/>

          <p>Password</p>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder=" Ex:Fofuria"
          />

          <div className={style.checkbox}>
            <input
              className={style.check}
              id="checkbox"
              type="checkbox"
              name="remember"
              onClick={validacheck}
            />
            <p>Lembre de mim</p>
          </div>

          <Button onClick={add} titulo={"LOG IN"} />

        </div>
      </div>
    </>
  );
};
export default Login;
