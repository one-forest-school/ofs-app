import React, { PropsWithChildren } from "react";
import { NavigationContainer } from '@react-navigation/native';
import App from "./app/App";

const Main = () => {

    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}

export default Main