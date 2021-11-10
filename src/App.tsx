import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SignInPage from "./scenes/signIn/generalSignIn";
import EmployeeSignInPage from "./scenes/signIn/employeeSignIn";
import Profile from "./scenes/profile/Profile";
import CompanyRegistration from "./scenes/companyRegistration/CompanyRegistration";
import CompanyEdit from "./scenes/companyEdit/CompanyEdit";
import CompanyDetail from "./scenes/companyDetail/CompanyDetail";
import SideBar from "./components/sideBar/SideBar";
import CreateRecruitment from "./scenes/createRecruitment/CreateRecruitment";

const App: FC = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecruitmentIndexPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/employeesignin" component={EmployeeSignInPage} />
          <Route path="/profile" component={Profile} />

          <Route path="/companyregistration">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CompanyRegistration />
            </div>
          </Route>
          <Route path="/companydetail">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CompanyDetail />
            </div>
          </Route>
          <Route path="/companyedit">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CompanyEdit />
            </div>
          </Route>
          <Route path="/createrecruitment">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CreateRecruitment />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
