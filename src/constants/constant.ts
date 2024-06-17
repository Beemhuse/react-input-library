// src/constants.ts
export const sizeMap = {
    sm: '30px',
    md: '40px',
    lg: '50px',
    xl: '60px',
    xxl: '70px',
  } as const;
  
  export type SizeType = keyof typeof sizeMap;
  