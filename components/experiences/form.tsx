import styles from './form.module.scss';
import { useState } from 'react';
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false })
import "easymde/dist/easymde.min.css";
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export default function FormExperiences ({className, onSubmit, onClose}) {
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('');
    const [date, setDate] = useState([new Date(),new Date()]);
    const [description, setDescription] = useState('');

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
        onSubmit({position, company, date:dateFormat, location, description});
    }

    return (
        <div
            className={className}
        >
            <div
            className={styles.flex}
            >
                <label> Position  <span className="mendatory">*</span>
                    
                </label>
                <input onChange={e => setPosition(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
                <label> Société  <span className="mendatory">*</span>
                    
                </label>
                <input onChange={e => setCompany(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
                <label> Location  <span className="mendatory">*</span>
                    
                </label>
                <input onChange={e => setLocation(e.target.value)}/>
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
                <SimpleMDE value={description} onChange={setDescription}/>
            </div>
            <button onClick={handleSubmit}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    )
}