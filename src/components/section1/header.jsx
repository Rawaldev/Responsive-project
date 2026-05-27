import style from "../../styles/header.module.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.left}>
        <img src={Logo}/>
        <h4>/ Sales@agent.ai</h4>
      </div>
      <div className={style.mid}>
        <p>Product</p>
        <span className={style.dot}></span>
        <p>Solutions</p>
        <span className={style.dot}></span>
        <p>Pricing</p>
        <span className={style.dot}></span>
        <p>Developers</p>
      </div>
      <div className={style.right}>
        <h4>Log in</h4>
        <button>Get it Now - It's Free</button>
      </div>
    </div>
  )
}

export default Header;
