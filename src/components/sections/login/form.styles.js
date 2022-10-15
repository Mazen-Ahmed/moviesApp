export const formContainer = () => ({
  width: "100%",
  height: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const formBody = (bg, textColor) => ({
  background: bg,
  color: textColor,
  borderRadius: 1,
  width: 600,
  height: 300,
  padding: 7,
  boxShadow:
    " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
});
