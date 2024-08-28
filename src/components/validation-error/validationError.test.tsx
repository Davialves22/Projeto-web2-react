import { render, screen } from "@testing-library/react";
import ValidationError from "./validationError";

describe('validationError', () => {
    test('give value has not changed,then return null', () => {
        render(<ValidationError
            errorMessage="anyErrorMessage"
            hasChanged={false}
            testId="error"
            type="email"
            value="anyValue"
        />);

        expect(screen.queryByTestId('error')).toBeNull();
    })

    test('give value id mandatory,when value is empty, then return error', () => {
        render(<ValidationError
            errorMessage="anyErrorMessage"
            hasChanged={true}
            testId="error"
            type="required"
            value=""
        />);

        expect(screen.getByTestId('error')).not.toBeNull();
    })

    test('give value id mandatory,when value is not empty, then return null', () => {
        render(<ValidationError
            errorMessage="anyErrorMessage"
            hasChanged={true}
            testId="error"
            type="required"
            value="anyValue"
        />);

        expect(screen.queryByTestId('error')).toBeNull();
    })

    test('give error is email,when value is evalid, then return error', () => {
        render(<ValidationError
            errorMessage="anyErrorMessage"
            hasChanged={true}
            testId="error"
            type="email"
            value="invalid"
        />);

        expect(screen.getByTestId('error')).not.toBeNull();
    })

    test('give error is email,when value is valid, then return null', () => {
        render(<ValidationError
            errorMessage="anyErrorMessage"
            hasChanged={true}
            testId="error"
            type="email"
            value="valid@gmail.com"
        />);

        expect(screen.queryByTestId('error')).toBeNull();
    })
})