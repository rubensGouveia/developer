import { Brands } from "@/components/Brands";
import { CardContentGrid } from "@/components/CardContentGrid";
import { CenteredCTA } from "@/components/CenteredCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroVideo } from "@/components/HeroVideo";
import { Modules } from "@/components/Modules";
import { fetchGlobalData, fetchPageData } from "@/lib/fetchData";
import { Block } from "@/types/blocks";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>
}
function BlockRenderer(block: Block) {
 
  switch (block.__component) {
    case "sections.hero-video":
      return <HeroVideo key={block.id} {...block} />;
    case "sections.brands":
      return <Brands key={block.id} {...block} />;
    case "sections.card-content-grid":
      return <CardContentGrid key={block.id} {...block} />;
    case "sections.modules":
      return <Modules key={block.id} {...block} />;
    case "sections.centered-cta":
      return <CenteredCTA key={block.id} {...block} />;
    default:
      return null;
  }
}
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const locale = (await params).locale ?? 'en'
 
  const globals = await fetchGlobalData(locale);
  const {metadata} = globals
  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    robots: metadata.robots
  }
}
export async function generateStaticParams() {
  const data = await fetchPageData('en')
  const locales =data[0].alternates.map(alternate => alternate.path.replace(/\//g,'')).filter(locale => !!locale)
 
  return locales.map((locale) => ({
    locale
  }))
}

export default async function Page({ params }: { params: Promise<{ locale: string }>}) {
  const {locale} = await params;
  const data = await fetchPageData(locale);
  const globals = await fetchGlobalData(locale);
  const {menu,footerMenu,copyright,social,helpText}= globals
  const blocks = data[0]?.contentSections
  if (!blocks) return null;
  return <div>
    <Header menus={menu} />
    <>
    {blocks ? blocks.map((block: any) => BlockRenderer(block)) : null}
    </>
    <Footer footerMenu={footerMenu} helpText={helpText} copyright={copyright} social={social} locale={globals.locale} alternate={data[0].alternates}/>
  </div>;
}
