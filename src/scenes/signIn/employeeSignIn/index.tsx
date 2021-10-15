import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";
import { ErrorMessage } from "@hookform/error-message";

const EmployeeSignInPage = () => {
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const { register, handleSubmit, reset, errors } = useForm<SignInParams>({
    criteriaMode: "all",
  });
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
    reset();
    history.push("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginContainer}>
        <h1>従業員ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInputWrapper}>
            <p>メールアドレス</p>
            <p>testtesttest</p>
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
                console.log("messages", messages);
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
                console.log("messages", messages);
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
            {/* ToDoパスワード再設定ページへのリンクを貼る */}
          </div>
          <div className={styles.signupWrapper}>
            <button>新規登録はこちら</button>
          </div>
          {/* <Link to="/">ホームへ</Link> */}
        </form>
      </div>
    </div>
  );
};

export default EmployeeSignInPage;
