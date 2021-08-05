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
      <header style={styles.header}>
        <img
          draggable="true"
          onDragStart={drag}
          style={styles.image}
          src="/assets/images/1588766385Mikrocontroller.svg"
          alt=""
        />
        <img
          draggable="true"
          onDragStart={drag}
          style={styles.image}
          src="/assets/images/dpst_button.svg"
          alt=""
        />
        <img
          draggable="true"
          onDragStart={drag}
          style={styles.image}
          src="/assets/images/Machovka_Washing-machine_3.svg"
          alt=""
        />
        <img
          draggable="true"
          onDragStart={drag}
          style={styles.image}
          src="/assets/images/responsive_design.svg"
          alt=""
        />
        <img
          draggable="true"
          onDragStart={drag}
          style={styles.image}
          src="/assets/images/server-virtuel-colors2.svg"
          alt=""
        />
        <img
          draggable="true"
          onDragStart={drag}
          style={styles.image}
          src="/assets/images/tools-server.svg"
          alt=""
        />
      </header>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-success"
          disabled={scale > 3}
          onClick={() => zoomIn()}
        >
          ZoomIn
        </button>
        <button disabled={scale < 0.4} onClick={() => zoomOut()}>
          ZoomOut
        </button>
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
