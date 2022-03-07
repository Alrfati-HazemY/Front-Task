import '@testing-library/jest-dom'
import { fireEvent , render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Signup } from '../views/Signup/Signup';

describe("Signup", () => {
    it('Submit with empty values', () => {
        render(
            <BrowserRouter>
                <Signup />
            </BrowserRouter>
        );
            const inputs = screen.getAllByRole("textbox");
            let filedIsEmpty = false
            let button = screen.getByRole("button",{name : "Register"});
            inputs.forEach((ele)=>{
                if(ele.value === "")
                {
                    filedIsEmpty = true;
                }
            })
            fireEvent.click(button);
            if(filedIsEmpty) {
                expect(button).toBeInTheDocument();
            }
            else {
                expect(button).not.toBeInTheDocument();
            }
            
    });
})