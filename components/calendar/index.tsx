import { useState } from 'react'
import { format, getDaysInMonth } from 'date-fns'
import { fr } from 'date-fns/locale'
import styles from './calendar.module.scss'
export default function calendar () {
    const [year, setYear] = useState(parseInt(format(new Date(), 'yyyy')));
    const [month, setMonth] = useState(parseInt(format(new Date(), 'MM')));
    const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(new Date(year, month)))
    const daysOfMonth = [];

    for(let e = 1; e <= daysInMonth; e++) {
        daysOfMonth.push(<div className={styles.dayContainer}><div><button><time dateTime={`${year}-${month}-${e}`}>{e}</time></button></div><div></div></div>);
    }
    return (
        <div className={styles.main}>
            <div className={styles.monthAndYear}>
                <span>{format(new Date(year, month-1, 1), 'MMMM')}</span> <span>{format(new Date(year, month-1, 1), 'yyyy')}</span>
            </div>
            <div className={styles.dayOfWeek}>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
                <div>Su</div>
            </div>
            <div className={styles.dateGrid}>
                {daysInMonth && (
                    <>
                        {daysOfMonth}
                    </>
                )}
            </div>
        </div>
    )
}