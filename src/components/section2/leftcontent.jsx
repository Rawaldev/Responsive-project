import style from"../../styles/leftcontent.module.css";
import Leftcontant from "../../assets/leftcontant.png";
import {Star,ArrowUpRight} from "lucide-react"
const Leftcontent = () => {
  return (
    <div className={style.main}>
      {/* section 1 */}
      <div>
         <div className={style.topcontant}>
            <div><img src={Leftcontant} className={style.topimg}/></div>
            <div><h5>2.4M+User</h5><p>Read Our Success Stories</p></div>
         </div>
          <h1>Agents</h1>
      </div>
      <hr />
      {/* section 2 */}
      <div className={style.mid}>
         <div><p>Deep insights,creative velocity, and full execution <br />All powered by one powerfull agent.</p></div>
         <div className={style.midflex}>
           <div className={style.avatar}><img src="https://stylesatlife.com/wp-content/uploads/2019/09/Hairstyles-for-Square-Face-Men-12.jpg"/></div>
           <div><p>200% Growth On Average <br />GPT Search</p></div>
           <div className={style.midgap}><p>/ <Star size={15}/>4.9</p></div>
         </div>
      </div>
      <hr />
      {/* section 3 */}
      <div className={style.buttom}>
        <button>Download-it's Free</button>
        <p>Our Pricing </p>
        <ArrowUpRight size={14} className={style.lucideicon}/>
      </div>
    </div>
  )
}

export default Leftcontent;
