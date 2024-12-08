'use client'

import { useRouter } from 'next/navigation'
import { Alternate,LocaleEnum,  LocaleType,  } from "@/types/fetchData.types";


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface LanguageSelectorProps {
  alternate: Alternate[]
  locale: LocaleType
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ alternate, locale }) => {   
    const router = useRouter()
    const languageOptions = alternate.map(option => ({... option, label: LocaleEnum[option.locale] }))
    const handleValueChange=(value:LocaleType) =>{
        console.log('value', value)
        const selected = alternate.find(lang => lang.locale === value)
        router.push(selected?.path ||'/')
    }

  return (
            <Select defaultValue={locale}  onValueChange={handleValueChange}>
              <SelectTrigger className="mb-4 w-[180px]">
                <SelectValue  />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map(option =>(<SelectItem key={option.locale} value={option.locale}>{option.label}</SelectItem>))}
              
              </SelectContent>
            </Select>
           
  );
};
