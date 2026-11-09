
import "../styles/Open.css";
import FloatingHearts from "../components/FloatingHearts";
import Circle from "../components/circle";
import Heart from "../components/heart";
import Name from "../components/namecard";
import bear1 from "../assets/bear-holding-heart.svg"
import bear2 from "../assets/bear.svg"

export default function Open() {
  return (
    <>
      <Name/>
      <Heart/>
      <img src={bear2} style={{width:"70px", position:"absolute", top:"39%",left:"10%" }}/>
      <img src={bear1} style={{width:"70px", position:"absolute", right:"10%",top:"39%"}}/>
      <FloatingHearts style={{ zIndex: 1 }} />
      <Circle style={{ position: "relative", top: "0", left: "-30%" ,zIndex: -2, opacity: 0.9, boxShadow: "0 0 40px rgba(221, 165, 178, 0.5)" }} />
      <Circle  style={{ position: "relative", top: "50%", right: "-60%" ,zIndex: -3, background: "#98d1ec" ,opacity: 0.4, boxShadow: "0 0 40px rgba(8, 222, 218, 0.5)"}   }/>
      
    </>
  );
}