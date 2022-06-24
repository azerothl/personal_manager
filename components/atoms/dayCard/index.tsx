import style from './dayCard.module.scss';
import colorActivities from './activities.constants'

export interface IDayCard {
    year:number,
    month:number,
    day:number,
    weekday?:number,
    activities?:number,
    onClick?:any
}

const DayCard = function ({year, month, day,weekday,activities=0,onClick}:IDayCard) {
    const getActivitiesContent = (a) => {
        const content = [];
        for(let i = 0; i < a; i++) {
            content.push(<div className={style.activity} style={{backgroundColor: colorActivities[colorActivities.length - 1 - i],flexBasis:'0',flexGrow:1,flexShrink:'0.2',borderRadius:'5px'}}>&nbsp;</div>)
        }
        return content;
    }
    return (
        <div className={style.dayContainer} style={{gridColumn: day===1?weekday:'auto'}} onClick={onClick}>
            <div>
                <div className={style.dayNumber}>
                    <time dateTime={`${year}-${month}-${day}`}>{day}</time>
                </div>
                <div className={style.dayActions}>
                    {getActivitiesContent(activities)}
                </div>
            </div>
       </div>
    )
}

export default DayCard;