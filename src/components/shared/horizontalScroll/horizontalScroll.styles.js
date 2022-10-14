export const mainContainer = (bg) => ({
  position: "relative",
  maxWidth: "100%",
  background: bg,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const slideButtons = (dir, bg) => ({
  position: "absolute",
  top: "50%",
  right: dir === "right" && 0,
  left: dir === "left" && 0,
  background: bg,
  color: "#fff",
  borderRadius: "50%",
  padding: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginInline: 1,
  cursor: "pointer",
  zIndex: 999,
  "&:hover": {
    opacity: "0.8",
  },
});

export const sliderContainer = (shadow) => ({
  width: "100%",
  minHeight: 300,
  position: "relative",
  "&::before": {
    position: "absolute",
    content: "''",
    left: 0,
    top: 0,
    zIndex: 99,
    height: "100%",
    width: { xs: 20, md: 100 },
    backgroundImage: `linear-gradient(90deg,${shadow}, transparent)`,
  },
  "&::after": {
    position: "absolute",
    content: "''",
    right: 0,
    top: 0,
    zIndex: 99,
    height: "100%",
    width: { xs: 20, md: 100 },
    backgroundImage: `linear-gradient(-90deg,${shadow}, transparent)`,
  },
});

export const sliderStyles = () => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  overflow: "auto",
  position: "relative",
  scrollBehavior: "smooth",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
  paddingBlock: 2,
});
