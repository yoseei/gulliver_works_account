import React, { useEffect, useState } from "react";
import styles from "./EmployeeSignUp.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import {
  SignUpParams,
  useEmployeeSignUpPresenter,
} from "./useEmployeeSignUpPresenter";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCurrentEmployee } from "../../../hooks/useCurrentEmployee";

const EmployeeSignUpPage = () => {
  const { employee } = useCurrentEmployee();
  const history = useHistory();
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm<SignUpParams>({
    criteriaMode: "all",
  });
  const { signUp } = useEmployeeSignUpPresenter();

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (employee) history.push("/manage_recruitment");
  }, [employee]);

  const onSubmit = (data: SignUpParams) => {
    signUp(data);
    history.push("/manage_recruitment");
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <h1>従業員サインアップ</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInputWrapper}>
            <p>メールアドレス</p>
            <input
              className={styles.input}
              placeholder="coadmap@mail.com"
              ref={register({
                required: "※メールアドレスを入力してください。",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "※正しいメールアドレスを入力してください。",
                },
              })}
              name="account.email"
            />
            <ErrorMessage
              name="account.email"
              errors={errors}
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className={styles.errorMessage}>
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
          </div>
          <div className={styles.passwordInputWrapper}>
            <p>パスワード</p>
            <input
              className={styles.input}
              placeholder="パスワードを入力"
              type={isRevealPassword ? "text" : "password"}
              ref={register({
                required: "※パスワードは必須項目です。",
                minLength: {
                  value: 6,
                  message: "※パスワードは６文字以上で入力してください。",
                },
              })}
              name="account.password"
            />
            <ErrorMessage
              name="account.password"
              errors={errors}
              render={({ messages }) => {
                return messages
                  ? Object.entries(messages).map(([type, message]) => (
                      <p key={type} className={styles.errorMessage}>
                        {message}
                      </p>
                    ))
                  : null;
              }}
            />
            <span
              onClick={togglePassword}
              role="presentation"
              className={styles.PasswordReveal}
            >
              {/* #FIXME: ant designに目のアイコンある */}
              {/* {isRevealPassword ? (
                <i className="fas fa-eye" />
              ) : (
                <i className="fas fa-eye-slash" />
              )} */}
            </span>
          </div>
          <div className={styles.loginButtonWrapper}>
            <button type="submit">サインアップ</button>
          </div>
          <div className={styles.passwordLinkWrapper}>
            <a href="">パスワードを忘れた方はこちら</a>
            {/* TODO: パスワード再設定ページへのリンクを貼る */}
          </div>
          <div className={styles.signupWrapper}>
            <Link to="/employee_signin">
              <button>ログインはこちら</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeSignUpPage;
