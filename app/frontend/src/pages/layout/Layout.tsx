import { Outlet, NavLink, Link } from "react-router-dom";

import logoencamina from "../../assets/logo-encamina.svg";
import github from "../../assets/logo-gada.svg";

import styles from "./Layout.module.css";

import { useLogin } from "../../authConfig";

import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <a href="#" target={"_blank"} title="GADA-i example"></a>
                        <a href="#" target={"_blank"} title="ENCAMINA example">
                            <img src={logoencamina} alt="GAdA-i logo" width="100%" height="auto" className={styles.LogoEncaminaHeader} />
                        </a>
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/docs" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Documents
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <h4 className={styles.headerRightText}>GADA-i | Powered by Microsoft Azure and OpenAI</h4>
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <img src={github} alt="GADA-i logo" width="100%" height="auto" className={styles.LogoEncaminaHeader} />
                    <h4 className={styles.headerTitle}>Archivado y Gestión de Documentos Digitales en la nube de Azure con Inteligencia Artificial</h4>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
