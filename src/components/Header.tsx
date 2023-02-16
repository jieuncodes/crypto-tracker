import { HeaderArea } from "../styles/BigGrid";
import Back from "./Back";
import Logo from "./Logo";
import ThemeToggleBtn from "./ThemeToggleBtn";

function Header() {
  return (
    <HeaderArea>
      <Back />
      <Logo />
      <ThemeToggleBtn />
    </HeaderArea>
  );
}

export default Header;
