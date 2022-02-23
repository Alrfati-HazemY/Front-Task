import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../Navbar';

describe("Navbar", () => {
    it('Should show logout if the user is logged in', () => {
        render(
            <BrowserRouter>
                <Navbar loggedIn={true} />
            </BrowserRouter>
        );
            const logoutBtn = screen.getByText(/logout/i);
            expect(logoutBtn).toBeInTheDocument();
    });

    it('Should show login & signup if the user is not logged in', () => {
        render(
            <BrowserRouter>
                <Navbar loggedIn={false} />
            </BrowserRouter>
        );
            const signupBtn = screen.getByText(/signup/i);
            const loginBtn = screen.getByText(/login/i);
            expect(signupBtn).toBeInTheDocument();
            expect(loginBtn).toBeInTheDocument();
    });

})