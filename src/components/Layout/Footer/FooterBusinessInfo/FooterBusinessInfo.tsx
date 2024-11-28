import React from 'react';
import FooterBusinessInfoItem from './FooterBusinessInfoItem/FooterBusinessInfoItem';

export type TBusinessInfo = {
  id: number;
  title: string;
  content?: string;
  englsh_content?: string[];
};

const bussinessInfo: TBusinessInfo[] = [
  {
    id: 1,
    title: '상호명',
    content: '하이퍼하이어',
    englsh_content: ['Hyperhire India Private Limited'],
  },
  {
    id: 2,
    title: '대표 CEO',
    content: '김주현',
    englsh_content: ['Juhyun Kim'],
  },
  {
    id: 3,
    title: '사업자등록번호 CIN',
    englsh_content: ['427-86-01187', 'U74110DL2016PTC290812'],
  },
  {
    id: 4,
    title: '주소 ADDRESS',
    content: '서울특별시 강남대로 479, 지하 1층 238호',
    englsh_content: ['D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India'],
  },
];

const FooterBusinessInfo = () => {
  return (
    <section className="mt-12 w-full flex flex-wrap gap-y-9 gap-x-24">
      {bussinessInfo.map((info) => (
        <FooterBusinessInfoItem key={info.id} info={info} />
      ))}
    </section>
  );
};

export default FooterBusinessInfo;
