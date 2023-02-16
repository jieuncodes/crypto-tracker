import { useLocation, useNavigate } from "react-router-dom";
import { BackBtn } from "../styles/BigGrid";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Back() {
  const location = useLocation();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <>
      {location.pathname == "/" ? null : (
        <BackBtn onClick={onClick}>
          <KeyboardBackspaceIcon fontSize="large" />
        </BackBtn>
      )}
    </>
  );
}
export default Back;
