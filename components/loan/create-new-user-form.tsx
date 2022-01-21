import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { InputEvent, ButtonEvent } from '../../constant/interface/forms';
import { login, getAuthState} from '../../slices/auth';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import AppButton from '../common/app-button';

const NewLoanUserForm = (props: any) => {
    const { strings } = props;
    const [newloanuser, setNewLoanUser] = useState({
        firstName: '',
        lastName: '',
        numbers: [],
        email: []

    });
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { loading, success } = useAppSelector(state => getAuthState(state, 'login'));
    if (success) router.push('/loans');

    const handleChange = (event: InputEvent) => {
        setNewLoanUser((prev) => ({
            ...prev,
            ...{ [event.target.name]: event.target.value },
        }));
    };
    const handleSubmit = (e: ButtonEvent ) => {
        const { firstName, lastName, numbers, email } = newloanuser;
        e.preventDefault();
        // dispatch(createNewLoanUser(firstName, lastName, numbers, email));
        return e;
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label />
                    <Form.Control
                        type="text"
                        placeholder={strings.emailAddressPlaceholder}
                        onChange={handleChange}
                        name="firstName"
                        required
                    />
                    <Form.Label />
                    <Form.Control
                        type="text"
                        placeholder={strings.passwordPlaceholder}
                        onChange={handleChange}
                        name="lastName"
                        required
                    />
                    <Form.Label />
                    <Form.Control
                        type="tel"
                        placeholder={strings.passwordPlaceholder}
                        onChange={handleChange}
                        name="numbers"
                        required
                    />
                    <Form.Label />
                    <Form.Control
                        type="email"
                        placeholder={strings.passwordPlaceholder}
                        onChange={handleChange}
                        name="email"
                        required
                    />
                </Form.Group>
                <br />
                <div className="signUp-div">
                    <AppButton
                        disabled={loading}
                        text={loading ? strings.loginButtonLoadingText : strings.loginButtonText}
                        buttonClick={() => handleSubmit}
                    />
                </div>
            </Form>
        </div>
    );
};

NewLoanUserForm.propTypes = {
    strings: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NewLoanUserForm;
