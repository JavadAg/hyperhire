import React from 'react';
import type { TService } from '../FooterServices';
import Image from 'next/image';
import Link from 'next/link';

interface IProsp {
  service: TService;
}

const FooterServicesItem: React.FC<IProsp> = ({ service }) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-xl justify-start items-start font-black">
      <div className="rounded-md p-2 bg-gray-100 size-10 flex justify-center items-center">
        <Image src={service.image} width={32} height={32} alt={service.title} />
      </div>
      <span className="mt-3 mb-4 text-gray-title text-sm">{service.title}</span>
      <Link
        href={service.link}
        className="flex mb-0 mt-auto justify-center items-center gap-1 hover:text-gray-800 hover:underline duration-150 text-gray-subtitle text-sm">
        {service.link_label}
        <Image src={service.link_icon} className="shrink-0" width={18} height={18} alt={service.title} />
      </Link>
    </div>
  );
};

export default FooterServicesItem;
