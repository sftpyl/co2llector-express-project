import Hero from "@/components/organism/Hero";
import AboutSection from "@/components/organism/AboutSection";
import HighlightStorySection from "@/components/organism/HighlightStorySection";
import InsightsGallerySection from "@/components/organism/InsightsGallerySection";
import LakeHighlightSection from "@/components/organism/LakeHighlightSection";
import SacredTreesMapSection from "@/components/organism/SacredTreesMapSection";
import ContributionInfoSection from "@/components/organism/ContributionInfoSection";
const HomeLayout = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <HighlightStorySection />
      <InsightsGallerySection />
      <LakeHighlightSection />
      <SacredTreesMapSection />
      <ContributionInfoSection />
    </>
  );
};
export default HomeLayout;
