import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn/generalSignIn";
import EmployeeSignInPage from "./scenes/signIn/employeeSignIn";
import Profile from "./scenes/profile/Profile";
import CorporateRegistration from "./scenes/corporateRegistration/CorporateRegistration";

const App: FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={RecruitmentIndexPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/employeesignin" component={EmployeeSignInPage} />
      <Route path="/profile" component={Profile} />
      <Route
        path="/corporateregistration"
        component={CorporateRegistration}
      ></Route>
    </div>
  </BrowserRouter>
);

export default App;
