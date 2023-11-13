import styles from "./Post.module.css";
import profile from "../assets/profile.svg";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post(props) {
  console.log(props);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={profile} />
          <div className={styles.authorInfo}>
            <strong>Matheus Zanela</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maio às 08:13" dateTime="2022-05-01 12:35:37">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>
          Acabei de subir mais um projeto no meu portifólio. É um projeto que
          fiz no NLW Return, evento da Rocketseat.
        </p>
        <p>O nome do projeto é DoctorCare:</p>
        <p>
          <a href="#">matheus.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          {" - "}
          <a href="#">#nlw</a>
          {" - "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
