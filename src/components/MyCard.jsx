
import Button from 'react-bootstrap/Button';

const MyCard = ({ imageUrl, name, description, children }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default MyCard;
