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
  TEXT: '#111111' as ColorType,
  BRANDMAIN: '#0386ff' as ColorType,
  BRANDSUB: '#002967' as ColorType,
  BACKGROUND: '#FCFCFC' as ColorType,
  WHITE: '#fff' as ColorType,
  BLACK: '#000' as ColorType,
};

export { Color as Color };
