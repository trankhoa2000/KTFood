import React from 'react';

const DishCard = ({ image, name, description, oldPrice, newPrice }) => (
  <div className="col-4 mb-4">
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="img-fluid" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted text-decoration-line-through" style={{ fontSize: '16px' }}>{oldPrice}</small>
          <span className="ms-2 " style={{ fontSize: '18px' }}>{newPrice}</span>
        </p>
        <button className="btn btn-primary">Mua Ngay</button>
        <button type="button" className="btn btn-outline-success mx-2" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Chi Tiết
        </button>
        <button className="btn btn-outline-success"> Lưu </button>
      </div>
    </div>
  </div>
);

export default DishCard;
