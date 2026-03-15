declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: string | Element | Array<string | Element>, vars?: any);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
