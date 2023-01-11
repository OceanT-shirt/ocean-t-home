export type ColorType = { __brand__: 'ColorType' } & string;

type ColorObject = {
  TEXT: ColorType;
  BRANDMAIN: ColorType;
  BRANDSUB: ColorType;
  BACKGROUND: ColorType;
  WHITE: ColorType;
  BLACK: ColorType;
};

const Color: ColorObject = {
  TEXT: '#1d1d1d' as ColorType,
  BRANDMAIN: '#71717A' as ColorType,
  BRANDSUB: '#002967' as ColorType,
  BACKGROUND: '#F5F5F7' as ColorType,
  WHITE: '#fff' as ColorType,
  BLACK: '#000' as ColorType,
};

export { Color as Color };
