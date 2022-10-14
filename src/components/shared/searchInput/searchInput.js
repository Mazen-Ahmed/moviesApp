export const formControl = (focus, bg) => ({
  m: 1,
  width: focus ? "40%" : "20%",
  transition: "ease-in-out .2s",
  background: bg,
});
export const input = (textColor) => ({
  "&:focus-within fieldset, &:focus-visible fieldset": {
    border: "1px solid #00cec9!important",
  },
  color: textColor,
});
