import React, { useState } from "react";
import { Sidebar, SubMenu, Menu, MenuItem, useProSidebar, breakPoint } from "react-pro-sidebar";
import { BsFillGrid1X2Fill, BsFillFileTextFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import styles from '../styles/Sidebar.module.css';
import NavbarTop from './NavbarTop';
import Link from 'next/link'

export default function Sidebars({navTitle, navSubTitle, ruta, children}) {
    const { collapseSidebar } = useProSidebar();
    const { toggleSidebar } = useProSidebar();
    const [iscollapse, setIsCollapse] = useState(true);
    const [toggled, setToggled] = useState(false);

    const toggle = () => {
        setToggled(!toggled);
        toggleSidebar();
        if (!iscollapse) {
            setIsCollapse(!iscollapse)
            collapseSidebar()
        }
        console.log(breakPoint)
    }
    const collapse = () => {
        setIsCollapse(!iscollapse)
        collapseSidebar()
    }
    const condition_2 = false;

    const resumen = ruta === 'resumen' ? `${styles.menuItem} ${styles.active}` : `${styles.menuItem}`
    const instructions = ruta === 'instructions' ? `${styles.menuItem} ${styles.active}` : `${styles.menuItem}`
    const team = ruta === 'team' ? `${styles.menuItem} ${styles.active}` : `${styles.menuItem}`
    const specials = ruta === 'specials' ? `${styles.menuItem} ${styles.active}` : `${styles.menuItem}`
    const terms = ruta === 'terms' ? `${styles.menuItem} ${styles.active}` : `${styles.menuItem}`
    const classCollapse = iscollapse ? `${styles.collapse}` : `${styles.collapsed}`

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar
                style={{display: 'flex'}}
                transitionDuration={1000}
                breakPoint="md"
                className={styles.contentSidebar}
                backgroundColor="#120639"
                ligth
            >
                <Menu>
                    <div>
                        <MenuItem
                            icon={<BsFillGrid1X2Fill />}
                            component={<Link href="/resumen" />}
                            className={resumen}
                        >
                            <div className={styles.activeBookmark}/>
                            Resumen
                        </MenuItem>
                        <MenuItem
                            icon={<BsFillFileTextFill />}
                            component={<Link href="/instrucciones" />}
                            className={instructions}
                        >
                            <div className={styles.activeBookmark}/>
                            Instrucciones
                        </MenuItem>
                        <MenuItem
                            icon={<HiUsers />}
                            component={<Link href="/mi-equipo" />}
                            className={team}
                        >
                            <div className={styles.activeBookmark}/>
                            Mi equipo
                        </MenuItem>
                        <hr/>
                        <MenuItem
                            icon={<HiUsers />}
                            component={<Link href="/casos-especiales" />}
                            className={specials}
                        >
                            <div className={styles.activeBookmark}/>
                            Casos Especiales
                        </MenuItem>
                        <MenuItem
                            icon={<HiUsers />}
                            component={<Link href="/terminos-y-condiciones" />}
                            className={terms}
                        >
                            <div className={styles.activeBookmark}/>
                            T??rminos y <br/>
                            condiciones
                        </MenuItem>
                    </div>
                    <MenuItem
                        icon={<HiUsers />}
                        component={<Link href={"/"} />}
                        className={styles.menuItem}
                    >
                        Cerrar sesi??n
                    </MenuItem>
                </Menu>
                <a className={classCollapse}
                   hideIn="md"
                   onClick={() => collapse()}
                >
                    {iscollapse ?
                        <FaChevronLeft/>
                    :
                        <FaChevronRight/>
                    }
                </a>
            </Sidebar>
            <main className={styles.main}>
                <NavbarTop navTitle={navTitle} navSubTitle={navSubTitle} toggle={toggle} />
                {children}
            </main>
        </div>
    );
}
