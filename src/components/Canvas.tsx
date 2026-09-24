"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Canvas as FabricCanvas, IText, Rect } from "fabric";

export type CanvasHandle = {
  addText: () => void;
  addRectangle: () => void;
};

const Canvas = forwardRef<CanvasHandle>(function Canvas(_, ref) {
  const elementRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<FabricCanvas | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const canvas = new FabricCanvas(elementRef.current, {
      width: 1080,
      height: 1920,
      backgroundColor: "#f6f3ff",
      preserveObjectStacking: true,
    });

    fabricRef.current = canvas;

    return () => {
      canvas.dispose();
      fabricRef.current = null;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    addText() {
      const canvas = fabricRef.current;
      if (!canvas) return;

      const text = new IText("Double-click to edit", {
        left: 100,
        top: 150,
        fontSize: 64,
        fontFamily: "Arial",
        fontWeight: "bold",
        fill: "#17191f",
      });

      canvas.add(text);
      canvas.setActiveObject(text);
      canvas.renderAll();
    },

    addRectangle() {
      const canvas = fabricRef.current;
      if (!canvas) return;

      const rectangle = new Rect({
        left: 180,
        top: 400,
        width: 500,
        height: 260,
        rx: 32,
        ry: 32,
        fill: "#ff6b45",
      });

      canvas.add(rectangle);
      canvas.setActiveObject(rectangle);
      canvas.renderAll();
    },
  }));

  return <canvas ref={elementRef} />;
});

export default Canvas;