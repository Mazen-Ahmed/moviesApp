import { Backdrop, Box } from "@mui/material";
import useGetMovieTrailer from "./_hooks/useGetMovieTrailer";

const BackdropComponent = ({ open, setOpen, id }) => {
  const { trailer } = useGetMovieTrailer(id, open);

  return (
    <Backdrop
      open={open}
      onClick={() => {
        setOpen(false);
      }}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      {open && (
        <Box sx={{ width: { xs: "90%", md: "60%" } }}>
          <iframe
            width="100%"
            height="415"
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: "15px", border: "none" }}
          />
        </Box>
      )}
    </Backdrop>
  );
};

export default BackdropComponent;
