import HomeContainer from '@/components/HomeContainer/HomeContainer';
import type { TCarouselCardData } from '../types/carousel-data.type';
import type { TSliderItem } from '../types/slider-data.type';

async function getCarouselData(): Promise<TCarouselCardData[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/carousel`, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json();

  if (data) {
    return data;
  } else {
    return [];
  }
}

async function getSliderData(): Promise<TSliderItem[]> {
  const res = await fetch(`${process.env.BASE_URL}/api/slider`, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json();

  if (data) {
    return data;
  } else {
    return [];
  }
}

export default async function Home() {
  const [carouselData, sliderData] = await Promise.all([getCarouselData(), getSliderData()]);

  return <HomeContainer carouselData={carouselData} sliderData={sliderData} />;
}
