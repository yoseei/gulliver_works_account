import React from "react";
import "./App.scss";
import ApplicantRecruitment from "./scenes/applicantRecruitment/ApplicantRecruitment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRecruitment from "./scenes/createRecruitment/CreateRecruitment";
import CompanyRegistration from "./scenes/companyRegistration/CompanyRegistration";
import CompanyEdit from "./scenes/companyEdit/CompanyEdit";
import CompanyDetail from "./scenes/companyDetail/CompanyDetail";
import EmployeeSignIn from "./scenes/signIn/employeeSignIn/EmployeeSignIn";
import EmployeeSignUp from "./scenes/signUp/employeeSignUp/EmployeeSignUp";
import ManageRecruitment from "./scenes/manageRecruitment/ManageRecruitment";
import Profile from "./scenes/profile/Profile";
import RecruitmentDetail from "./scenes/recruitmentDetail/RecruitmentDetail";
import SideBar from "./components/sideBar/SideBar";
import SignInPage from "./scenes/signIn/generalSignIn/GeneralSignIn";
import { useCurrentEmployee } from "./hooks/useCurrentEmployee";

const App = () => {
  const { employee, setEmployee } = useCurrentEmployee();

  const sideBar = (
    <SideBar textA="企業詳細" textB="募集管理" textC="サインアウト" />
  );
  return (
    <div className="root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ApplicantRecruitment} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/employee_signin" component={EmployeeSignIn} />
          <Route path="/employee_signup" component={EmployeeSignUp} />

          <Route path="/profile">
            <div className="withSideBarContainer_profile">
              <div className="sidebarWrapper">
                <SideBar
                  textA="募集一覧"
                  textB="マイページ"
                  textC="サインアウト"
                />
              </div>
              <div className="profileWrapper">
                <Route path="/profile" component={Profile} />
              </div>
            </div>
          </Route>

          <Route path="/company_registration">
            <div className="withSideBarContainer">
              {sideBar}
              <CompanyRegistration />
            </div>
          </Route>
          <Route path="/company_detail">
            <div className="withSideBarContainer">
              {sideBar}
              <CompanyDetail />
            </div>
          </Route>
          <Route path="/company_edit">
            <div className="withSideBarContainer">
              {sideBar}
              <CompanyEdit />
            </div>
          </Route>
          <Route path="/create_recruitment">
            <div className="withSideBarContainer">
              {sideBar}
              <CreateRecruitment />
            </div>
          </Route>
          <Route path="/manage_recruitment">
            <div className="withSideBarContainer">
              {sideBar}
              <ManageRecruitment />
            </div>
          </Route>
          <Route path="/recruitment_detail">
            <div className="withSideBarContainer">
              {sideBar}
              <RecruitmentDetail />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
