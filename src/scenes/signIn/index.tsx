import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm<SignInParams>();
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
    console.log(data);

    signIn(data);
    reset();
    history.push("/");
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
              ref={register}
              type="email"
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
            <button type="submit" value="ログイン" />
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

export default SignInPage;
