import { cn } from '@/utils/helpers';
import React from 'react';
import * as motion from 'motion/react-client';

interface IProps {
  content: string | JSX.Element;
  trianglePosition?: 'top' | 'bottom';
  triangleAlign?: 'center' | 'left' | 'right';
  wrapperClass?: string;
  contentClass?: string;
  animationDuration?: number;
  animationDelay?: number;
}

const SimpleTooltip = React.forwardRef<HTMLDivElement, IProps>(
  (
    {
      content,
      contentClass,
      wrapperClass,
      trianglePosition = 'bottom',
      triangleAlign = 'left',
      animationDelay,
      animationDuration,
    },
    ref,
  ) => {
    const trianglePositionClasses = {
      top: '-top-1 left-1/2 transform -translate-x-1/2',
      bottom: '-bottom-1 left-1/2 transform -translate-x-1/2',
    };

    const triangleAlignClasses = {
      center: 'left-1/2 transform -translate-x-1/2',
      left: 'left-[15%]',
      right: 'right-[15%]',
    };

    return (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: animationDuration || 0.5,
            delay: animationDelay || 0,
          },
        }}
        ref={ref}
        className={cn(
          'relative py-2 px-3 rounded-lg inline-block bg-gray-700',
          trianglePosition === 'top' ? 'mt-1.5' : 'mb-1.5',
          wrapperClass,
        )}>
        <span className={cn('font-black text-lg text-white', contentClass)}>{content}</span>
        <div
          className={`absolute w-4 h-4 bg-inherit transform rotate-45 ${trianglePositionClasses[trianglePosition]} ${triangleAlignClasses[triangleAlign]}`}
        />
      </motion.div>
    );
  },
);

SimpleTooltip.displayName = 'SimpleTooltip';

export default SimpleTooltip;
