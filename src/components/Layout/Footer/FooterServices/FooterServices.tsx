import arrowIcon from '@/assets/icons/arrow.svg';
import codeIcon from '@/assets/icons/code.svg';
import avatarIcon from '@/assets/icons/avatar.svg';
import korIcon from '@/assets/icons/kor.svg';
import gearIcon from '@/assets/icons/gear.svg';
import FooterServicesItem from './FooterServicesItem/FooterServicesItem';

export type TService = {
  id: number;
  image: string;
  title: string;
  link: string;
  link_label: string;
  link_icon: string;
};

const services: TService[] = [
  {
    id: 1,
    image: codeIcon,
    title: '해외 개발자 원격 채용',
    link: '#',
    link_label: '바로가기',
    link_icon: arrowIcon,
  },
  {
    id: 2,
    image: avatarIcon,
    title: '외국인 원격 채용 (비개발)',
    link: '#',
    link_label: '바로가기',
    link_icon: arrowIcon,
  },
  {
    id: 3,
    image: korIcon,
    title: '한국어 가능 외국인 채용',
    link: '#',
    link_label: '바로가기',
    link_icon: arrowIcon,
  },
  {
    id: 4,
    image: gearIcon,
    title: '해외 개발자 활용 서비스',
    link: '#',
    link_label: '바로가기',
    link_icon: arrowIcon,
  },
];

const FooterServices = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-[10px]">
      {services.map((service) => (
        <FooterServicesItem key={service.id} service={service} />
      ))}
    </section>
  );
};

export default FooterServices;
