import React, {FC} from 'react';
import {S} from "../../styles/styledLogin";

const LoginForm: FC = () => {
    return (
        <S.FormLogin action="#">
            <S.Logo/>
            <S.Input type="text" name="login" placeholder="Почта"/>
            <S.Input type="password" name="password" placeholder="Пароль"/>
            <S.ButtonEnter>Войти</S.ButtonEnter>
            <S.ButtonSignup>Зарегистрироваться</S.ButtonSignup>
        </S.FormLogin>
    );
};

export default LoginForm;