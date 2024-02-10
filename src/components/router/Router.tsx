import ErrorBoundary from "../ErrorBoundary";
import { Route, Routes } from "react-router-dom";
import React from "react";

import PlaceholderCustom from "../PlaceholderCustom/index";
import CalendarCustom from "../CalendarCustom/index";
import Home from "../../pages/Home";
import Header from "../Header/index";
import MuiCalendar from "../MuiCalendar";

const Router = () => {
  return (
    <>
      <ErrorBoundary>
        <React.Suspense fallback={<></>}>
          <HeaderRouter />
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <React.Suspense fallback={<></>}>
          <BodyRouter />
        </React.Suspense>
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <React.Suspense fallback={<></>}>
          <FooterRouter />
        </React.Suspense>
      </ErrorBoundary> */}
    </>
  );
};

const HeaderRouter = () => (
  <Routes>
    {/* <Route path={"/login"} element={<></>} />
    <Route path={"/admin*"} element={<></>} /> */}
    <Route path={"/*"} element={<Header />} />
  </Routes>
);

const BodyRouter = () => (
  <Routes>
    <Route path={"/"} element={<Home />} />
    <Route path={"/placeholderCustom"} element={<PlaceholderCustom />} />
    <Route path={"/calendarCustom"} element={<CalendarCustom />} />
    <Route path={"/muiCalendar"} element={<MuiCalendar />} />
  </Routes>
);

// const FooterRouter = () => (
//   <Routes>
//     <Route path={"/login"} element={<></>} />
//     <Route path={"/admin*"} element={<></>} />
//     <Route path={"/*"} element={<Footer />} />
//   </Routes>
// );

export default Router;
