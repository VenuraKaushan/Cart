import React, { useState } from 'react';
import bed from '../assets/bed.svg';
import night from '../assets/night.svg';
import adult from '../assets/adults.svg';
import child from '../assets/child.svg';
import park from '../assets/parking.svg';
import pet from '../assets/pets.svg';
import Modal from './modal'; 
import '../style/serviceCardStyle.css';

interface ServiceCardProps {
  property_name: string;
  property_code: string;
  check_in: string;
  check_out: string;
  price: number;
  website_image: string;
  bedrooms: number;
  adults: number;
  children: number;
  parking: number;
  pets: number;
  website: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  property_name,
  property_code,
  check_in,
  check_out,
  price,
  website_image,
  bedrooms,
  adults,
  children,
  parking,
  pets,
  website,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    
  };

  return (
    <div className="service-card">
      <div className="card-image">
        <img src={website_image} alt={property_name} className="image" />
      </div>
      <div className="card-content">
        <h2 className="property-name">{property_name}</h2>
        <p className="property-code">Property code: {property_code}</p>
        <p className="check-in">Check in: {check_in}</p>
        <p className="check-out">Check out: {check_out}</p>
        <div className="card-details">
          <p className="price">USD {price}</p>
          <div className="icon-container">
            <div className="icon-with-text">
              <img src={bed} alt="Beds" className="icon" />
              <span>{bedrooms}</span>
            </div>
            <div className="icon-with-text">
              <img src={night} alt="Nights" className="icon" />
              <span>Night</span>
            </div>
            <div className="icon-with-text">
              <img src={adult} alt="Adults" className="icon" />
              <span>{adults}</span>
            </div>
            <div className="icon-with-text">
              <img src={child} alt="Children" className="icon" />
              <span>{children}</span>
            </div>
            <div className="icon-with-text">
              <img src={park} alt="Parking" className="icon" />
              <span>{parking}</span>
            </div>
            <div className="icon-with-text">
              <img src={pet} alt="Pets" className="icon" />
              <span>{pets}</span>
            </div>
          </div>
          <button className="select-button" onClick={handleOpenModal}>Select</button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirm} />
    </div>
  );
};

export default ServiceCard;
