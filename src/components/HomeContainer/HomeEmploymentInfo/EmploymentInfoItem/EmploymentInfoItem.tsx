import React from 'react';

interface IProsp {
  title: string;
  content: string;
}

const EmploymentInfoItem: React.FC<IProsp> = ({ content, title }) => {
  return (
    <div className="flex before:content-[''] before:absolute before:left-0 before:w-32 before:h-px before:-top-3 before:bg-white relative font-black text-lg text-white flex-col gap-2">
      <span className="whitespace-nowrap">{title}</span>
      <span className="text-base opacity-80">{content}</span>
    </div>
  );
};

export default EmploymentInfoItem;
