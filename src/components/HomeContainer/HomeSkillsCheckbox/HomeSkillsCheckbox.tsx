import { Checkbox } from '@/components/ui/Checkbox';
import React from 'react';
import HomeHireDeveloperLink from '../HomeHireDeveloperLink/HomeHireDeveloperLink';
import * as motion from 'motion/react-client';

const checkboxList = [
  {
    id: 1,
    description: '한국어 능력',
    checked: true,
    disabled: true,
  },
  {
    id: 2,
    description: '업무 수행 능력',
    checked: true,
    disabled: true,
  },
  {
    id: 3,
    description: '겸업 여부',
    checked: true,
    disabled: true,
  },
  {
    id: 4,
    description: '평판 조회',
    checked: true,
    disabled: true,
  },
];

const HomeSkillsCheckbox = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex container mt-4 flex-col lg:hidden gap-4">
      <div className="grid grid-cols-2 gap-3 max-w-max">
        {checkboxList.map((checkbox) => (
          <div key={checkbox.id} className="flex items-center space-x-2">
            <Checkbox demo {...checkbox} id={checkbox.id.toString()} />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor={checkbox.id.toString()}
                className="text-base font-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {checkbox.description}
              </label>
            </div>
          </div>
        ))}
      </div>
      <HomeHireDeveloperLink />
    </motion.section>
  );
};

export default HomeSkillsCheckbox;
