import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import React from 'react';
import { cardsData } from '@/data/admin/admin';

const AdminSecTwo = () => {
  return (
    <div className="p-6 space-y-4">
      {/* Cards container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            className="bg-[var(--global-white-choco-color)] text-black p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg flex flex-col items-center"
          >
            {/* Card Header */}
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{card.description}</p>
              <h4 className="font-bold text-large">{card.number}</h4>
            </CardHeader>

            {/* Card Body */}
            <CardBody className="overflow-visible py-2 flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={card.image} // Now using the 'image' field
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminSecTwo;
