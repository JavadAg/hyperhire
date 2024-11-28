import type { TCarouselCardData } from '@/types/carousel-data.type';
import HomeMainText from './HomeMainText/HomeMainText';
import HomeSkillsCheckbox from './HomeSkillsCheckbox/HomeSkillsCheckbox';
import HomeSlider from './HomeSlider/HomeSlider';
import type { TSliderItem } from '@/types/slider-data.type';
import dynamic from 'next/dynamic';
const HomeCarousel = dynamic(() => import('./HomeCarousel/HomeCarousel'), { ssr: false });

interface IProps {
  carouselData: TCarouselCardData[];
  sliderData: TSliderItem[];
}

const HomeContainer: React.FC<IProps> = ({ carouselData, sliderData }) => {
  return (
    <main className="grid relative w-full pb-14 lg:pb-[120px] text-white pt-[36px] sm:pt-10 md:pt-16 lg:pt-20 xl:pt-24">
      <div className="flex container flex-col lg:flex-row gap-14">
        <HomeMainText />
        <HomeCarousel carouselData={carouselData} />
      </div>

      {/* Only for desktop */}
      <HomeSlider sliderData={sliderData} />

      {/* Only for mobile */}
      <HomeSkillsCheckbox />
    </main>
  );
};

export default HomeContainer;
