import React from "react";
import Grid from "@material-ui/core/Grid";

const style = {
  display: "flex",
  color: "#6A6C6E",
  fontFamily: "ostrich-sans-regular",
  lineHeight: "1",
  fontSize: "2rem",
  background: "rgba(244,244,246, 0.9)",
  marginTop: "60px"
};

export default function HomePage() {
  return (
    <div>
      <Grid justify="center" container={true}>
        <h2 style={style}>
          Hi,
          <br />
          I'm Adrian,
          <br />a web developer.
        </h2>
      </Grid>
    </div>
  );
}
