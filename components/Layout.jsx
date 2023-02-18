import Head from "next/head";
import Sidebar from "/components/Sidebar";
import NavbarTop from "./NavbarTop";
import styles from '/styles/Layout.module.css'

export default function Layout({children, title, description}) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="Description" content={description}/>
            </Head>
            <section className={styles.container}>
                <Sidebar/>
                <div  className={styles.main}>
                    <NavbarTop/>
                    <main>
                        <footer>Footer</footer>
                        {children}
                        <footer>Footer</footer>
                    </main>
                </div>
            </section>
        </>
    )
}
Layout.defaultProps = {
    title: "Proyecto",
    description: "Pagina del proyecto"
}
