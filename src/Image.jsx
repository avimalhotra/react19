export default function Image({ src, alt, width, height, load = "eager" }) {
  return (
    <img src={src} alt={alt} width={width} height={height} loading={load} />
  );
}
