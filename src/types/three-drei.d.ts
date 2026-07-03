declare module '@react-three/fiber' {
  import type { ReactNode } from 'react';
  import type * as THREE from 'three';

  export type ThreeEvent<T = Event> = T;
  export type RootState = any;

  export function Canvas(props: any): any;
  export function useFrame(callback: (state: any) => void): void;
  export function useThree(): any;
}

declare module 'three' {
  const THREE: any;
  export = THREE;
}
