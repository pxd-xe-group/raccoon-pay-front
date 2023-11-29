import Image from 'next/image';
import { CSSProperties } from 'react';
interface Props {
  style?: CSSProperties;
  className?: string;
  src: string;
  width?: number;
  height?: number;
  onClick?: any;
  imageLoader?: any;
  alt: string;
  priority?: boolean;
}

export default function Images({
  height,
  src,
  width,
  className,
  onClick,
  style,
  imageLoader,
  alt,
  priority = false
}: Props) {
  return (
    <Image
      priority={priority}
      src={`${src}`}
      alt={alt}
      quality={50}
      loading={priority ? 'eager' : 'lazy'}
      width={width}
      fill={!width && !height ? true : false}
      height={height}
      onClick={onClick}
      style={{ ...style }}
      className={className}
      loader={imageLoader}
      sizes="50vw"
    />
  );
}
