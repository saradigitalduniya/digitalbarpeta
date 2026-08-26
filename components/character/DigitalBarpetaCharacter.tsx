'use client';

import React from 'react';
import { ParallaxCharacter } from './ParallaxCharacter';

export interface DigitalBarpetaCharacterProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  enableParallax?: boolean;
  enableFloating?: boolean;
  priority?: boolean;
  mode?: '2d' | '3d';
}

export const DigitalBarpetaCharacter: React.FC<DigitalBarpetaCharacterProps> = ({
  className = '',
  size = 'lg',
  enableParallax = true,
  enableFloating = true,
  priority = true,
}) => {
  return (
    <ParallaxCharacter
      className={className}
      size={size}
      enableParallax={enableParallax}
      enableFloating={enableFloating}
      priority={priority}
    />
  );
};
