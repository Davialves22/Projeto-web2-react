import { render, screen } from '@testing-library/react';
import ValidationError from './Validation-error';

describe('Erro de Validação', () => {
    test('quando o valor não foi alterado, então retorna null', () => {
        render(<ValidationError
            errorMessage='Mensagem de erro'
            hasChanged={false}
            testId='erro'
            type='email'
            value='qualquerValor'
        />);
        expect(screen.queryByTestId('erro')).toBeNull();
    });

    test('quando o valor é obrigatório e está vazio, então retorna erro', () => {
        render(<ValidationError
            errorMessage="Mensagem de erro"
            hasChanged={true}
            testId="erro"
            type="required"
            value=""
        />);

        expect(screen.getByTestId('erro')).not.toBeNull();
    });

    test('quando o valor é obrigatório e não está vazio, então retorna null', () => {
        render(<ValidationError
            errorMessage="Mensagem de erro"
            hasChanged={true}
            testId="erro"
            type="required"
            value="qualquerValor"
        />);

        expect(screen.queryByTestId('erro')).toBeNull();
    });

    test('quando o tipo de erro é email e o valor é inválido, então retorna erro', () => {
        render(<ValidationError
            errorMessage="Mensagem de erro"
            hasChanged={true}
            testId="erro"
            type="email"
            value="invalido"
        />);

        expect(screen.getByTestId('erro')).not.toBeNull();
    });

    test('quando o tipo de erro é email e o valor é válido, então retorna null', () => {
        render(<ValidationError
            errorMessage="Mensagem de erro"
            hasChanged={true}
            testId="erro"
            type="email"
            value="valido@gmail.com"
        />);

        expect(screen.queryByTestId('erro')).toBeNull();
    });

})