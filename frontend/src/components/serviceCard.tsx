import React from 'react';
import bed from '../assets/bed.svg';
import night from '../assets/night.svg';
import adult from '../assets/adults.svg';
import child from '../assets/child.svg';
import park from '../assets/parking.svg';
import pet from '../assets/pets.svg';
import './style.css'

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
            <img src={bed} alt={`${bedrooms} beds`} className="icon" />
            <img src={night} alt="Night" className="icon" />
            <img src={adult} alt={`${adults} adults`} className="icon" />
            <img src={child} alt={`${children} children`} className="icon" />
            <img src={park} alt={`${parking} parking spots`} className="icon" />
            <img src={pet} alt={`${pets} pets allowed`} className="icon" />
          </div>
          <button className="select-button">Select</button>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
