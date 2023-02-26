import styles from './../styles/LoginRegister.module.css'
import FormLoginRegister from '../components/Forms/FormLoginRegister'
import {useState} from 'react';

export default function Login() {
    const [data, setData] = useState({});

    const setInput = e => {
        setField(e.target.name, e.target.value);
    }
    const setField = (field, value) => {
        setData({
            ...data,
            [field] : value
        });
    }

    const login = (e) => {
        e.preventDefault()
        console.log(data);
    }

    return (
        <main className={styles.mainLogin}>
            <FormLoginRegister
                isLogin={true}
                setInput={setInput}
                data={data}
                setData={setData}
                login={login}
            />
        </main>
    )
}