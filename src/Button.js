import PropTypes from "prop-types";
import styles from "./Button.module.css"; //css의 모듈화 + css 코드를 js 객체로 변환

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
