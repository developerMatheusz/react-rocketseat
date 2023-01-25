import styles from "./Sidebar.module.css";
import banner from "../assets/banner.jpg";
import profile from "../assets/profile.svg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {

    return(

        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src={banner} 
                alt="Logo developer"
            />
            <div className={styles.profile}>
                <Avatar src={profile}/>
                <strong>Matheus Zanela</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    );

}
