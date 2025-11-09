export default function Button({ type = "button", label = "Button", x }) {
  return (
    <button type={type} className="btn">
      {x}
    </button>
  );
}
