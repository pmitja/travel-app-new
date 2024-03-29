export type ImageData = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export type SelectCardProps = {
  title: string;
  text: string;
  imageData: ImageData;
  classNames?: string;
};

export type LinkProps = {
  to: string;
  text: string;
};