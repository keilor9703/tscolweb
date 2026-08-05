import { Deck } from "@/components/deck/deck";
import {
  TitleSlide,
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
import {
  HookSlide,
  ChaosSlide,
  FailureStatsSlide,
  DianRiskSlide,
  NeedSlide,
  RevealSolutionSlide,
} from "@/components/deck/slides-intro";

export default function Home() {
  const slides = [
    // Portada
    <TitleSlide key="title" />,
    // ── Arco emocional: problema → necesidad ──
    <HookSlide key="hook" />,
    <ChaosSlide key="chaos" />,
    <FailureStatsSlide key="failure" />,
    <DianRiskSlide key="dian-risk" />,
    <NeedSlide key="need" />,
    // ── La solución: Ksmart360 ──
    <RevealSolutionSlide key="reveal" />,
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
