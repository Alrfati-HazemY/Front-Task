import { render, screen , fireEvent , waitFor} from "@testing-library/react"
import "@testing-library/jest-dom"
import React from 'react'
import { BrowserRouter} from "react-router-dom"
import { Signup } from "../views/Signup/Signup"
import LoginContextProvider from "../context/LoginContex"

describe("Signup Component" , () => {
    test("Email input" , () => {
        const {container , debug} = render( <BrowserRouter> <Signup /> </BrowserRouter> )
        const name = screen.queryByTestId('full-name');
        expect(name).toHaveValue("");
        fireEvent.change(name,{ target : {value : "Hazem"}});
        expect(name).toHaveValue("Hazem");
    } )

    test("function Validation" , () => {
        const {container , debug} = render(   <LoginContextProvider> <BrowserRouter> <Signup /> </BrowserRouter> </LoginContextProvider> )
        const setLoggedIn = jest.fn();
        const RegisterSubmitHandler = jest.fn();
        const submitBtn = screen.getByTestId("submit");
        fireEvent.click(submitBtn);
    } )

})