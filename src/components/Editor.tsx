"use client";

import { useRef } from "react";
import Canvas, { type CanvasHandle } from "./Canvas";

export default function Editor() {
  const canvasRef = useRef<CanvasHandle>(null);

  return (
    <main className="editor">
      <aside className="toolbar">
        <button onClick={() => canvasRef.current?.addText()}>
          Add text
        </button>

        <button onClick={() => canvasRef.current?.addRectangle()}>
          Add shape
        </button>
      </aside>

      <section className="canvas-area">
        <Canvas ref={canvasRef} />
      </section>
    </main>
  );
}