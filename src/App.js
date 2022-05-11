import Button from "./Button"; //1 컴포넌트당 1개의 js 파일을 가질 수 있다 => 모듈화
import styles from "./App.module.css"; //css의 모듈화 + css 코드를 js 객체로 변환

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back</h1>
      <Button text={"Continue"} />
    </div>
  ); //브라우저를 통해 html 확인하면 무작위의 class name 붙음, class name을 다 기억할 필요가 없어 편하다!
}

export default App;
