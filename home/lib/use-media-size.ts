import { useMediaQuery } from 'react-responsive';

export const useMediaSize = () => {
  const isSM = useMediaQuery({ query: '(min-width: 640px)' });
  const isMD = useMediaQuery({ query: '(min-width: 768px)' });
  const isLG = useMediaQuery({ query: '(min-width: 1024px)' });
  const isXL = useMediaQuery({ query: '(min-width: 1280px)' });
  const is2XL = useMediaQuery({ query: '(min-width: 1536px)' });
  return { isSM, isMD, isLG, isXL, is2XL };
};
