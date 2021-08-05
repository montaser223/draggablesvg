import { useState } from "react";

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
    <>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-success mx-2"
          disabled={scale > 3}
          onClick={() => zoomIn()}
        >
          +
        </button>
        <button
          className="btn btn-danger "
          disabled={scale < 0.4}
          onClick={() => zoomOut()}
        >
          -
        </button>
        {scale !== 1 && (
          <div className="alert alert-info">
            You Can't drop images in Zoom mode
          </div>
        )}
      </div>
      <div
        style={{
          maxHeight: "75vh",
          maxWidth: "75%",
          overflow: "scroll",
          margin: "auto",
          border: "1px solid",
        }}
      >
        <canvas
          style={{
            transform: `translate(${translate}px,${translate}px)scale(${scale})`,
          }}
          onDrop={drop}
          onDragOver={allowDrop}
          width="1400px"
          height="1400px"
        ></canvas>
      </div>
    </>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-around",
  },
  image: {
    maxWidth: "150px",
  },
};
