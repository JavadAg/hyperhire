import type { TSliderItem } from '@/types/slider-data.type';
import { cn } from '@/utils/helpers';
import Image from 'next/image';

interface IProps {
  slide: TSliderItem;
  className?: string;
}

const Slide: React.FC<IProps> = ({ slide, className }) => {
  return (
    <div className={cn('flex rounded-xl gap-6 p-4 w-full justify-start items-center bg-white/20', className)}>
      <div className="p-3 shrink-0 flex justify-center items-center bg-white/40 rounded-[8px] size-14">
        <Image src={slide.image} width={32} height={32} alt={slide.title} className="shrink-0" />
      </div>
      <span className="whitespace-nowrap w-full text-2xl font-black">{slide.title}</span>
    </div>
  );
};

export default Slide;
