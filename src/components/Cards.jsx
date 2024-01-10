const Cards = ({ title, image, description, price, rating, category }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} />}
      {title && <h4 className=" cardTitle">{title}</h4>}

      <div className="rating">
        {price && <div>{price}</div>}
        {rating?.rate && (
          <div>{`${rating.rate} ⭐ (${rating.count} Reviews)`} </div>
        )}
        {/* <div>{`${rating?.rate} ⭐ (${rating?.count} Reviews)`} </div> */}
      </div>
      {/* <h5>{description}</h5> */}
    </div>
  );
};
export default Cards;
