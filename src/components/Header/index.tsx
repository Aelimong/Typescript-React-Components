import S from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className={`container wrapper ${S.nav}`}>
        <ul>
          <li>
            <Link to="/">Home으로</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
