'use client';

import type { TSliderItem } from '@/types/slider-data.type';
import Slide from './Slide/Slide';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import * as motion from 'motion/react-client';

interface IProps {
  sliderData: TSliderItem[];
}

const HomeSlider: React.FC<IProps> = ({ sliderData }) => {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 976px)': {
          slides: {
            perView: 2.5,
            spacing: 10,
          },
        },
        '(min-width: 1280px)': {
          slides: {
            perView: 3.5,
            spacing: 10,
          },
        },
        '(min-width: 1600px)': {
          slides: {
            perView: 4.5,
            spacing: 10,
          },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className="hidden w-full lg:flex overflow-hidden ml-auto lg:pl-16 xl:pl-[calc((100%-1220px)/2)]">
      <div ref={ref} className="keen-slider mt-16">
        {sliderData.map((slide) => {
          return <Slide className="keen-slider__slide" key={slide.id} slide={slide} />;
        })}
      </div>
    </motion.div>
  );
};

export default HomeSlider;
