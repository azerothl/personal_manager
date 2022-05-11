import styles from './social.module.scss'
export default function Social ({icon, infos}) {
    return (
        <div className={styles.social}>
            <img
                src={icon}
            /> <span>{infos}</span>
        </div>
    )
}