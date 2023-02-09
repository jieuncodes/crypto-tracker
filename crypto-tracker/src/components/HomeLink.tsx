import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Routes } from "react-router-dom";
import { HomeBtn } from "../styles/BigGrid";

function HomeLink() {
  return (
    <>
      <HomeBtn>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} size="lg" />
        </Link>
      </HomeBtn>

      <Routes>
        <Route path="/" element={<HomeLink />} />
      </Routes>
    </>
  );
}
export default HomeLink;