import image from "../assets/images.jpeg"

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 py-4" style={{maxWidth:"330px"}}>
      <img src={src?src:image} style={{height:"170px",width:"330px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description?description.slice(0,90):"Soft drinks maker Britvic has agreed to a sweetened takeover bid of £3.28 billion ($4.2 billion) from Carlsberg, the companies said Monday."}</p>
        <a href={url} className="btn btn-primary">Read More...</a>
      </div>
    </div>
  );
}

export default NewsItem;
