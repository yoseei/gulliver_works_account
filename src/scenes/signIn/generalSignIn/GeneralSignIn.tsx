import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import { Link } from "react-router-dom";
import { SignInParams, useSignInPresenter } from "./useGeneralSignInPresenter";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const SignInPage = () => {
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const { register, handleSubmit, errors } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const token = localStorage.getItem("GULLIVER_WORKS_AUTH_TOKEN");
  const history = useHistory();

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (token) history.push("/");
  }, [token]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
    history.push("/applicant_recruitment");
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <h1>求職者ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInputWrapper}>
            <p>メールアドレス</p>
            <input
              className={styles.input}
              name="account.email"
              placeholder="coadmap@mail.com"
              ref={register({
                required: "※メールアドレスを入力してください。",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                  message: "※正しいメールアドレスを入力してください。",
                },
              })}
              type="email"
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
              ref={register({ required: true })}
              name="account.password"
            />

            <span
              onClick={togglePassword}
              role="presentation"
              className={styles.PasswordReveal}
            >
              {isRevealPassword ? (
                <i className="fas fa-eye" />
              ) : (
                <i className="fas fa-eye-slash" />
              )}
            </span>
          </div>
          <div className={styles.loginButtonWrapper}>
            <button type="submit">ログイン</button>
          </div>
          <div className={styles.passwordLinkWrapper}>
            <a href="">パスワードを忘れた方はこちら</a>
          </div>
          <Link to="/employee_signup">
            <div className={styles.signupWrapper}>
              <button type="button">新規登録はこちら</button>
            </div>
          </Link>
          <Link to="/employee_signin">
            <div className={styles.signupWrapper}>
              <button type="button">従業員ログインはこちら</button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
