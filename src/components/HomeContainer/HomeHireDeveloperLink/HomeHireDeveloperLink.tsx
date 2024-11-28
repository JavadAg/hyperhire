import { cn } from '@/utils/helpers';
import Link from 'next/link';
import React from 'react';
import * as motion from 'motion/react-client';

interface IProps {
  className?: string;
}

const HomeHireDeveloperLink: React.FC<IProps> = ({ className }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
      <Link href={'/#'} className={cn('text-base font-black text-link underline hover:opacity-80', className)}>
        개발자가 필요하신가요?
      </Link>
    </motion.div>
  );
};

export default HomeHireDeveloperLink;
