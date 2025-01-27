// 사용자가 OPEN 버튼을 누르면 {toast} = useToast()
//                         => toast(title, description)
// createRoot(root).render(ui)
//                         => ToastTitle, ToastDescription
// 토스트 함수를 실행시켜서 타이틀, 디스크립션을 보여줘야함 (실행하는 시점에만)

import { CSSProperties, useRef } from "react";
import ReactDOM from "react-dom/client";
import ToastTitle from "./ToastTitle";
import ToastClose from "./ToastClose";
import ToastDescription from "./ToastDescription";
import {
  toastBaseCls,
  toastCloseBaseCls,
  toastDescriptionBaseCls,
  toastTitleBaseCls,
} from "@consts/className";

type ToastPositions =
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "top-center"
  | "top-right";

// Partial<Type>: 전달받은 Type의 모든 하위 집합을 나타내는 타입을 생성
// Pick<Type, keys>: 전달받은 Type에서 string literal 혹은 union of string으로 받은 keys를 뽑아서 타입을 생성
type PositionStyles = Partial<
  Pick<CSSProperties, "top" | "bottom" | "left" | "right" | "transform">
>;

interface ToastContent {
  title: string;
  description: string;
  position?: ToastPositions;
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
}

const DEFAULT_TOAST_WRAPPER_STYLE: CSSProperties = {
  position: "fixed",
  padding: "10px 20px",
  width: "300px",
  height: "60px",
  right: "0px",
  bottom: "0px",
  backgroundColor: "black",
  color: "white",
  zIndex: 1000,
};

// bottom, left, transform, right...
const PositionStyle = (position: ToastPositions): PositionStyles => {
  const positions: { [key in ToastPositions]: PositionStyles } = {
    "bottom-left": { bottom: "10px", left: "10px" },
    "bottom-center": {
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "bottom-right": { bottom: "10px", right: "10px" },
    "top-center": {
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    "top-right": { top: "10px", right: "10px" },
  };
  return positions[position] || positions["bottom-right"];
};

export const useToast = () => {
  const toastRoot = useRef<ReactDOM.Root>();
  const toastTimeout = useRef<NodeJS.Timeout | null>(null);

  const createToast = (
    {
      title,
      description,
      position = "bottom-right",
      width = "300px",
      height = "60px",
      backgroundColor,
      color,
      className,
    }: ToastContent,
    duration: number
  ) => {
    if (toastRoot.current) {
      toastRoot.current.unmount();
    }

    const customStyle: CSSProperties = {
      ...DEFAULT_TOAST_WRAPPER_STYLE,
      backgroundColor:
        backgroundColor || DEFAULT_TOAST_WRAPPER_STYLE.backgroundColor,
      color: color || DEFAULT_TOAST_WRAPPER_STYLE.color,
      width,
      height,
      ...PositionStyle(position),
    };

    // ys-toast 말고 다른곳에서 렌더링 하고싶다면?
    toastRoot.current = ReactDOM.createRoot(
      document.getElementById("ys-toast")!
    );

    // 클래스 이름 추가
    const ToastCls = `${toastBaseCls} ${className || ""}`;
    const ToastTitleCls = `${toastTitleBaseCls} ${className || ""}`;
    const ToastDescriptionCls = `${toastDescriptionBaseCls} ${className || ""}`;
    const ToastCloseCls = `${toastCloseBaseCls} ${className || ""}`;

    toastRoot.current.render(
      <div style={customStyle} className={ToastCls}>
        <ToastTitle className={ToastTitleCls}>{title}</ToastTitle>
        <ToastDescription className={ToastDescriptionCls}>
          {description}
        </ToastDescription>
        <ToastClose
          onClose={() => {
            if (toastRoot.current) {
              toastRoot.current.unmount();
            }
            if (toastTimeout.current) {
              clearTimeout(toastTimeout.current);
            }
          }}
          className={ToastCloseCls}
        />
      </div>
    );

    toastTimeout.current = setTimeout(() => {
      if (toastRoot.current) {
        toastRoot.current.unmount();
      }
      if (toastTimeout.current) {
        clearTimeout(toastTimeout.current);
      }
    }, duration);
  };

  const toast = (content: ToastContent, duration = 3000) => {
    createToast(content, duration);
  };

  return { toast };
};

export const Toaster = () => {
  return <div id={"ys-toast"} />;
};
