import logo from '../../img/logo.png'
import styles from './index.module.css'

export const Logo = () => {
    return (
        <div>
            <img src={logo} alt="logo" className={styles.logo}/>
        </div>
    )
}