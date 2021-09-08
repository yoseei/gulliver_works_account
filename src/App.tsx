import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn";
import Profile from "./scenes/profile/Profile";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/sign_in" component={SignInPage} />
      <Route path="/profile" component={Profile}></Route>
    </div>
  </BrowserRouter>
);

export default App;
