import { HeroVideoProps } from "@/types/blocks";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { PlayIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from "next/image";

export const HeroVideo: React.FC<HeroVideoProps> = ({
  title,
  description,
  buttons,
  demo,
  background,
}) => {
  return (
    <section
      className="relative bg-black px-5 py-10 pt-16 text-white md:h-[700px] md:py-20 md:pt-32"
      style={{
        backgroundImage: `url(${background.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto flex max-w-2xl  flex-col gap-4 text-center">
        <h1 className="mb-4 text-pretty text-5xl leading-none md:text-[52px]">{title}</h1>
        <p className="mb-4 text-lg text-muted ">{description}</p>

        <span className="block text-left text-xs text-muted">Try now</span>
        <Card className="mb-8 grid grid-cols-[0.5fr_3fr_1px_2fr] items-center justify-center gap-6 rounded-xl bg-transparent px-6 py-3 md:grid-cols-[0.5fr_4fr_1px_1fr] ">
          <div className="flex size-12 items-center justify-center rounded-full bg-white">
            <PlayIcon fill="black" className="size-7 cursor-pointer hover:opacity-85" />
          </div>

          <div className="relative h-16 grow" >
            <Image src="/audiowaves.svg" alt="audiowaves" fill />
          </div>

          <audio controls className="sr-only w-full min-w-11 max-w-md">
            <source src={demo.url} type={demo.format} />
            Your browser does not support the audio element.
          </audio>
          <Separator orientation="vertical" className="h-16 border-muted" />
          <span className="shrink text-sm text-foreground">Upload your own track</span>
        </Card>

        <div className="flex justify-center space-x-4">
          {buttons.map((button) => (
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
      </div>
    </section>
  );
};
