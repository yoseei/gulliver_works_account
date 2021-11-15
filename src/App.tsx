import React, { FC } from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRecruitment from "./scenes/createRecruitment/CreateRecruitment";
import CompanyRegistration from "./scenes/companyRegistration/CompanyRegistration";
import CompanyEdit from "./scenes/companyEdit/CompanyEdit";
import CompanyDetail from "./scenes/companyDetail/CompanyDetail";
import EmployeeSignInPage from "./scenes/signIn/employeeSignIn";
import ManageRecruitment from "./scenes/manageRecruitment/ManageRecruitment";
import Profile from "./scenes/profile/Profile";
import RecruitmentDetail from "./scenes/recruitmentDetail/RecruitmentDetail";
import RecruitmentIndexPage from "./scenes/recruitment/RecruitmentIndexPage";
import SideBar from "./components/sideBar/SideBar";
import SignInPage from "./scenes/signIn/generalSignIn";

const App: FC = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RecruitmentIndexPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/employee_signin" component={EmployeeSignInPage} />
          <Route path="/profile" component={Profile} />

          <Route path="/company_registration">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CompanyRegistration />
            </div>
          </Route>
          <Route path="/company_detail">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CompanyDetail />
            </div>
          </Route>
          <Route path="/company_edit">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CompanyEdit />
            </div>
          </Route>
          <Route path="/create_recruitment">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <CreateRecruitment />
            </div>
          </Route>
          <Route path="/manage_recruitment">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <ManageRecruitment />
            </div>
          </Route>
          <Route path="/recruitment_detail">
            <div className="withSideBarContainer">
              <SideBar textA="企業詳細" textB="募集管理" />
              <RecruitmentDetail />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
