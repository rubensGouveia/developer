
import { CenteredCTAProps } from '@/types/blocks';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export const CenteredCTA: React.FC<CenteredCTAProps> = ({ title, description, buttons }) => {
  return (
    <section className="bg-card-foreground px-5 py-20 text-white">
      <div className="mx-auto max-w-full text-center md:max-w-3xl">
        <h2 className="mb-4 text-4xl md:text-5xl">{title}</h2>
        <p className="mb-10 text-lg text-muted">{description}</p>
        {buttons?.map((button) => (
          <Button
          key={button.text}
          asChild
          rel={button.newTab ? "noopener noreferrer" : ""}
          variant={button.appearance}
        >
          <Link
            href={button.url}
            className="cursor-pointer"
            target={button.newTab ? "_blank" : "_self"}
          >
            {button.text}
          </Link>
        </Button>
         
        ))}
      </div>
    </section>
  );
};