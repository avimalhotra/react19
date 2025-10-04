// export default function Button(props) {
//   return <button type={props.type} className="btn">{props.label}</button>;
// }

export default function Button({ type = "button", label = "Button" }) {
  return (
    <button type={type} className="btn">
      {label}
    </button>
  );
}
