import { HeaderArea } from "../styles/BigGrid";
import HomeLink from "./HomeLink";
import Logo from "./Logo";
import ThemeToggleBtn from "./ThemeToggleBtn";

function Header() {
  return (
    <HeaderArea>
      <HomeLink />
      <Logo />
      <ThemeToggleBtn />
    </HeaderArea>
  );
}

export default Header;