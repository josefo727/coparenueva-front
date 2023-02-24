import Layout from '/components/Layout'
import styles from '/styles/pages/instructions.module.css'

export default function instructions() {
    return (
        <>
            <Layout title='Instrucciones' descripcion='Instrucciones' navTitle='Instrucciones' ruta='instructions'>
                <div className={styles.containerInstructions}>
                    <div className={styles.instructions}>
                        <p>
                            Renovadores, antes de iniciar la copa queremos darte
                            información e instrucciones de la dinámica.
                        </p>
                        <p>
                            Sabemos que todos nuestros jugadores son importantes,
                            sin embargo, necesitamos renovar nuestro equipo titular,
                            por ello, hemos elegido a una base de jugadores para tenerlos
                            un año más con nosotros.
                        </p>
                        <a className={styles.downloadLink}>Descargar base de jugadores</a>
                    </div>
                </div>
            </Layout>
        </>
    )
}
