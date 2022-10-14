export const mainBox = (suspense) => ({
  position: "relative",
  display: "flex",
  width: suspense && "100%",
  height: suspense && "100vh",
  alignItems: "center",
  justifyContent: "center",
});

export const secondaryLayer = (circularProgressClasses, secondaryColor) => ({
  color: secondaryColor,
  animationDuration: "550ms",
  position: "absolute",

  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: "round",
  },
});
