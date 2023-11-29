import React, {FC} from 'react';
import {S} from "../../styles/styledLogin";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage: FC = () => {
    return (
        <S.Wrapper>
            <S.ContainerEnter>
                <S.ModalBlock>
                    <RegistrationForm/>
                </S.ModalBlock>
            </S.ContainerEnter>
        </S.Wrapper>
    );
};


export default RegistrationPage;