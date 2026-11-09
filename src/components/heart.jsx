import heart from "../assets/heart-png.png";
export default function Heart() {
  return (
    <>
    <img src={heart} style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)", width: "350px", height: "350px", zIndex: 2, opacity:"0.8"}} />
    </>
  );
}