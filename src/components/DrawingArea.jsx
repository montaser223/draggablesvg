import React from "react";

export default function DrawingArea({
  translate,
  scale,
  handelOnDrop,
  handelOnDrageOver,
}) {
  return (
    <div style={styles.drawingArea}>
      <h6 className="text-info m-3">Drawing Area</h6>
      <canvas
        style={{
          transform: `translate(${translate}px,${translate}px)scale(${scale})`,
        }}
        onDrop={handelOnDrop}
        onDragOver={handelOnDrageOver}
        width="1400px"
        height="1400px"
      ></canvas>
    </div>
  );
}

const styles = {
  drawingArea: {
    maxHeight: "75vh",
    maxWidth: "75%",
    overflow: "scroll",
    margin: "auto",
    boxShadow: "0 10px 20px rgba(128, 128, 128, 0.25)",
    marginBottom: "30px",
    backgroundColor: "#f7f7f7",
  },
};
