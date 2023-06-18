import Categories from "@/components/Categories";
import HeroSection from "@/components/HeroSection";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* @ts-expect-error Server Component */}
      <Categories />
      <Reviews />
    </div>
  );
}
