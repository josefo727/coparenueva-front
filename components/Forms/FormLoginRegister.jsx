import styles from '../../styles/FormLoginRegister.module.css'
import { Input, Spacer, Button, useInput } from "@nextui-org/react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Link from 'next/link'

export default function FormLoginRegister( {isLogin = false, name, setName, password, setPassword, email, setEmail, login, register }) {


    const { reset } = useInput("");

    return (
        <>
            <form className={styles.form}>
                <Spacer y={2.5} />
                <h1>Bienvenido</h1>
                {isLogin ?
                    <p>Por favor inicie sesión para continuar.</p>
                :
                    <p>Por favor complete los datos para comenzar.</p>
                }
                <Input className={styles.user} bordered placeholder="usuario*" />

                <Spacer y={1} />
                {!isLogin ?
                    <>
                        <Input
                            className={styles.password}
                            bordered
                            onClearClick={reset}
                            type="email"
                            placeholder="E-mail"
                        />
                        <Spacer y={1} />
                    </>
                :null
                }

                <Input.Password
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