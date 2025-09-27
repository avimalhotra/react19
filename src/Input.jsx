export default function Input({
  type = "text",
  id,
  name,
  min,
  max,
  maxlength,
  size = 20,
}) {
  return (
    <input
      className="input"
      type={type}
      id={id}
      name={name}
      min={min}
      max={max}
      maxLength={maxlength}
      size={size}
    />
  );
}
