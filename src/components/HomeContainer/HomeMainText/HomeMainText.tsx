import SimpleTooltip from '@/components/ui/SimpleTooltip';
import HomeHireDeveloperLink from '../HomeHireDeveloperLink/HomeHireDeveloperLink';
import HomeEmploymentInfo from '../HomeEmploymentInfo/HomeEmploymentInfo';
import * as motion from 'motion/react-client';

const HomeMainText = () => {
  const variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="flex flex-col lg:max-w-[55%] justify-start items-start gap-16 lg:mt-5">
      <div className="flex flex-col justify-start items-start gap-4 text-white">
        <SimpleTooltip
          animationDelay={0.3}
          animationDuration={0.5}
          content="풀타임, 파트타임"
          contentClass="lg:text-[#40E2E8]"
          wrapperClass="bg-[#8BC4FF] lg:bg-white"
        />
        <motion.h1
          variants={variants}
          initial="initial"
          animate="visible"
          className="font-black text-4xl lg:text-5xl text-pretty">
          최고의 실력을 가진 외국인 인재를 찾고 계신가요?
        </motion.h1>
        <motion.h2
          variants={variants}
          initial="initial"
          animate={{
            ...variants.visible,
            opacity: 0.8,
          }}
          className="font-black text-lg lg:text-2xl opacity-80 lg:opacity-90 max-w-xs">
          법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
        </motion.h2>
        <HomeHireDeveloperLink className="text-lg text-white lg:block hidden" />
      </div>

      {/* Only for desktop */}
      <HomeEmploymentInfo />
    </section>
  );
};

export default HomeMainText;
