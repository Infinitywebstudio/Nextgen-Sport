import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorInnerRef = useRef<HTMLDivElement | null>(null);
  const cursorOuterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const e = cursorInnerRef.current;
    const t = cursorOuterRef.current;

    if (!e || !t) return;

    const handleMouseMove = (s: MouseEvent) => {
      t.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      e.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
    };

    // Attach mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Show cursor elements
    e.style.visibility = "visible";
    t.style.visibility = "visible";

    // Hover effect on <a> tags
    const anchors = document.querySelectorAll("a");
    anchors.forEach((item) => {
      item.addEventListener("mouseover", () => setIsHovered(true));
      item.addEventListener("mouseout", () => setIsHovered(false));
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      anchors.forEach((item) => {
        item.removeEventListener("mouseover", () => setIsHovered(true));
        item.removeEventListener("mouseout", () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`mouse-cursor cursor-outer ${
          isHovered ? "cursor-hover" : ""
        }`}
      ></div>
      <div
        ref={cursorInnerRef}
        className={`mouse-cursor cursor-inner ${
          isHovered ? "cursor-hover" : ""
        }`}
      ></div>
    </>
  );
};

export default Cursor;
