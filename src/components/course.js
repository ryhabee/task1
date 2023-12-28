function Course({ imgSrc, title, price }) {
  return (
    <div className="grid-item">
      <img src={imgSrc} alt="" />
      <h2>{title}</h2>
      <p className="price">{price}</p>
    </div>
  );
}


export default Course;