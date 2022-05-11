import styles from './header.module.scss'
import Image from 'next/image';
export default function Header ({className, personal}) {

    return (
        <div
            className={className + ' ' + styles.header}
        >
            <div
                className={styles.picture}
            >
                <Image
                    src={personal.picture}
                    alt={personal.name}
                    layout='fill'
                    
                    objectFit='contain'
                />
            </div>
            <div>
                <h2>{personal.name}</h2>
                <span>{personal.position}</span>
            </div>
        </div>
    )
}