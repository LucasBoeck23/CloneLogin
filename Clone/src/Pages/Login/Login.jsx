import { useEffect, useState } from 'react';


import video from "../../assets/background.mp4";
import style from "./Styles.module.css";
import logo from "../../assets/LogoMinecraft2.png";
import "./Styles.module.css";

export const Login = () => {
  const [email,setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [check,setCheck] = useState(false);
  const [count,setCount] = useState(0);

  function add(){
   setCount((count) => count + 1);
  }

  useEffect(() => {
    if(email === 'LucasBoeck@hotmail.com' && password === '2308'){
    console.log(`Login Aprovado!`)
    console.log(`Usuario : ${email}`);
    console.log(`Senha : ${password}`);
    console.log(`Aceitou os Termos ? ${check}`);
  }else{
    console.log('Login Inválido, tente novamente!')
  }
  },[count]);

  function validacheck(){
   setCheck(!check)
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
          <input
            onChange={e => setEmail(e.target.value)}
            className={style.formulario}
            type="text"
            placeholder=" Ex: GuguTremBalaGamer777"
          />
          <p>Password</p>
          <input
            onChange={e => setPassword(e.target.value)}
            className={style.formulario}
            type="text"
            placeholder=" Ex: GuguBalaFina"
          />

          <div className={style.checkbox}>
            <input className={style.check} id='checkbox' type="checkbox" name="remember" onClick={validacheck}/>
            <p>Lembre de mim</p>
          </div>

          <button className={style.botao} onClick={add}>
            <strong>LOG IN</strong>
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
