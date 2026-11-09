import "../styles/Open.css";
import FloatingHearts from "../components/FloatingHearts";
import Circle from "../components/circle";

export default function Open() {
  return (
    <>
      <FloatingHearts style={{ zIndex: 1 }} />
      <Circle style={{ position: "relative", top: "0", left: "-35%" ,zIndex: -2, opacity: 0.9, boxShadow: "0 0 40px rgba(221, 165, 178, 0.5)" }} />
      <Circle  style={{ position: "relative", top: "50%", right: "-60%" ,zIndex: -3, background: "#98d1ec" ,opacity: 0.4, boxShadow: "0 0 40px rgba(8, 222, 218, 0.5)"}   }/>
      
      
    </>
  );
}