import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const LogoDiv = tw.div<any>`absolute font-logo text-lg text-potato dark:text-lightpotato tracking-wider`;

function Logo() {
  return (
    <LogoDiv>
      <Link to="/">
        <span> 🥔CryptoPotato🥔</span>
      </Link>
    </LogoDiv>
  );
}

export default Logo;
