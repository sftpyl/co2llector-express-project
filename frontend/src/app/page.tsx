import AnimatedOnScroll from "@/components/molecules/AnimatedOnScroll";
import HomeLayout from "@/templates/HomeLayout";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center">
      <AnimatedOnScroll >
        <HomeLayout />
      </AnimatedOnScroll>
    </div>
  );
}
