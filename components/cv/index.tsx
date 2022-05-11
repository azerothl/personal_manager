import styles from './cv.module.scss';
import Details from "../details";
import Diplomes from "../diplomes";
import Experiences from "../experiences";
import Header from "../header";
import Socials from "../socials";
import Languages from '../languages';
import Competences from '../competences';
export default function CV ({className, datas}) {
    return (
        <div
        className={className}>
        <Header
            className={styles.header}
            personal={datas.personal}
            
        />
        <Details
            className={styles.details}
            details={datas.details}
        />
        <Socials
            className={styles.socials}
            socials={datas.socials}
        />
        <Languages
            className={styles.languages}
            languages={datas.languages}
            />
        <Competences
            className={styles.competences}
            competences={datas.competences}
            />
        <Experiences
            className={styles.experiences}
            experiences={datas.experiences} />
        <Diplomes
            className={styles.diplomes}
            diplomes={datas.diplomes} />
        </div>
    ) 
}