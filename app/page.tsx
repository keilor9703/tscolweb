import { Deck } from "@/components/deck/deck";
import {
  TitleSlide,
  BusinessTypesSlide,
  DifferentiatorsSlide,
  CapabilitiesSlide,
  DianSlide,
  CatalogSlide,
  TechSlide,
  SecuritySlide,
  PlansSlide,
  RolesSlide,
  CloseSlide,
} from "@/components/deck/slides";
import {
  HookSlide,
  ChaosSlide,
  FailureStatsSlide,
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
    <NeedSlide key="need" />,
    // ── La solución: Ksmart360 ──
    <RevealSolutionSlide key="reveal" />,
    <BusinessTypesSlide key="types" />,
    <RolesSlide key="roles" />,
    <DifferentiatorsSlide key="diff" />,
    <CatalogSlide key="catalog" />,
    <CapabilitiesSlide key="caps" />,
    <DianSlide key="dian" />,
    <TechSlide key="tech" />,
    <SecuritySlide key="security" />,
    <PlansSlide key="plans" />,
    <CloseSlide key="close" />,
  ];

  return <Deck slides={slides} />;
}
