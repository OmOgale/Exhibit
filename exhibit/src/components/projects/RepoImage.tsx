import * as React from 'react';
import { Image } from '@chakra-ui/react';

type LazyImageProps = {
  src: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const RepoImage = (props: LazyImageProps) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="cover"
      alt="cover image"
      width={width}
      height={height}
      boxSize={size}
      rounded={rounded}
      fallbackSrc="/assets/easy-loading.png"
    />
  );
};

export default RepoImage;
