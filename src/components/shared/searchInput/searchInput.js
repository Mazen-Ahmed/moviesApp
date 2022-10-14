export const formControl = (focus) => ({
  m: 1,
  width: focus ? "40%" : "20%",
  transition: "ease-in-out .2s",
  background: "rgba(223, 230, 233,.3)",
});
export const input = () => ({
  "&:focus-within fieldset, &:focus-visible fieldset": {
    border: "1px solid #00cec9!important",
  },
});
