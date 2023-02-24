import Layout from '/components/Layout'
import styles from '/styles/pages/TermsAndConditions.module.css'
export default function TermsAndConditions() {
    return (
        <>
            <Layout title='Términos y Condiciones' descripcion='Términos y Condiciones' navTitle='Términos y condiciones' ruta='terms'>
                <div className={styles.containerTerms}>
                    <div className={styles.terms}>
                        <p>
                            Términos y Condiciones.
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}
