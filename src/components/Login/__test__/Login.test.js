import '@testing-library/jest-dom'
import { render, screen , fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../Login';

describe("Login", () => {

    it('Check input values', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        
            const inputs = screen.getAllByRole("textbox");
            inputs.forEach((ele)=>{
                fireEvent.change(ele , { target: { value: "Hazem" } } )
                expect(ele.value).toBe("Hazem");
            })

    });

  

})