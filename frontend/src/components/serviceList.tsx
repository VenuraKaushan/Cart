import React, { useEffect, useState } from 'react';
import ServiceCard from './serviceCard';
import axios from 'axios';

const ServiceList: React.FC = () => {
    const [services, setServices] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://skill-test.similater.website/api/v1/property/list', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response.data.data);
                setServices(response.data.data);

            } catch (error) {
                setError('Network response was not ok');
                console.error('Properties not fetched :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [accessToken]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {services.map((service: any) => (
                <ServiceCard
                    key={service.id}
                    property_name={service.property_name}
                    property_code={service.property_code}
                    check_in={service.check_in}
                    check_out={service.check_out}
                    price={service.price}
                    website_image={service.website_image}
                    bedrooms={service.bedrooms}
                    adults={service.adults}
                    children={service.children}
                    parking={service.parking}
                    pets={service.pets}
                    website={service.website}
                />
            ))}
        </div>
    );
};

export default ServiceList;
