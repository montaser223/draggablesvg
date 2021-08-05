import React from "react";

// images src
const images = [
  "Diodes_in_bjt.svg",
  "Sine_sqare_triangle_generator_blocks.svg",
  "Transistor_amplifier_blocked_emitor.svg",
  "Ttl_demultiplexer_3x_2bit.svg",
  "7400_Circuit_tristated.svg",
  "Differential-Current-Switch.svg",
];
export default function Header({ handelOnDragStart }) {
  return (
    <header
      style={styles.header}
      className="row justify-content-between m-3  p-2"
    >
      <h6 className="text-info">Available SVG</h6>
      {images.map((imgSrc, index) => (
        <img
          key={index}
          draggable="true"
          onDragStart={handelOnDragStart}
          style={styles.image}
          src={`/assets/images/${imgSrc}`}
          alt="svgimage"
        />
      ))}
    </header>
  );
}
const styles = {
  header: {
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    backgroundColor: "#f7f7f7",
  },
  image: {
    maxWidth: "120px",
  },
};
