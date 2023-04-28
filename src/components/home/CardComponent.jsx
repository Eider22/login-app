const CardComponent =({item})=>{
    return (
        <div className="col">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img src={item.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text"><strong>Developed by:</strong> {item.developer}</p>
            </div>
          </div>
        </div>
      );
}

export default CardComponent;
