export default function Service(props) {
  return (
    <div className="service">
      <img src={props.image} className="service--img"></img>
      <h5 className="service--title">{props.title}</h5>
      <p className="service--content">{props.content}</p>
    </div>
  );
}
