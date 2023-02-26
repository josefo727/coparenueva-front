import styles from './../styles/LoginRegister.module.css'
import FormLoginRegister from '../components/Forms/FormLoginRegister'
import {useState} from 'react'

export default function Register() {
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
    const validateEmail = (value) => {
        return value?.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };
    const isValid = validateEmail(data?.email);

    const register = (e) => {
        e.preventDefault()
        console.log(isValid)
        console.log(data)
    }

    return (
        <main className={styles.mainLogin}>
            <FormLoginRegister
                data={data}
                setInput={setInput}
                register={register}
            />
        </main>
    )
}