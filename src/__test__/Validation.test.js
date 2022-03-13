import { render, screen , fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import React from 'react'
import { BrowserRouter} from "react-router-dom"

describe("Validation function" , () => {
    test("Validion function" , () => {
        const InputCheck = jest.fn((input) => {
            if(input.trim().length === 0) {
                return true
            }
            else {
                return false;
            }
        } )
        expect(InputCheck("Hazem")).toBe(false);
        expect(InputCheck("    ")).toBeTruthy();
    })
} )