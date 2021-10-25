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
    <div className="root">
      <BrowserRouter>
        <Switch>
          <React.Fragment>
            <Route exact path="/" component={RecruitmentIndexPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/employeesignin" component={EmployeeSignInPage} />
            <Route path="/profile" component={Profile} />
            <div className="showSideBar">
              <SideBar textA="企業詳細" textB="募集管理" />
              <Route path="/companydetail" component={CompanyDetail} />
              <Route
                path="/corporateregistration"
                component={CorporateRegistration}
              />
            </div>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
