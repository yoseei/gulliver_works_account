import React from "react";
import "./App.scss";
import ApplicantRecruitment from "./scenes/applicantRecruitment/ApplicantRecruitment";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRecruitment from "./scenes/createRecruitment/CreateRecruitment";
import CompanyRegistration from "./scenes/companyRegistration/CompanyRegistration";
import CompanyEdit from "./scenes/companyEdit/CompanyEdit";
import CompanyDetail from "./scenes/companyDetail/CompanyDetail";
import EditRecruitment from "./scenes/editRecruitment/EditRecruitment";
import EmployeeSignIn from "./scenes/signIn/employeeSignIn/EmployeeSignIn";
import EmployeeSignUp from "./scenes/signUp/employeeSignUp/EmployeeSignUp";
import ManageRecruitment from "./scenes/manageRecruitment/ManageRecruitment";
import Profile from "./scenes/profile/Profile";
import RecruitmentDetail from "./scenes/recruitmentDetail/RecruitmentDetail";
import SideBar from "./components/sideBar/SideBar";
import GeneralSignIn from "./scenes/signIn/generalSignIn/GeneralSignIn";
import NotLoggedInApplicantRecruitment from "./scenes/notLoggedInApplicantRecruitment/NotLoggedInApplicantRecruitment";
import ApplicantRecruitmentDetail from "./scenes/applicantRecruitmentDetail/ApplicantRecruitmentDetail";

const App = () => {
  const sideBarA = (
    <SideBar textA="企業詳細" textB="募集管理" textC="サインアウト" />
  );
  const sideBarB = (
    <SideBar textA="募集一覧" textB="マイページ" textC="サインアウト" />
  );
  return (
    <div className="root">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="withSideBarContainer_applicantRecruitment">
              <div className="sidebarWrapper">{sideBarB}</div>
              <ApplicantRecruitment />
            </div>
          </Route>
          <Route path="/general_signin" component={GeneralSignIn} />

          <Route
            path="/not_loggedin_user"
            component={NotLoggedInApplicantRecruitment}
          />
          <Route
            path="/applicant_recruitment/:id/detail"
            component={ApplicantRecruitmentDetail}
          />
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
              {sideBarA}
              <CompanyRegistration />
            </div>
          </Route>
          <Route path="/company_detail">
            <div className="withSideBarContainer">
              {sideBarA}
              <CompanyDetail />
            </div>
          </Route>
          <Route path="/company_edit">
            <div className="withSideBarContainer">
              {sideBarA}
              <CompanyEdit />
            </div>
          </Route>
          <Route path="/create_recruitment">
            <div className="withSideBarContainer">
              {sideBarA}
              <CreateRecruitment />
            </div>
          </Route>
          <Route path="/edit_recruitment/:id">
            <div className="withSideBarContainer">
              {sideBarA}
              <EditRecruitment />
            </div>
          </Route>
          <Route path="/manage_recruitment">
            <div className="withSideBarContainer">
              {sideBarA}
              <ManageRecruitment />
            </div>
          </Route>
          <Route path="/recruitment_detail">
            <div className="withSideBarContainer">
              {sideBarA}
              <RecruitmentDetail />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
