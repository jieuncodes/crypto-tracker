import { useRecoilState } from "recoil";
import { isLightAtom } from "../atoms";
import { ThemeBtnDiv } from "../styles/BigGrid";

function ThemeToggleBtn() {
  const [isLight, setIsLightAtom] = useRecoilState(isLightAtom);
  const toggleTheme = () => setIsLightAtom((current) => !current);

  return (
    <ThemeBtnDiv>
      <button onClick={toggleTheme}>
        {isLight ? "LightMode" : "DarkMode"}
      </button>
    </ThemeBtnDiv>
  );
}

export default ThemeToggleBtn;
