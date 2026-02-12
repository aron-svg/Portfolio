declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
      autoplay?: boolean;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      "disable-zoom"?: boolean;
      "environment-image"?: string;
      "skybox-image"?: string;
      "background-color"?: string;
      "shadow-intensity"?: string | number;
      exposure?: string | number;
      "camera-orbit"?: string;
      "min-camera-orbit"?: string;
      "max-camera-orbit"?: string;
      "field-of-view"?: string;
      "camera-target"?: string;
      class?: string;
    };
  }
}
