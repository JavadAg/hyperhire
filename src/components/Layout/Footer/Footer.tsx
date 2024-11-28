import coloredLogo from '@/assets/images/logo-colored.svg';
import Image from 'next/image';
import FooterServices from './FooterServices/FooterServices';
import FooterBusinessInfo from './FooterBusinessInfo/FooterBusinessInfo';

const Footer = () => {
  return (
    <footer className="py-16 w-full lg:py-20 bg-footer">
      <div className="container flex flex-wrap justify-between items-start gap-4 ">
        <div className="grid gap-4 font-black text-gray-subtitle">
          <Image src={coloredLogo} height={34} width={187} alt="logo" />
          <span className="text-sm">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</span>
          <div className="grid text-[13px]">
            <a href="tel:010-0000-0000">010-0000-0000</a>
            <a href="mailto:aaaaa@naver.com">aaaaa@naver.com</a>
          </div>
        </div>
        <FooterServices />
        <FooterBusinessInfo />
        <span className="text-gray-subtitle mt-6 font-black text-[13px]">ⓒ 2023 Hyperhire</span>
      </div>
    </footer>
  );
};

export default Footer;
