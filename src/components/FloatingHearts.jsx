const hearts = [
  { left: "78%", top: "14%", size: 28, rot: 14,  color: "#FF8FAA", op: 0.9 },
  { left: "10%", top: "36%", size: 22, rot: -18, color: "#E8466F", op: 0.8 },
  { left: "85%", top: "50%", size: 18, rot: 10,  color: "#FFB3C4", op: 1 },
  { left: "15%", top: "66%", size: 16, rot: -10, color: "#FF8FAA", op: 0.8 },
];

export default function FloatingHearts() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      {hearts.map((h, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          style={{
            position: "absolute",
            left: h.left,
            top: h.top,
            width: h.size,
            height: h.size,
            transform: `rotate(${h.rot}deg)`,
            opacity: h.op,
            animation: `float ${4 + i}s ease-in-out infinite`,
          }}
        >
          <path
            d="M12 21C5 16.5 2 12.8 2 9a5 5 0 0 1 10-1.5A5 5 0 0 1 22 9c0 3.8-3 7.5-10 12z"
            fill={h.color}
          />
        </svg>
      ))}
    </div>
  );
}