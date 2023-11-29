import React, {FC} from 'react';
import { S } from '../../styles/styledLogin';
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage: FC = () => {
    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                 <LoginForm/>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};

export default LoginPage;

