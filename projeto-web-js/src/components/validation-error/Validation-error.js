import { isEmailValid } from '../../helpers/Email.helper';

export default function ValidationError(props) {
    if (!props.hasChanged) {
        return null;
    }

    const error = <div data-testid={props.testId}>{props.errorMessage}</div>;

    if (props.type === 'required') {
        return props.value === '' ? error : null;
    }

    return !isEmailValid(props.value) ? error : null;
}