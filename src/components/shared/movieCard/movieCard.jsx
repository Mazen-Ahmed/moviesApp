import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useGetTitle from "helpers/useGetTitle";
import Tooltip from "@mui/material/Tooltip";
import BackdropComponent from "./backdrop/backdropComponent";
import { setUserLikesAction } from "store/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import {
  headerContainer,
  iconsContainer,
  imageContainer,
  shadowBox,
  textContainer,
} from "./movieCard.styles";

const MovieCard = ({ data, refer = null }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.AuthReducer);
  const [openTrailer, setOpenTrailer] = useState(false);
  return (
    <>
      <BackdropComponent
        setOpen={setOpenTrailer}
        open={openTrailer}
        id={data?.id}
      />
      <Card
        sx={{
          minWidth: 300,
          marginInline: 1,
          userSelect: "none",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
        ref={refer}
      >
        <Box sx={headerContainer} onClick={() => setOpenTrailer(true)}>
          <CardMedia
            loading="lazy"
            component="img"
            sx={imageContainer}
            height="300"
            image={`${process.env.REACT_APP_IMAGES_URL}${data.backdrop_path}`}
            alt={`${data?.title}'s image`}
          />
          <Box sx={shadowBox}>
            <Box sx={iconsContainer}>
              <IconButton
                aria-label="share"
                onClick={(e) => e.stopPropagation()}
              >
                <ShareIcon sx={{ color: "#fff" }} />
              </IconButton>

              <IconButton
                aria-label="like"
                onClick={(e) => {
                  e.stopPropagation();
                  if (userData?.user) {
                    dispatch(setUserLikesAction(data?.id));
                  } else {
                    navigate("/moviesApp");
                  }
                }}
              >
                <FavoriteIcon
                  sx={{
                    color: userData?.likes.find((i) => data?.id === i)
                      ? "red"
                      : "#fff",
                  }}
                />
              </IconButton>
            </Box>
            <Box sx={textContainer}>
              <Typography>{data?.overview}</Typography>
            </Box>
          </Box>
        </Box>
        <CardContent>
          <Tooltip title={data?.title}>
            <Typography
              sx={{ fontWeight: "bold", cursor: "pointer" }}
              variant="body1"
              color="text.primary"
            >
              {useGetTitle(data?.title, 25)}
            </Typography>
          </Tooltip>
          <Typography variant="body2">
            released: <span style={{ opacity: 0.7 }}>{data?.release_date}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Rating
            name="read-only"
            value={data?.vote_average}
            precision={0.5}
            max={10}
            readOnly
          />
          <Typography
            sx={{ opacity: 0.6, fontStyle: "italic" }}
            variant="body2"
          >
            ({data?.vote_count})
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
