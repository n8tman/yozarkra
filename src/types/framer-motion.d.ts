declare module 'framer-motion' {
  import * as React from 'react';

  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    variants?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
  }

  export interface MotionProps extends AnimationProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }

  type ForwardRefComponent<T, P> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>;

  export type MotionComponent<T = HTMLElement> = ForwardRefComponent<T, MotionProps>;

  export const motion: {
    [K in keyof JSX.IntrinsicElements]: MotionComponent<JSX.IntrinsicElements[K] extends React.DetailedHTMLProps<React.HTMLAttributes<infer T>, infer T> ? T : any>;
  };

  export function useAnimation(): any;
  export function useInView(options?: any): [React.RefObject<any>, boolean];
  export function useScroll(): any;
  export function useTransform<T>(value: any, from: any[], to: T[]): any;
  export function useMotionValue(initial: any): any;
} 