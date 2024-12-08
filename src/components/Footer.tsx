
import Image from "next/image";
import { Alternate,  LocaleType, Menu, Social } from "@/types/fetchData.types";

import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";
import { Separator } from "@radix-ui/react-select";

interface FooterProps {
  footerMenu: Menu[];
  social: Social;
  helpText: string;
  copyright: string;
  alternate: Alternate[]
  locale: LocaleType
}

export const Footer: React.FC<FooterProps> = ({ copyright, footerMenu, helpText, social, alternate, locale }) => {
   
  
  return (
    <footer className="bg-transparent py-8 text-white md:py-20">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-12 px-6 sm:px-6 lg:px-16">
        <div className="flex justify-between">
          <div className="flex flex-col gap-6" >
            <div>

            <Image className="mb-2 " src="brand.svg" width={158} height={32} alt="Company Logo" />
            <h6 className="text-base text-muted">{helpText}</h6>
            </div>
            <LanguageSelector alternate={alternate} locale={locale} />
            <div className="flex gap-6">
              {Object.entries(social).map((item) => (
                <Link key={item[0]} href={item[1]} target="_blank">
                  <Image src={`${item[0]}.svg`} width={24} height={24} alt={item[0]} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-12">
            {footerMenu.map(menu =>(<div key={menu.id} className="flex w-40 flex-col gap-5">
                <h3 className="uppercase text-foreground opacity-40">{menu.title}</h3>
                {menu?.dropdown?.map(item =>(<Link key={item.id} href={item.link} target={item.openNewWindow ? '_blank' : '_self'} className="text-foreground opacity-60 hover:opacity-80">{item.title}</Link>))}

            </div>))}
          </div>
        </div>
        <Separator  className="border-t border-muted" />
        <div className="flex justify-between">
            <span className="opacity-40">{copyright}</span>
            <div>
            <span className="opacity-40">Status </span><span className="text-[#0AFFA7] opacity-100">•  All systems are normal</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
