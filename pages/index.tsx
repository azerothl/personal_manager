import styles from './lpf.module.scss'
import Details from "../components/details";
import Diplomes from "../components/diplomes";
import Experiences from "../components/experiences";
import Header from "../components/header";
import Socials from "../components/socials";
import Languages from '../components/languages';
import Competences from '../components/competences';

import data from '../public/data/exemple.js';
import CV from '../components/cv';


function HomePage() {

    return (
        <>
            <CV
                className={'cv'}
                datas={data}
            />
        </>
    )
    // return (
    //     <>
    //     <Header
    //         className={styles.header}
    //         personal={data.personal}
            
    //     />
    //     <Details
    //         className={styles.details}
    //         details={data.details}
    //     />
    //     <Socials
    //         className={styles.socials}
    //         socials={data.socials}
    //     />
    //     <Languages
    //         className={styles.languages}
    //         languages={data.languages}
    //         />
    //     <Competences
    //         className={styles.competences}
    //         competences={data.competences}
    //         />
    //     <Experiences
    //         className={styles.experiences}
    //         experiences={data.experiences} />
    //     <Diplomes
    //         className={styles.diplomes}
    //         diplomes={data.diplomes} />
    //     </>
    // )
}

export default HomePage;