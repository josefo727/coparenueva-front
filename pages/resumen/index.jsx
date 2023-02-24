import Layout from '/components/Layout'
import React from "react";
import Link from 'next/link'
import styles from  '/styles/pages/Resumen.module.css'
import { IoBagHandle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsArrowCounterclockwise } from "react-icons/bs";

export default function Resumen() {
    return (
        <>
            <Layout
                title='Resumen'
                descripcion='Resumen'
                navTitle='¡Hola, Renovador!'
                navSubTitle='Bienvenido/a a la COPA RENUEVA. Donde ganas, renovando'
                ruta='resumen'>
                <div className={styles.containerResumen}>
                    <section className={styles.containerBox}>
                        <div className={`${styles.box} ${styles.policies}`}>
                            <div className={styles.contentIconTitle}>
                                <span className={styles.icon}>
                                    <IoBagHandle/>
                                </span>
                                <span>Grupo Objetivo <br/> Pólizas a renovar</span>
                            </div>
                            <h2 className={styles.valor }>500</h2>
                        </div>
                        <div className={`${styles.box} ${styles.renewed}`}>
                            <div className={styles.contentIconTitle}>
                                <span className={styles.icon}>
                                    <FaUser/>
                                </span>
                                <span>Renovada</span>
                            </div>
                            <h2 className={styles.valor}>230</h2>
                        </div>
                        <div className={`${styles.box} ${styles.canceled}`}>
                            <div className={styles.contentIconTitle}>
                                <span className={styles.icon}>
                                    <BsArrowCounterclockwise/>
                                </span>
                                <span>Canceladas</span>
                            </div>
                            <h2 className={styles.valor}>60</h2>
                        </div>
                        <div className={`${styles.box} ${styles.persistence}`}>
                            <div className={styles.contentIconTitle}>
                                <span>Persistencia</span>
                            </div>
                            <h2 className={styles.valor}>230</h2>
                        </div>
                        <div className={`${styles.box} ${styles.levelIncentive}`}>
                            <span>Nivel de Incentive</span>
                            <div>
                                2k
                            </div>
                        </div>
                        <div className={`${styles.box} ${styles.approximate}`}>
                            <span>Valor aproximado de incentivo</span>
                            <div>
                                2k
                            </div>
                        </div>
                        <div className={`${styles.box} ${styles.closing}`}>
                            <span>Fecha de cierre</span>
                            <h2 className={styles.dateClosing}>230</h2>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}
