import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import styles from './form.module.scss'
export default function FormDiplomes ({className, onSubmit, onClose}) {
    const [diplome, setDiplome] = useState('');
    const [etablissement,setEtablissement] = useState('');
    const [date, setDate] = useState([new Date(),new Date()]);
    const [location, setLocation] = useState('');
    
    const handleSubmit = () => {
        console.log('date', date);
        const dedupDate = [...new Set(date)];
        console.log('dedup date', dedupDate);
        let fromString = 'de ';
        let toString = ' à ';
        if(dedupDate.length === 1) {
            fromString = 'depuis ';
            toString = '';
        }
        const dateFormat = `${fromString} ${format(date[0], 'MMMM yyyy', {locale:fr})} ${toString} ${(date[1])?format(date[1], 'MMMM yyyy', {locale:fr}):''}`;
        console.log('date format',dateFormat)
        onSubmit({diplome, etablissement, date:dateFormat, location});
    }

    return (
        <div
            className={className}
        >
            <div
                className={styles.flex}
            >
            <label> Diplôme <span className="mendatory">*</span></label>
            <input onChange={e => setDiplome(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Etablissement </label>
            <input onChange={e => setEtablissement(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Date  <span className="mendatory">*</span></label>
            <DateRangePicker 
                onChange={setDate} 
                value={date}
                maxDetail='year'
                returnValue='range'/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Location </label>
            <input onChange={e => setLocation(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    )
}