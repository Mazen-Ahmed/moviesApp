import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CustomInput from "components/shared/customInput/customInput";
import CustomButton from "components/shared/customButton/customButton";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "store/actions/authActions";
import { handleChange, buttonDisabled } from "./_hooks/useHandleChange";
import { set } from "helpers/useSessions";
import { formBody, formContainer } from "./form.styles";

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.AuthReducer)?.user;
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();
  const handleSubmit = () => {
    set("user", formState.values?.username);
    set("likes", []);
    dispatch(setUserAction(formState.values?.username));
    navigate("/");
  };
  useEffect(() => {
    if (user) return navigate("/");
  }, []);
  return (
    <Box sx={formContainer}>
      <Box sx={formBody}>
        <Typography textAlign={"center"} variant="h6">
          Login Form
        </Typography>
        <CustomInput
          label={"Username"}
          error={!!formState.errors?.username}
          Icon={<AccountCircleIcon />}
          type="text"
          id="username"
          name="username"
          errorMessage={"Please enter a valid username"}
          onChange={(e) => handleChange(e.target, formState, setFormState)}
        />
        <CustomInput
          label={"Password"}
          error={!!formState.errors?.password}
          onIconeKeyDown={() => setShowPassword(true)}
          onIconeKeyUp={() => setShowPassword(false)}
          Icon={showPassword ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
          type={showPassword ? "text" : "password"}
          onChange={(e) => handleChange(e.target, formState, setFormState)}
          errorMessage={"Please enter a stronger password"}
          id="password"
          name="password"
        />
        <CustomButton
          text={"Login"}
          type="contained"
          color={"#00cec9"}
          styles={{ width: "100%" }}
          onClick={handleSubmit}
          disabled={buttonDisabled(formState)}
        />
      </Box>
    </Box>
  );
};

export default Form;
