import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./css/global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: "../assets/profile.svg", 
      name: "Matheus Zanela", 
      role: "CTO @Rocketseat"
    }, 
    content: [
      { type: "paragraph", content: "Fala galera!" }, 
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat." }, 
      { type: "paragraph", content: "O nome do projeto é DoctorCare:" }, 
      { type: "link", content: "matheus.design/doctorcare" }
    ], 
    publishedAt: new Date("2022-05-03 20:00:57")
  }, 
  {
    id: 2, 
    author: {
      avatarUrl: "../assets/profile.svg", 
      name: "João Aguilar", 
      role: "Educator @Rocketseat"
    }, 
    content: [
      { type: "paragraph", content: "Fala galera!" }, 
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat." }, 
      { type: "paragraph", content: "O nome do projeto é DoctorCare:" }, 
      { type: "link", content: "matheus.design/doctorcare" }
    ], 
    publishedAt: new Date("2022-05-10 19:35:41")
  }
];

export function App() {

  return (

    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return(
                <Post 
                  author={post.author} 
                  content={post.content} 
                  publishedAt={post.publishedAt}
                />
              );
            })
          }
        </main>
      </div>
    </div>
    
  );

}
