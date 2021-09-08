import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { ScriptSnapshot } from "typescript";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import styles from "./style.module.scss";
import { SignInParams, useSignInPresenter } from "./useSignInPresenter";

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInParams>();
  const { signIn } = useSignInPresenter();
  const { account } = useCurrentAccount();
  const history = useHistory();

  useEffect(() => {
    if (account) history.push("/");
  }, [account]);

  const onSubmit = (data: SignInParams) => {
    signIn(data);
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
              name="account.password"
              placeholder="パスワードを入力"
              ref={register}
              type="password"
            />
          </div>
          <div className={styles.loginButton_wrapper}>
            <button>ログイン</button>
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
