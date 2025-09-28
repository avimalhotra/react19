import Button from "./Button";

function Card({
  title = "Card Title",
  mrp = 0,
  price = 0,
  desc = "lorem ipsul dolor",
  offer = "0%",
}) {
  return (
    <section className="card">
      <span className="offer">{offer} off</span>
      <img
        src="https://placehold.co/300x200.png"
        alt="Card Image"
        className="img-resp"
      />
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>
        <del> ₹{mrp} </del> ₹{price}
      </p>
      <Button label="Wishlist" />
      <Button label="Buy Now" />
    </section>
  );
}

export default Card;
