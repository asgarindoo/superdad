import { FloatingNavbar } from "@/components/landing/FloatingNavbar"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { CharacterPreview } from "@/components/landing/CharacterPreview"
import { Memories } from "@/components/landing/Memories"
import { Pricing } from "@/components/landing/Pricing"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <FloatingNavbar />
      <Hero />
      <Features />
      <CharacterPreview />
      <Memories />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
