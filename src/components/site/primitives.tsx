"use client";

import { forwardRef, useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

/* HoverBox — replicates the original `style-hover` attribute (merge on hover). */
type HoverBoxProps = {
  as?: ElementType;
  style?: CSSProperties;
  hoverStyle?: CSSProperties;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
export const HoverBox = forwardRef<HTMLElement, HoverBoxProps>(function HoverBox(
  { as = "div", style, hoverStyle, children, ...rest }, ref,
) {
  const [hover, setHover] = useState(false);
  const Tag = as as ElementType;
  return (
    <Tag ref={ref} style={{ ...style, ...(hover && hoverStyle ? hoverStyle : {}) }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
    </Tag>
  );
});

/* CountUp — animated number, isolated so ticking never reverts translated text. */
export function CountUp({
  to, suffix = "", duration = 1200, style,
}: { to: number; suffix?: string; duration?: number; style?: CSSProperties }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    const tick = () => {
      const t = Math.min(1, (performance.now() - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to, duration]);
  return <span style={style}>{val}{suffix}</span>;
}
