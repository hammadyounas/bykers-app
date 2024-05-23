import React from 'react';

interface IconsProps {
  icon: string;
  className?: string;
  width?: string | number;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
}

const Icons: React.FC<IconsProps> = ({
  icon,
  className,
  width,
  rotate,
  hFlip,
  vFlip,
}) => {
  return (
    <Icons
      width={width}
      rotate={rotate}
      hFlip={hFlip}
      icon={icon}
      className={className}
      vFlip={vFlip}
    />
  );
};

export default Icons;
