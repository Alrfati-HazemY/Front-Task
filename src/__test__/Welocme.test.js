import { render, screen , fireEvent} from "@testing-library/react"
import React from 'react'
import {Welcome} from "./../views/Welcome/Welcome"
import "@testing-library/jest-dom"
import { BrowserRouter} from "react-router-dom"

describe("Welcome Component" , () => {

    test("Text Component" , () => {
        render(
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        )
    const welocmeElement = screen.getByTestId('welcome');
    expect(welocmeElement).toBeInTheDocument();
    } )

    test("Click handler on welcome word " ,  () => {
       const {debug} = render(
        
            <BrowserRouter>
                <Welcome />
            </BrowserRouter>
        )
        const welocmeElement = screen.getByText('welcome',{exact : false});
        fireEvent.click(welocmeElement);
        expect(welocmeElement).toBeInTheDocument();
    })

} )

