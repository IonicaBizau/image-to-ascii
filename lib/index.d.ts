declare module "image-to-ascii" {
  interface ImageToAsciiOptions {
    size?: {
      width?: number;
      height?: number;
    };
    colored?: boolean;
    reverse?: boolean;
    multiply?: number;
    pixels?: string;
    alphabet?: string;
    empty?: string;
    bg?: boolean;
    fg?: boolean;
    fit_screen?: boolean;
    size_options?: {
      screen_size?: {
        width?: number;
        height?: number;
      };
      preserve_aspect_ratio?: boolean;
    };
  }

  function imageToAscii(
    path: string,
    options: ImageToAsciiOptions,
    callback: (err: Error | null, converted: string) => void
  ): void;

  export = imageToAscii;
}
