import styles from './Button.module.css'

export default function Button(props) {
  return(
    <span className={styles.button}>{props.children}</span>
  )
}