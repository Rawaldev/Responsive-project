import Header from "../components/section1/header.jsx";
import Footer from "../components/section1/footer.jsx";
import Leftcontent from "../components/section2/leftcontent.jsx";
import Rightcontent from "../components/section2/rightcontent.jsx";
import style from "../styles/home.module.css";

const Home = () => {
  return (
    <div>
      <Header/>
      <div className={style.midcontant}>
        <Leftcontent/>
        <Rightcontent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;
