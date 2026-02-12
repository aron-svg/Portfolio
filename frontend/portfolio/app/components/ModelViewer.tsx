import React from 'react';

interface ModelViewerProps {
  src: string;
  alt: string;
  autoplay?: boolean;
  [key: string]: any;
}

export const ModelViewer = React.forwardRef<HTMLElement, ModelViewerProps>(
  ({ src, alt, autoplay, ...props }, ref) => {
    return React.createElement('model-viewer' as any, {
      ref,
      src,
      alt,
      autoplay,
      ...props,
    });
  }
);

ModelViewer.displayName = 'ModelViewer';
