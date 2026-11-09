export default function Circle({
  size = 300,
  color = "#FFD9E2",
  opacity = 1,
  border,
  style = {},
  className = "",
  children,
  ...rest
}) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        opacity,
        border,
        flexShrink: 0,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}