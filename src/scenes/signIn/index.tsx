import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ScriptSnapshot } from "typescript";
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
      <div className={styles.login_container}>
        <h1>求職者ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.emailInput_wrapper}>
            <p>メールアドレス</p>
            <input
              className={styles.input}
              name="account.email"
              placeholder="coadmap@mail.com"
              ref={register}
              type="email"
            />
          </div>
          <div className={styles.passwordInput_wrapper}>
            <p>パスワード</p>
            <input
              className={styles.input}
              placeholder="パスワードを入力"
              // ref={register}
              type={isRevealPassword ? "text" : "password"}
              ref={register({ required: true })}
              // name="password"
              name="account.password"
              // type="password"
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
          <div className={styles.loginButton_wrapper}>
            <input type="submit" value="ログイン" />
          </div>
          <div className={styles.passwordLink_wrapper}>
            <a href="">パスワードを忘れた方はこちら</a>
          </div>
          <div className={styles.signUp_wrapper}>
            <button>新規登録はこちら</button>
          </div>
          {/* <Link to="/">ホームへ</Link> */}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
