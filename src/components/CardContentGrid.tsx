import { CardContentGridProps } from '@/types/blocks';
import Image from 'next/image';
import React from 'react';


export const CardContentGrid: React.FC<CardContentGridProps> = ({
  preTitle,
  title,
  description,
  cards,
}) => {
  return (
    <section className="mx-auto max-w-screen-2xl bg-background px-5 py-20 text-foreground md:px-8">
    
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm  text-blue-400">{preTitle}</p>
          <h2 className="mt-2  text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards?.map((card) => (
            <div key={card.id} className="bg-transparent p-6">
              <div className="mb-4 flex">
                <Image src={`${card.icon}.svg`}  width={24} height={24} alt={card.icon}/>
               
              </div>
              <h3 className="mb-2 text-base">{card.title}</h3>
              <p className="text-sm text-muted">{card.description}</p>
            </div>
          ))}
       
      </div>
    </section>
  );
};

