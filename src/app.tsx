import React from "react";
import { Button } from "./components/Button/index";
import { Input } from "./components/Input/index";
import { Header } from "./components/Header";

export const App = () => {
    const [show, setShow] = React.useState(true);
    const toggleShow = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <>
            <Header label={"Hello2"} />
            <Button
                label={show ? "close" : "open"}
                onButtonClick={toggleShow}
            />
            <hr />
            {show && (
                <>
                    <Button label={"cancel"} disabled />
                    <Button label={"submit"} />
                    <Input />
                </>
            )}
        </>
    );
};
