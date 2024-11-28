'use client';

import type { TCarouselCardData } from '@/types/carousel-data.type';
import { Carousel as ReactCarousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import CarouselCard from './CarouselCard/CarouselCard';
import { NextButton, PrevButton } from '@/components/ui/CarouselButtons';
import useWindowWidth from '@/hooks/useWindowWidth';
import SimpleTooltip from '@/components/ui/SimpleTooltip';
import dollarIcon from '@/assets/icons/dollar.svg';
import Image from 'next/image';

interface IProps {
  carouselData: TCarouselCardData[];
}

const HomeCarousel: React.FC<IProps> = ({ carouselData }) => {
  const slides = carouselData.map((slide) => {
    return <CarouselCard key={slide.id} card={slide} />;
  });

  const width = useWindowWidth();

  return (
    <div className="mx-auto flex flex-col justify-start items-center max-w-[550px] w-full">
      <SimpleTooltip
        triangleAlign="center"
        content={
          <div className="flex gap-1">
            <Image src={dollarIcon} alt="dollar icon" className="bg-[#BBF3D2] shrink-0 size-7 rounded-full p-1" />
            <span>월 100만원</span>
          </div>
        }
        wrapperClass="bg-[#E9F7EF]"
        contentClass="text-[#00C696]"
      />
      <ReactCarousel
        containerWidth="100%"
        items={slides}
        showIndicators={false}
        containerPadding="10px"
        showStatus={false}
        containerHeight="460px"
        height={'auto'}
        perspective={'800px'}
        boxShadow="0px 15px 24px 0px #0000001F"
        onChange={(i, item) => {
          const rightItem = i === carouselData.length - 1 ? 0 : +item.props.card.id + 1;
          const leftItem = i === 0 ? carouselData.length - 1 : +item.props.card.id - 1;
          const nonActiveNodes = document.querySelectorAll(`[id="${rightItem}"], [id="${leftItem}"]`);

          const activeNodes = document.querySelector(`[id="${item.props.card.id}"]`);

          setTimeout(() => {
            activeNodes?.classList.remove('!bg-[#EDFCFF]');

            nonActiveNodes.forEach((node) => {
              node.classList.add('!bg-[#EDFCFF]');
            });
          }, 500);
        }}
        width={
          width < 480
            ? '240px'
            : width < 768
              ? '250px'
              : width < 1024
                ? '260px'
                : width < 1280
                  ? '280px'
                  : width < 1536
                    ? '290px'
                    : '290px'
        }
        autoPlay={false}
        defaultOption={{ numOfSlides: 3, angleFactor: 0, depthFactor: 1, widthFactor: 1 }}
        arrows={{
          nextArrowTranslate: ['20%', '0%'],
          prevArrowTranslate: ['-20%', '0%'],
          width: '20px',
          height: '20px',
          nextIcon: <NextButton />,
          prevIcon: <PrevButton />,
        }}
        startIndex={0}
      />
    </div>
  );
};

export default HomeCarousel;
