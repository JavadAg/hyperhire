import React from 'react';
import type { TBusinessInfo } from '../FooterBusinessInfo';

interface IProps {
  info: TBusinessInfo;
}

const FooterBusinessInfoItem: React.FC<IProps> = ({ info }) => {
  return (
    <div className="flex max-w-sm flex-col font-black">
      <span className="text-gray-title mb-[10px] text-xs">{info.title}</span>
      {info.content && <span className="text-gray-subtitle mb-[5px] text-[13px]">{info.content}</span>}
      <div className="grid gap-[5px] text-[13px] text-gray-subtitle">
        {info.englsh_content?.map((content) => <span>{content}</span>)}
      </div>
    </div>
  );
};

export default FooterBusinessInfoItem;
