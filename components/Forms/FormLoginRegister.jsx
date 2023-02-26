import styles from '../../styles/FormLoginRegister.module.css'
import { Input, Spacer, Button, useInput } from "@nextui-org/react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Link from 'next/link'

export default function FormLoginRegister( {isLogin = false, data, setInput, login, register }) {

    return (
        <>
            <form className={styles.form}>
                <Spacer y={2.5} />
                <h1>Bienvenidos Renovadores</h1>
                {isLogin ?
                    <p>Por favor inicia sesión para continuar.</p>
                :
                    <p>Por favor complete los datos para comenzar.</p>
                }
                <Input
                    name='name'
                    value={data?.name}
                    onChange={e => setInput(e)}
                    className={styles.user}
                    bordered
                    placeholder="usuario*"
                    onChange={e => setInput(e)}
                />

                <Spacer y={1} />
                {!isLogin ?
                    <>
                        <Input
                            name='email'
                            value={data?.email}
                            onChange={e => setInput(e)}
                            className={styles.email}
                            bordered
                            placeholder="E-mail"
                        />
                        <Spacer y={1} />
                    </>
                :null
                }

                <Input.Password
                    name='password'
                    value={data?.password}
                    onChange={e => setInput(e)}
                    className={styles.password}
                    bordered
                    placeholder="contraseña"
                    visibleIcon={<BsEyeSlashFill/>}
                    hiddenIcon={<BsEyeFill/>}
                />
                <Spacer y={1} />

                {isLogin ?
                    <>
                        <a className={styles.LoginButton} onClick={e => login(e)}>INGRESAR</a>
                        <Spacer y={0.8} />
                        <div className={styles.linkLoginRegister}>
                            <Link href='/register'>Sign Up</Link>
                        </div>
                    </>
                :
                    <>
                        <a className={styles.LoginButton} onClick={e => register(e)}>REGISTRARME</a>
                        <Spacer y={0.8} />
                        <div className={styles.linkLoginRegister}>
                            <Link href='/login'>Sign In</Link>
                        </div>
                    </>
                }
                <Spacer y={2.5} />
            </form>
        </>
    )
}