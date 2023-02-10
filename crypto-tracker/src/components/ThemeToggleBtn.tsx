import { useRecoilState } from "recoil";
import { lightAtom } from "../atoms";
import { ThemeBtn, ThemeBtnDiv } from "../styles/BigGrid";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeToggleBtn() {
  const [isLight, setlightAtom] = useRecoilState(lightAtom);

  const toggleTheme = () => {
    setlightAtom((current) => !current);
    if (isLight == true) {
      localStorage.setItem("SAVED_THEME", "lightTheme");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("SAVED_THEME", "darkTheme");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <ThemeBtnDiv>
      <ThemeBtn onClick={toggleTheme}>
        {isLight ? (
          <LightModeIcon fontSize="medium" />
        ) : (
          <DarkModeIcon fontSize="medium" />
        )}
      </ThemeBtn>
    </ThemeBtnDiv>
  );
}

export default ThemeToggleBtn;
