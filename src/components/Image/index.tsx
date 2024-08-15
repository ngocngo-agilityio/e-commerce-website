'use client';

// Libs
import { memo, useCallback, useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface IImageProps extends ImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  blurDataURL?: string;
}

const ImageComponent = ({
  src,
  alt,
  blurDataURL,
  fallbackSrc,
  ...props
}: IImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(src);

  const handleFallbackImage = useCallback(
    () => setImageSrc(fallbackSrc),
    [fallbackSrc],
  );

  return (
    <Image
      src={imageSrc}
      alt={alt}
      blurDataURL={blurDataURL}
      onError={handleFallbackImage}
      {...props}
    />
  );
};

export default memo(ImageComponent);
