import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Welcome } from '../Welcome';

describe("Welcome", () => {
    it('should print welcome on the screen', () => {
        render(
            <Welcome />
        );
        const h1Element = screen.getByText(/welcome/i);
        expect(h1Element).toBeInTheDocument();
    });
})