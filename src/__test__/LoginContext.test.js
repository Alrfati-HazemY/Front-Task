import { render, screen , fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import React from 'react'
import { BrowserRouter} from "react-router-dom"
import LoginContextProvider from "../context/LoginContex"

describe ("LoginContextProvider Component " , () => {   
    test("Render the component" , () => {
        const {container} = render(<LoginContextProvider />)
        const userLoggedIn = jest.fn().mockReturnValueOnce()
        const setLoggedIn = jest.fn();
    })
} )