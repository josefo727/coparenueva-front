import styles from './../styles/LoginRegister.module.css'
import FormLoginRegister from '../components/Forms/FormLoginRegister'
import {useState} from 'react'

export default function Register() {
    const [name, setName] = useState('register');
    const [email, setEmail] = useState('register');
    const [password, setPassword] = useState('register');

    const validateEmail = (value) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
    const isValid = validateEmail(email);

    const register = (e) => {
      e.preventDefault()
        console.log(isValid)
    }

    return (
        <main className={styles.mainLogin}>
            <FormLoginRegister
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                register={register}
            />
        </main>
    )
}