import style from "../../styles/rightcontent.module.css";
import boxes from "../../assets/rightcontent.png";
import {Sparkles} from 'lucide-react';
const Rightcontent = () => {
  return (
    <div className={style.rightcontainer}>
      <img src={boxes} className={style.backimg}/>
      {/* section 1 */}
      <div className={style.cirimg}>
        <div className={style.avatar}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3y4U4XKGjcMn4mX7YzPnHNYbi53QHpbr_rQ&s"/>
        </div>
        <div className={style.avatar}>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"/>
        </div>
        <div className={style.avatar}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuzlra-Aoxy8v5dG2yfiF8lcCyPH6pieF9g&s"/>
        </div>
      </div>
      {/* section 2 */}
      <div className={style.sec2btn}>
        <div>
        <button className={style.colorbtn}>BUILD</button>
        </div>
        <div>
         <button><span className={style.dot}></span>TRAIN</button>
        </div>
        <div>
         <button className={style.colorbtn}>DEPLOY</button>
        </div>
      </div>
      {/* section 3 */}
      <div className={style.sec3}>
        <input type="text" placeholder="How can I help? Please explain" className={style.sec3input}/>
        <div className={style.sec3btn}>
          <button><img src="https://img.icons8.com/ios_filled/1200/stackoverflow.jpg" className={style.sec3stackoverflow}/>Model Training</button>
          <button><Sparkles size={35}/>Automation</button>
        </div>
      </div>
      {/* section 4 */}
      <div className={style.companyimg}>
        <div className={style.companyimgframe}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolitUhvLnU-yiE1vGE5s6W3S8EimwLXW-YQ&s"/>
        </div>
        <div className={style.companyimgframe}>
         <img src="https://www.pngkey.com/png/full/235-2350323_white-icon-office-365-png-white-icon-azure.png"/>
        </div>
         <div className={style.companyimgframe}>
          <img src="https://dslntlv9vhjr4.cloudfront.net/bowls_images/OfuBvuRRjL7gy.jpg"/>
         </div>
          <div className={style.companyimgframe}>
          <img src="https://img.icons8.com/androidL/200/FFFFFF/google-cloud-platform.png"/>
         </div> 
      </div>
      
    </div>
  )
}

export default Rightcontent
