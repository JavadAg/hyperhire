import type { TCarouselCardData } from '@/types/carousel-data.type';
import Image from 'next/image';
import * as motion from 'motion/react-client';

interface IProps {
  card: TCarouselCardData;
}

const CarouselCard: React.FC<IProps> = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      id={card.id.toString()}
      className="select-none duration-300 mx-auto rounded-xl bg-white py-[36px] px-4 shadow-card flex flex-col justify-center items-center">
      <div className="flex relative flex-col justify-center items-center">
        <Image width={120} height={120} className="rounded-full" src={card.profile_picture} alt={card.name} />
        <Image width={25} height={18} className="absolute bottom-1 right-2" src={card.flag} alt={card.name} />
      </div>
      <div className="grid mt-4 mb-[36px] text-center">
        <span className="text-card-title font-black text-lg md:text-2xl">{card.name}</span>
        <div className="flex justify-center items-center gap-1 text-sm md:text-2xl">
          <span className="text-card-subtitle font-black">{card.role}</span>
          <span className="my-auto size-1 md:size-2 bg-card-subtitle rounded-full" />
          <span className="text-card-subtitle font-black">{card.experience}</span>
        </div>
      </div>
      <div className="flex gap-x-0.5 gap-y-1 flex-wrap justify-center items-center">
        {card.skills.map((skill) => (
          <span className="border line-clamp-1 px-3 py-1 border-card-tag-border text-gray-subtitle rounded-md font-black text-sm">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselCard;
