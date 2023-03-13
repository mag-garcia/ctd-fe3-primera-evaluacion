import style from './Card.module.css'

//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario 

const Card = ({userData}) => {
 return(
  <div className={style.Wrapper}>
    <h1 >Bienvenido {userData.username}!!!</h1>
    <h2 >La contraseña que ingresaste tiene:  {userData.password.length} caracteres!!!</h2>
  </div>
 )
}

export default Card