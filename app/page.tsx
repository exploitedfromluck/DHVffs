import DefinitionSection from "../components/DefinitionSection";
import AnalogySection from "../components/AnalogySection";
import HowItWorksSection from "../components/HowItWorksSection";
import BenefitsSection from "../components/BenefitsSection";
import EngineeringExamplesSection from "../components/EngineeringExamplesSection";
import InteractiveDemoSection from "../components/InteractiveDemoSection";
import MathematicalFoundationSection from "../components/MathematicalFoundationSection";
export default function Home() {
  return (
    <main>
      <DefinitionSection />
      <AnalogySection />
      <HowItWorksSection />
      <BenefitsSection />
      <EngineeringExamplesSection />
      <div id="demo">
        <InteractiveDemoSection />
      </div>
      <MathematicalFoundationSection />
    </main>
  );
}
