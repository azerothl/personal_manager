import styles from './form.module.scss';
import { useState } from 'react';

export default function FormLanguages ({className, onSubmit, onClose}) {
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState(0)

    const handleSubmit = () => {
        onSubmit({language, level});
    }

    return (
        <div
            className={className}
        >
            <div
                className={styles.flex}
            >
            <label> Langue <span className="mendatory">*</span></label>
            <input onChange={e => setLanguage(e.target.value)}/>
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