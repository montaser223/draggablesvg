import { useState } from "react";
import DrawingArea from "../components/DrawingArea";
import Header from "../components/Header";
import ZoomControl from "../components/ZoomControl";

export const DraggableSVG = () => {
  const [draggedImage, setDraggedImage] = useState(null);
  const [scale, updateScale] = useState(1);
  const [translate, updateTranslate] = useState(0);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    setDraggedImage(ev.target);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const canvas = ev.target;
    const ctx = canvas.getContext("2d");
    const { left, top } = canvas.getBoundingClientRect();
    scale === 1 &&
      ctx.drawImage(
        draggedImage,
        ev.clientX - left - 75,
        ev.clientY - top - 75,
        150,
        150
      );
  };

  const zoomIn = () => {
    if (scale < 3.0) {
      updateScale((scale) => scale + 0.2);
      updateTranslate((translate) => translate + 140);
    }
  };

  const zoomOut = () => {
    if (scale > 0.4) {
      updateTranslate((translate) => translate - 140);
      updateScale((scale) => scale - 0.2);
    }
  };
  return (
    <div className="container">
      <Header handelOnDragStart={drag} />
      <ZoomControl
        scale={scale}
        handelZoomIn={zoomIn}
        handelZoomOut={zoomOut}
        handelResetScale={() => updateScale(1)}
      />
      <DrawingArea
        scale={scale}
        translate={translate}
        handelOnDrageOver={allowDrop}
        handelOnDrop={drop}
      />
    </div>
  );
};
