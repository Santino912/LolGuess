import { Box } from "@mui/material";
import Image from "next/image";
import Styles from "./Style.module.css";

const ZoomableImage = ({ src, zoomed }: { src: string; zoomed: boolean }) => {
  return (
    <Box className={`zoomable-image ${zoomed ? "zoomed" : ""}`}>
      <Image src={src} alt="Zoom in image" />
    </Box>
  );
};

export default ZoomableImage;
