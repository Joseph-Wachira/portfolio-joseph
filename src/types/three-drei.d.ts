declare module '@react-three/fiber' {
  export interface ViewportState {
    width: number;
    height: number;
  }

  export interface PointerState {
    x: number;
    y: number;
  }

  export interface ClockState {
    getElapsedTime(): number;
  }

  export interface ThreeState {
    viewport: ViewportState;
    pointer: PointerState;
    clock: ClockState;
  }

  export interface CanvasProps {
    camera?: {
      position?: [number, number, number];
      fov?: number;
    };
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export function Canvas(props: CanvasProps): JSX.Element;
  export function useFrame(callback: (state: ThreeState) => void): void;
  export function useThree(): ThreeState;
}
