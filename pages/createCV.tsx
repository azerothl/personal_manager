import { useState } from "react";
import Image from 'next/image';
import FormDetails from "../components/details/form";
import FormDiplomes from "../components/diplomes/form";
import styles from './lpf.module.scss';
import FormLanguages from '../components/languages/form';
import Scale from '../components/scale/scale'
import FormCompetences from "../components/competences/form";
import FormExperiences from "../components/experiences/form";
import Markdown from "markdown-to-jsx";
import FormHeader from '../components/header/form';
import stylesHeader from '../components/header/header.module.scss';
import CV from "../components/cv";
import { Button } from "../components/atoms/button";

export default function CreateCV() {
    const [personal, setPersonal] = useState({picture:'/images/noprofile.png', firstName:'John', lastName:'Doe', position:'peon'});
    const [details, setDetails] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [socials, setSocials] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [diplomes, setDiplomes] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [showCompetences, setShowCompetences] = useState(false);
    const [showDiplomes, setShowDiplomes] = useState(false);
    const [showExperiences, setShowExperiences] = useState(false);
    const [showPersonal, setShowPersonal] = useState(false);
    const [cvDatas, setCvDatas] = useState({});
    const [showCV, setShowCV] = useState(false);

    const handleDetails = ({icon, title, value, description}) => {
        setDetails((prevDetails) => [...prevDetails, {id:prevDetails.length+1,icon,title,value,description}]);
        setShowDetails(false);
    }

    const removeDetail = (detail) => {
        setDetails((prevDetails) => {
            const d = prevDetails.filter(e => e.id !== detail.id);
            return [...d];
        })
    }

    const handleLanguages = ({language, level}) => {
        setLanguages((prevLanguage) => [...prevLanguage, {id:prevLanguage.length+1, language, level}])
        setShowLanguages(false)
    }

    const removeLanguage = (language) => {
        setLanguages((prevLanguage) => {
            const d = prevLanguage.filter(e => e.id !== language.id);
            return [...d];
        })
    }

    const handleCompetences = ({competence, level}) => {
        setCompetences((prevCompetences) => [...prevCompetences, {id:prevCompetences.length+1, competence, level}])
        setShowCompetences(false)
    }

    const removeCompetence = (competence) => {
        setCompetences((prevCompetences) => {
            const d = prevCompetences.filter(e => e.id !== competence.id);
            return [...d];
        })
    }

    const handleDiplomes = ({diplome, etablissement, date, location}) => {
        setDiplomes((prevDiplomes) => [...prevDiplomes, {id:prevDiplomes.length+1,diplome, etablissement, date, location}]);
        setShowDiplomes(false)
    }

    const removeDiplome = (diplome) => {
        setDiplomes((prevDiplomes) => {
            const d = prevDiplomes.filter(e => e.id !== diplome.id);
            return [...d];
        })
    }

    const handleExperiences = ({position, company, date, location, description}) => {
        setExperiences((prevExperiences) => [...prevExperiences, {id:prevExperiences.length+1,position, company, date, location, description}]);
        setShowDiplomes(false)
    }

    const removeExperience = (experience) => {
        setExperiences((prevExperiences) => {
            const d = prevExperiences.filter(e => e.id !== experience.id);
            return [...d];
        })
    }

    const handlePersonal = ({firstName, lastName, position, picture}) => {
        setPersonal({firstName, lastName, position, picture});
        setShowPersonal(false);
    }

    const handleGenerateCV = () => {
        setCvDatas({personal, details, diplomes, competences, experiences, languages})
        setShowCV(true);
    }
    const handleEditCV = () => {
        
        setShowCV(false);
    }


    return (
        <>
        {!showCV &&
            <>
        <div
        className={styles.formContainer}>
            <div
                className={styles.headerForm}
            >
               <h2>Entete <button className={styles.buttonNew} onClick={() => setShowPersonal(true)}>✏️</button></h2> 
                {showPersonal &&
                    <FormHeader
                        className={styles.personalForm}
                        onSubmit={handlePersonal}
                        onClose={() => setShowPersonal(false)}
                        data={personal}
                    />
                }
                {personal &&
                    (
                    <div
                        className={stylesHeader.header}
                    >
                        <div
                            className={stylesHeader.picture}
                        >
                            <Image
                                src={personal.picture}
                                alt={personal.firstName+' '+personal.lastName}
                                layout='fill'

                                objectFit='contain' />
                        </div><div>
                            <h2>{personal.firstName} {personal.lastName}</h2>
                            <span>{personal.position}</span>
                        </div>
                    </div>
                    )
                }
            </div>
        <div
        className={styles.leftForm}>
            <div
            className={styles.detailsFormContainer}>
                <h2>Détails <button className={styles.buttonNew} onClick={() => setShowDetails(true)}>➕</button></h2>
                {showDetails &&
                    <FormDetails
                        className={styles.detailsForm}
                        onSubmit={handleDetails}
                        onClose={() => setShowDetails(false)}
                    />
                }
            {details && 
                <ul>
                {details.map(e =>
                <li>
                    <div>
                        <div><span>{e.icon}</span> <span>{e.title}</span> <span>{e.value}</span></div>
                        <div>{e.description}</div>
                    </div>
                    <div>
                        <button className={styles.buttonDelete} onClick={() => removeDetail(e)}>❌</button>
                    </div>
                </li>    
                )}
                </ul>
            }
            </div>
            <div
            className={styles.languagesFormContainer}>
                <h2>Langues <button className={styles.buttonNew} onClick={() => setShowLanguages(true)}>➕</button></h2>
                {showLanguages &&
                <FormLanguages
                    className={styles.languagesForm}
                    onSubmit={handleLanguages}
                    onClose={() => setShowLanguages(false)}
                />
                
                }
            {languages && 
                <ul>
                {languages.map(e =>
                <li>
                    <div style={{width:'100%'}}>
                        <Scale
                            label={e.language}
                            level={e.level}
                        />
                            
                    </div>
                    <div>
                        <button className={styles.buttonDelete} onClick={() => removeLanguage(e)}>❌</button>
                    </div>
                </li>    
                )}
                </ul>
            }
            </div>
            <div
            className={styles.competencesFormContainer}>
                <h2>Compétences <button className={styles.buttonNew} onClick={() => setShowCompetences(true)}>➕</button></h2>
            {showCompetences &&
                <FormCompetences
                    className={styles.competencesForm}
                    onSubmit={handleCompetences}
                    onClose={() => setShowCompetences(false)}
                />
            
            }
            {competences && 
                <ul>
                {competences.map(e =>
                <li>
                    <div style={{width:'100%'}}>
                        <Scale
                            label={e.competence}
                            level={e.level}
                        />
                            
                    </div>
                    <div>
                        <button className={styles.buttonDelete} onClick={() => removeCompetence(e)}>❌</button>
                    </div>
                </li>    
                )}
                </ul>
            }
            </div>
            <div
            className={styles.diplomesFormContainer}>
                <h2>Diplômes  <button className={styles.buttonNew} onClick={() => setShowDiplomes(true)}>➕</button></h2>
                {showDiplomes &&
                    <FormDiplomes
                        className={styles.diplomesForm}
                        onSubmit={handleDiplomes}
                        onClose={() => setShowDiplomes(false)}
                    />
                }
                {diplomes &&
                    <ul>
                        {diplomes.map(e =>
                        <li>
                            <div>
                                <div><span>{e.diplome}</span></div> 
                                <div><span>{e.etablissement}</span> <span>{e.date}</span></div>
                                <div><span>{e.location}</span></div>
                            </div>
                            <div>
                                <button className={styles.buttonDelete} onClick={() => removeDiplome(e)}>❌</button>
                            </div>
                        </li>    
                        )}
                    </ul>
                }
            </div>
        </div>
        <div
        className={styles.centerForm}>
            <h2>Experiences <button className={styles.buttonNew} onClick={() => setShowExperiences(true)}>➕</button></h2>
            {showExperiences &&
                <FormExperiences
                    className={styles.experiencesForm}
                    onSubmit={handleExperiences}
                    onClose={() => setShowExperiences(false)}
                />
            }
            {experiences && 
            <ul>
                {experiences.map(e =>
                <li>
                    <div>
                    <h2>{e.position}</h2>
                    <span>{e.company}</span> - <span>{e.location}</span> - <span>{e.date}</span>
                    <Markdown>
                        {e.description}
                    </Markdown>
                    </div>
                    <div>
                        <button className={styles.buttonDelete} onClick={() => removeExperience(e)}>❌</button>
                    </div>
                </li>
                )}
            </ul>
            }
        </div>
        </div>
        <Button style={[styles.generateBtn]} onClick={handleGenerateCV} label='Générer le CV' primary={true}/>
        </>
        }
        {showCV && 
            <>
            <CV
                className={'cv'}
                datas={cvDatas}
            />
            <div
                className={styles.useActions}
            >
            <button className="no-print" onClick={handleEditCV}>Editer le CV</button>
            <button className="no-print" onClick={e => window.print()}>🖨</button>
            </div>
            </>
        }
        </>
    )
}