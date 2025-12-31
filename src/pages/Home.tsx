import { useState, useEffect } from "react";

import ActiveLifeCollection from "../components/active-life/ActiveLifeCollection";
import Hero from "../components/hero/Hero";
import HomeEssentials from "../components/home-essentials/HomeEssentials";
import Newsletter from "../components/shared/Newsletter";
import Testimonials from "../components/shared/testimonials/Testimonials";
import TopCategory from "../components/top-category/TopCategory";

// Skeletons
import HeroSkeleton from "../components/skeletons/HeroSkeleton";
import TopCategorySkeleton from "../components/skeletons/TopCategorySkeleton";
import ActiveLifeSkeleton from "../components/skeletons/ActiveLifeSkeleton";
import HomeEssentialsSkeleton from "../components/skeletons/HomeEssentialsSkeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <HeroSkeleton /> : <Hero />}

      {isLoading ? <TopCategorySkeleton /> : <TopCategory />}

      {isLoading ? <ActiveLifeSkeleton /> : <ActiveLifeCollection />}

      {isLoading ? <HomeEssentialsSkeleton /> : <HomeEssentials />}

      <Testimonials />
      <Newsletter />
    </>
  );
}
