import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn/generalSignIn";
import EmployeeSignInPage from "./scenes/signIn/employeeSignIn";
import Profile from "./scenes/profile/Profile";
import CorporateRegistration from "./scenes/corporateRegistration/CorporateRegistration";
import CompanyDetail from "./scenes/companyDetail/CompanyDetail";
import SideBar from "./components/sideBar/SideBar";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="generalPage">
        <SideBar
          textA="企業詳細"
          textB="募集管理"
          style={{ display: "none" }}
        />

        <Route exact path="/" component={RecruitmentIndexPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/employeesignin" component={EmployeeSignInPage} />
      </div>
      <div className="employeePage">
        {/* <SideBar textA="企業詳細" textB="募集管理" /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/companydetail" component={CompanyDetail} />
        <Route
          path="/corporateregistration"
          component={CorporateRegistration}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
