import React, {FC} from 'react';
import MainPage from "./pages/MainPage/MainPage";
import Global from "./styles/styledGlobal";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const App: FC = () => {
    return (
        <>
            <Global/>
            <MainPage/>
            <LoginPage/>
            <RegistrationPage/>
        </>
    );
}

export default App;
