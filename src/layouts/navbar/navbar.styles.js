export const navbarStyles = (bg, textColor) => ({
  background: bg,
  color: textColor,
  paddingBlock: 1,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center ",
});

export const containerStyles = () => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const logoutMenu = (bg) => ({
  borderRadius: 2,
  position: "absolute",
  top: 50,
  right: 0,
  height: 50,
  width: 140,
  background: bg,
  boxShadow: "box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const dropDown = () => ({
  display: "flex",
  gap: 0.5,
  cursor: "pointer",
  position: "relative",
  userSelect: "none",
});

export const searchContainer = () => ({
  width: 600,
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  justifyContent: "center",
});

export const responsiveNavbar = (bg) => ({
  width: "100%",
  minHeight: 100,
  background: bg,
  display: { xs: "flex", md: "none" },
  alignItems: "center",
  justifyContent: "center",
});
