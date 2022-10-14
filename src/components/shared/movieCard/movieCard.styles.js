export const headerContainer = () => ({
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    "& .MuiBox-root": {
      transform: "scale(1)",
    },
    "& .MuiCardMedia-root": {
      transform: "scale(1.1)",
    },
  },
});

export const imageContainer = () => ({
  backgroundPosition: "top",
  transition: "ease-in-out .3s",
});

export const shadowBox = () => ({
  transformOrigin: "bottom",
  transition: "ease-in-out .3s",
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  transform: "scale(0)",
  background: "rgba(0, 0, 0,.6)",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  color: "#ffff",
  cursor: "pointer",
});

export const iconsContainer = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const textContainer = (textColor) => ({
  display: "flex",
  alignItems: "center",
  color: textColor,
  justifyContent: "start",
  width: "100%",
  height: "auto",
  marginTop: 1,
  paddingInline: 1,
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});
