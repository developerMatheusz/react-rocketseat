import styles from "./Comment.module.css";
import profile from "../assets/profile.svg";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profile} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-01 12:35:37">
                Cerca de 1h atrás
              </time>
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </div>
          </header>
          <p>Muito bom cara, parabéns</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
