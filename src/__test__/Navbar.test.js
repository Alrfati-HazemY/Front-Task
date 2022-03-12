import { render, screen , fireEvent } from "@testing-library/react"
import React from 'react'
import {Navbar} from "./../views/Navbar/Navbar"
import "@testing-library/jest-dom"
import {createMemoryHistory} from 'history';
import { BrowserRouter } from "react-router-dom"
import userEvent from '@testing-library/react'

describe("Navbar Component" , () => {
    it("show menu function" , () => {
        const {debug} = render (<BrowserRouter><Navbar/></BrowserRouter>)
        const showMenu = jest.fn();
        const iconBtn = screen.getByTestId("icon-btn");
        expect(iconBtn).toBeInTheDocument();
        fireEvent.click(iconBtn);

    })
})