import { Link } from "react-router-dom";
import "../../assets/css/global.scss";
import S from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <main className="container wrapper">
        <ul className={S.comp_list}>
          <li>
            <Link to="/placeholderCustom">Placeholder 커스텀</Link>
          </li>
          <li>
            <Link to="/calendarCustom">캘린더 커스텀</Link>
          </li>
          <li>
            <Link to="/muiCalendar">MUI 라이브러리 캘린더</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
