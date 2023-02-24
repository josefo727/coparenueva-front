import styles from './../styles/LoginRegister.module.css'
import FormLoginRegister from '../components/Forms/FormLoginRegister'
import {useState} from 'react';

export default function Login() {
    const [name, setName] = useState('login');
    const [password, setPassword] = useState('login');

    const login = (e) => {
        e.preventDefault()
        console.log(name, password);
    }

    return (
        <main className={styles.mainLogin}>
            <FormLoginRegister
                isLogin={true}
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                login={login}
            />
        </main>
    )
}