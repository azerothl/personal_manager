import styles from './form.module.scss';
import { useState } from 'react';

export default function FormCompetences ({className, onSubmit, onClose}) {
    const [competence, setCompetence] = useState('');
    const [level, setLevel] = useState(0)

    const handleSubmit = () => {
        onSubmit({competence, level});
    }

    return (
        <div
            className={className}
        >
            <div
                className={styles.flex}
            >
            <label> label <span className="mendatory">*</span></label>
            <input onChange={e => setCompetence(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <span>
            <label> niveau </label>
            </span>
            
            <span>
            <input 
                id='level'
                type='range'  
                onChange={e => setLevel(e.target.value)}
                min={0}
                max={10}
                step={1}   
                value={level} 
            />
            
            <label for='level'>{level}</label>       
            </span>
            
            </div>
            <button onClick={handleSubmit}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    )
}