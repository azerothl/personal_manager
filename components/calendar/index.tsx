import { useEffect, useState } from 'react'
import { format, getDaysInMonth, getISODay } from 'date-fns'
import { fr } from 'date-fns/locale'
import styles from './calendar.module.scss'
import Select from '../atoms/select';
import DayCard from '../atoms/dayCard';
const Calendar = () => {
    const [year, setYear] = useState(parseInt(format(new Date(), 'yyyy')));
    const [month, setMonth] = useState(parseInt(format(new Date(), 'MM')));
    const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(new Date(year, month-1,1)))
    const [daysOfMonth, setDaysOfMonth] = useState([]);
    const [monthSelector, setMonthSelector] = useState(false);
    const [yearSelector, setYearSelector] = useState(false);
    const [isoDay, setIsoDay] = useState(getISODay(new Date(year, month-1,1)));
    const [showActiveDay, setShowActiveDay] = useState(false);
    const [activeDay, setActiveDay] = useState(format(new Date(), 'dd'));
    let dOfM = [];

    useEffect(()=> {
        for(let e = 1; e <= daysInMonth; e++) {
            dOfM.push(<DayCard 
                year={year}
                month={month}
                day={e}
                weekday={isoDay}
                activities={Math.random()*50}
                onClick={() => {setActiveDay(e+''); setShowActiveDay(!showActiveDay)}}
            />)
        }
        console.log('found', dOfM.length, 'days in month', month);
        setDaysOfMonth(dOfM);
    }, [])
    useEffect(()=> {        
        dOfM = [];
        for(let e = 1; e <= daysInMonth; e++) {
            dOfM.push(<DayCard 
                year={year}
                month={month}
                day={e}
                weekday={isoDay}
                activities={Math.floor(Math.random()*40)}
                onClick={() => {setActiveDay(e+''); setShowActiveDay(!showActiveDay)}}
            />)
        }
        console.log('found', dOfM.length, 'days in month', month);
        setDaysOfMonth(dOfM);
    }, [month, year])

    const handleMonth = (e) => {
        setIsoDay(getISODay(new Date(year, e.value, 1)));
        setDaysInMonth(getDaysInMonth(new Date(year, e.value, 1)));
        setMonth(parseInt(format(new Date(year, e.value,1), 'MM')))       
        setMonthSelector(false);
    }

    const handleYear = (e) => {
        setIsoDay(getISODay(new Date(e.value, month, 1)));
        setDaysInMonth(getDaysInMonth(new Date(e.value, month,1)));
        setYear(parseInt(format(new Date(e.value, month, 1), 'yyyy')))
        setYearSelector(false);
    }

    return (
        <div className={styles.main}>
            Today is {format(new Date(), 'eeee dd MMMM yyyy')}
            <div className={styles.monthAndYear}>
                <span onClick={() => setMonthSelector(true)}>
                    {!monthSelector && format(new Date(year, month-1, 1), 'MMMM')}
                    {monthSelector && (
                        <>
                        <Select 
                            datas={[
                                {value:0,label:format(new Date(year, 0, 1), 'MMMM')},
                                {value:1,label:format(new Date(year, 1, 1), 'MMMM')},
                                {value:2,label:format(new Date(year, 2, 1), 'MMMM')},
                                {value:3,label:format(new Date(year, 3, 1), 'MMMM')},
                                {value:4,label:format(new Date(year, 4, 1), 'MMMM')},
                                {value:5,label:format(new Date(year, 5, 1), 'MMMM')},
                                {value:6,label:format(new Date(year, 6, 1), 'MMMM')},
                                {value:7,label:format(new Date(year, 7, 1), 'MMMM')},
                                {value:8,label:format(new Date(year, 8, 1), 'MMMM')},
                                {value:9,label:format(new Date(year, 9, 1), 'MMMM')},
                                {value:10,label:format(new Date(year, 10, 1), 'MMMM')},
                                {value:11,label:format(new Date(year, 11, 1), 'MMMM')}]}
                            handleSelect={handleMonth}
                            current={month-1}
                        />
                        </>
                    )}
                </span> 

                <span onClick={() => setYearSelector(true)}>
                    {!yearSelector && format(new Date(year, month-1, 1), 'yyyy')}
                    {yearSelector && (
                        <Select
                            datas={[
                                {value:year+2,label:year+2+''},
                                {value:year+1,label:year+1+''},
                                {value:year,label:year+''},
                                {value:year-1,label:year-1+''},
                                {value:year-2,label:year-2+''},
                                {value:year-3,label:year-3+''},
                                {value:year-4,label:year-4+''},
                                {value:year-5,label:year-5+''},
                                {value:year-6,label:year-6+''},
                                {value:year-7,label:year-7+''},
                                {value:year-8,label:year-8+''},
                                {value:year-9,label:year-9+''},
                                {value:year-10,label:year-10+''},
                                {value:year-11,label:year-11+''}
                            ]}
                            handleSelect={handleYear}
                            current={year}
                        />
                    )}
                </span>
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
            {showActiveDay && (
                <div style={{position:'absolute', width:'100vw',height:'100vh', left:0,top:0, backgroundColor:'rgba(0,0,0,0.8)'}} onClick={() => setShowActiveDay(!showActiveDay)}>
                    <div style={{margin:'auto', width:'100rem',backgroundColor:'whitesmoke'}}>
                        list of activities
                    </div>
                </div>
            )}
        </div>
    )
}

export default Calendar;