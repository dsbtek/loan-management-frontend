import './logout.module.css';
import AppButton from '../common/app-button';


export default function Logout () {
    const logout = () => {
    };

    return (
        <AppButton
            text="Logout"
            buttonClick={() => logout}
        />
    );
}