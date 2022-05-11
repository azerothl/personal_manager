import styles from './experience.module.scss'
import Markdown from 'markdown-to-jsx';
export default function Experience ({position, date, company, location, description}) {
    return (
        <div
            className={styles.nobreak}
        >
            <h2>{position}</h2>
            <span>{company}</span> - <span>{location}</span> - <span>{date}</span>
            <Markdown>
                {description}
            </Markdown>
        </div>
    )
}