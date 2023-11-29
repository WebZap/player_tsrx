import React, {FC} from 'react';
import {S} from '../../styles/styledLogin';

const RegistrationForm: FC = () => {
    return (
        <S.FormLogin action="#">
            <S.Logo/>
            <S.Input type="text" name="register" placeholder="Имя"/>
            <S.Input type="text" name="login" placeholder="Почта"/>
            <S.Input type="password" name="password" placeholder="Пароль"/>
            <S.ButtonEnter>Зарегистрироваться</S.ButtonEnter>
            <S.ButtonSignup>Войти</S.ButtonSignup>
        </S.FormLogin>
    );
};

export default RegistrationForm;


