import styles from './form.module.scss'
import { useEffect, useState } from 'react';
export default function FormHeader ({className, onSubmit, onClose, data}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [picture, setPicture] = useState('');
    
    useEffect (() => {
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPosition(data.position);
        setPicture(data.picture);
    },[])
    const handleSubmit = () => {
        onSubmit({firstName, lastName, position, picture});
    }
    
    return (
        <div
            className={className}
        >
            header form
            <div
            className={styles.flex}
            >
            <label> Nom
                
            </label>
            <input value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Prénom
                
            </label>
            <input value={firstName}  onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Poste
                
            </label>
            <input value={position}  onChange={e => setPosition(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Photo
                
            </label>
            <input type='file'   onChange={e => setPicture(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    )
}