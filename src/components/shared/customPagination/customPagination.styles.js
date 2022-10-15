export const pagination = (bg, textColor) => ({
  "& .MuiPagination-ul button": {
    color: textColor,
    border: `2px solid ${bg}`,
    background: "#db60151a",
    opacity: "0.5",
    "&:hover": {
      background: "#db60151a",
      opacity: "1",
    },
  },
});
