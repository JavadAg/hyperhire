import React from 'react';
import EmploymentInfoItem from './EmploymentInfoItem/EmploymentInfoItem';
import * as motion from 'motion/react-client';

const employInfo = [
  {
    title: '평균 월 120만원',
    content: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    title: '최대 3회 인력교체',
    content: '막상 채용해보니 맞지 않아도 걱정하지 마세요. ',
  },
  {
    title: '평균 3일, 최대 10일',
    content: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

const HomeEmploymentInfo = () => {
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
      className="hidden gap-12 lg:flex justify-start items-start">
      {employInfo.map(({ title, content }) => (
        <EmploymentInfoItem key={title} title={title} content={content} />
      ))}
    </motion.div>
  );
};

export default HomeEmploymentInfo;
