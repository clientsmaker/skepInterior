import React from 'react';
import client1 from '../../assets/Images/client1.jpeg';
import client2 from '../../assets/Images/client2.jpeg';
import client3 from '../../assets/Images/client3.jpeg';
import client4 from '../../assets/Images/client4.jpeg';
import client6 from '../../assets/Images/client6.jpeg';
import client7 from '../../assets/Images/client7.jpeg';
import client5 from '../../assets/Images/client8.jpeg';
import client8 from '../../assets/Images/client5.jpeg';
import client9 from '../../assets/Images/client9.jpeg';
import client10 from '../../assets/Images/client10.jpeg';
import client11 from '../../assets/Images/client11.jpeg';
const ClientLogos = () => {
  const clients = [
    { name: 'Kyan', logo: client1 },
    { name: 'Kyan', logo: client2 },
    { name: 'Kyan', logo: client3 },
    { name: 'Kyan', logo: client4 },
    { name: 'Kyan', logo: client5 },
    { name: 'Kyan', logo: client6 },
    { name: 'Kyan', logo: client7 },
    { name: 'Kyan', logo: client8 },
    { name: 'Kyan', logo: client9 },
    { name: 'Kyan', logo: client10 },
    { name: 'Kyan', logo: client11 },
    { name: 'Kyan', logo: client1 },
    { name: 'Kyan', logo: client2 },
    { name: 'Kyan', logo: client3 },
    { name: 'Kyan', logo: client4 },
    { name: 'Kyan', logo: client4 },
    { name: 'Kyan', logo: client5 },
    { name: 'Kyan', logo: client6 },
    { name: 'Kyan', logo: client7 },
    { name: 'Kyan', logo: client8 },
    { name: 'Kyan', logo: client3 },
    { name: 'Kyan', logo: client4 },
    { name: 'Kyan', logo: client4 },
    { name: 'Kyan', logo: client5 },
    
    // Add more clients as needed
  ];

  return (
    <div className="bg-gray-100 py-8 lg:mb-14 m-2">
    <div className="flex items-center mb-4 px-5">
  <h2 className="text-gray-400 text-xs uppercase font-thin tracking-widest mr-2">
    Corporate&nbsp;&nbsp;Clients
  </h2>
  <div className="flex-grow border-t border-gray-300"></div>
</div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-14 opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
