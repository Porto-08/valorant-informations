import React, { useState } from 'react'
import { Container, Skeleton, ImageSkeleon } from './styles';
import styles from "./styles.module.scss";

interface ISkeletonProps {
  src: string;
  height?: number;
  width?: number;
  alt: string;
  title: string;
  objectFit?: string;
  priority?: boolean;
  draggable?: boolean;
}

const SkeletonImage = ({ alt, ...props }: ISkeletonProps) => {

  const [skeleton, setSkeleton] = useState<boolean>(true);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;

    target.style.opacity = '1';
    setSkeleton(false);
  }

  return (
    <Container>
      {skeleton && <Skeleton />}

      <ImageSkeleon onLoad={handleLoad} alt={alt} {...props} />
    </Container>
  )
}

export default SkeletonImage;