import React, {useState} from 'react'

import styles from '/styles/FormRegisterRenovators.module.css'
import { Input, Radio, Spacer,} from "@nextui-org/react";

export default function FormRegisterRenovators() {

    const [data, setData] = useState({name: '', gender: ''})
    const setName = e => {
        setField(e.target.name, e.target.value);
    }
    const setGender = e => {
        setField('gender', e);
    }
    const setField = (field, value) => {
        setData({
            ...data,
            [field] : value
        });
    }

    const RegisterRenovators = (e) => {
        e.preventDefault();
        console.log({data})
    }

    return (
        <>
            <form className={styles.form}>
                <Spacer y={2.5} />
                <p>Registra tu equipo de renovadores</p>
                <Input
                    clearable
                    bordered
                    labelPlaceholder="Name"
                    name="name"
                    value={data.name}
                    onChange={e => setName(e)}
                    required='true'
                />
                <Spacer y={1} />
                <Radio.Group label="Genero" name='gender' onChange={e => setGender(e)}>
                    <Radio value="male">Hombre</Radio>
                    <Radio value="female">Mujer</Radio>
                </Radio.Group>
                <Spacer y={1} />
                <a className={styles.registerRenovators} onClick={e => RegisterRenovators(e)}>REGISTRAR</a>
                <Spacer y={2.5} />
            </form>
        </>
    )
}