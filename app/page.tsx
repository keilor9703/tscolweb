import { Deck } from "@/components/deck/deck";
import {
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  StatsSlide,
  BusinessTypesSlide,
  ModulesSlide,
  DifferentiatorsSlide,
  CapabilitiesSlide,
  DianSlide,
  CatalogSlide,
  TechSlide,
  SecuritySlide,
  PlansSlide,
  StepsSlide,
  CloseSlide,
} from "@/components/deck/slides";

export default function Home() {
  const slides = [
    <TitleSlide key="title" />,
    <ProblemSlide key="problem" />,
    <SolutionSlide key="solution" />,
    <StatsSlide key="stats" />,
    <BusinessTypesSlide key="types" />,
    <ModulesSlide key="modules" />,
    <DifferentiatorsSlide key="diff" />,
    <CapabilitiesSlide key="caps" />,
    <DianSlide key="dian" />,
    <CatalogSlide key="catalog" />,
    <TechSlide key="tech" />,
    <SecuritySlide key="security" />,
    <PlansSlide key="plans" />,
    <StepsSlide key="steps" />,
    <CloseSlide key="close" />,
  ];

  return <Deck slides={slides} />;
}
