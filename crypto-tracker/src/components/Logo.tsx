import tw from "tailwind-styled-components";

const LogoDiv = tw.div<any>`absolute font-logo text-lg text-potato dark:text-light-potato tracking-wider`;

function Logo() {
  return (
    <LogoDiv>
      <span> 🥔CryptoPotato🥔</span>
    </LogoDiv>
  );
}

export default Logo;
