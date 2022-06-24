import style from './hourGrid.module.scss'
import DayActivity from '../atoms/dayActivity';
import { useState } from 'react';
interface IActivities {
    label: string,
    start: number,
    end: number,
    color ?: string,
    description ?: string,
    location ?: string,
    participant ?: string,
    memo ?: string,
    draggable ?: boolean,
}

interface IHourGrid {
    activities?: IActivities[]
}

const HourGrid = function ({activities}:IHourGrid) {
    const [dragStart, setDragStart] = useState(0);
    const [dragEnd, setDragEnd] = useState(0);
    const [dragItem, setDragItem] = useState<IActivities | null>(null);
    const timeToDecSplit = (time:number) => {
        const hour = Math.floor(time / 100)
        const minute = time % 100;
        return {hour , minute}
    }    

    const gridPosition = (time) => {
        const {hour, minute} = timeToDecSplit(time);
        console.log('grid position for ', time, hour*4-3, minute/15, hour*4-3+minute/15);
        return hour*4-3+minute/15;
    }

    const handleDrag = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        (e.target as HTMLDivElement).style.backgroundColor = "#336699";
        // console.log('drag',e);
        // console.log('position drag', e.clientY,'/', e.screenY, Math.round(e.clientY / 16 /0.5)-1);
        const duration = parseInt((e.target as HTMLDivElement).style.gridRowEnd) - parseInt((e.target as HTMLDivElement).style.gridRowStart)
        const start = ((dragStart === 0 && dragEnd === 0)||dragStart === 1)?Math.round(e.clientY / 16 /0.5)-1:parseInt((e.target as HTMLDivElement).style.gridRowStart);
        const end = (dragStart === 0 && dragEnd === 0)?parseInt((e.target as HTMLDivElement).style.gridRowEnd) - parseInt((e.target as HTMLDivElement).style.gridRowStart) + start:(dragEnd === 1)?Math.round(e.clientY / 16 /0.5)-1:parseInt((e.target as HTMLDivElement).style.gridRowEnd);
        console.log('start',dragStart, start, 'end',dragEnd, end);
        if(start >= 1 && end <= 97) {
            (e.target as HTMLDivElement).style.gridRowStart = start+'';
            (e.target as HTMLDivElement).style.gridRowEnd = end+'';
        }
    }

    const handleDragStart = (e:IActivities) => {
        
        // e.preventDefault();
        // e.stopPropagation();
        setDragItem(e);
        console.log('drag start', e);
    };

    const handleDragEnter = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        // e.target.style.backgroundColor = "#336699";
        console.log('drag enter', e);
        //setDragItem(e);
        
    };

    const handleDragLeave = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        //e.target.style.backgroundColor = "black";
        console.log('drag leave', e);
    };

    const handleDrop = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        // e.target.style.backgroundColor = "initial";
        console.log('drop', e);
    };

    const handleDragEnd = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('drag end', e);
        const start = parseInt((e.target as HTMLDivElement).style.gridRowStart);
        const startHour = Math.floor((start*15-15)/60+1)*100;
        const startMinute = (start*15-15)%60;
        
        const end = parseInt((e.target as HTMLDivElement).style.gridRowEnd);
        const endHour = Math.floor((end*15-15)/60+1)*100;
        const endMinute = (end*15-15)%60;
        if(dragItem) {
            (e.target as HTMLDivElement).style.backgroundColor = dragItem.color || "lavender";
            dragItem.start = startHour + startMinute;
            dragItem.end = endHour + endMinute;
            setDragItem(null);
            if(dragStart) setDragStart(0);
            if(dragEnd) setDragEnd(0);
        }
    };

    const handleStartChange = () => {
        console.log('start change');
        setDragStart(1);
    }

    const handleEndChange = () => {
        console.log('end change');
        setDragEnd(1);
    }
    

    const hours = [{label:'01'},{label:'02'},{label:'03'},{label:'04'},{label:'05'},{label:'06'},{label:'07'},{label:'08'},{label:'09'},{label:'10'},
                    {label:'11'},{label:'12'},{label:'13'},{label:'14'},{label:'15'},{label:'16'},{label:'17'},{label:'18'},{label:'19'},{label:'20'},{label:'21'},{label:'22'},{label:'23'},{label:'24'}];
    return (
        <div className={style.hourGridContainer}
            onDragLeave={(e) => handleDragLeave(e)}>
            <div className={style.hourGrid}>
                {hours.map (e => 
                    <>
                        <div key={e.label} className={style.hourLine}><span className={style.hourLabel}>{e.label}</span></div>
                        <div key={e.label+'15'} className={style.subHourLine}>&nbsp;</div>
                        <div key={e.label+'30'} className={style.subHourLine}>&nbsp;</div>
                        <div key={e.label+'45'} className={style.subHourLine}>&nbsp;</div>
                    </>
                )}
            </div>
            <div 
                className={style.hourGrid} 
                style={{position:'absolute',top:0, columnGap:'0.2rem', width:'100%'}}
                onDragEnter={(e) => handleDragEnter(e)}
                
                onDrop={(e) => handleDrop(e)} 
                onDragEnd={(e) => handleDragEnd(e)}
                onDragOver={(e) => e.preventDefault()}
            >
                {activities && activities.map((e,idx) => 
                  <DayActivity 
                    key={e.label} 
                    draggable={e.draggable || true}
                    onDrag={(e) => handleDrag(e)}
                    onDragStart={() => handleDragStart(e)}
                    onStartChange={() => handleStartChange()}
                    onEndChange={() => handleEndChange()}
                    {...e} 
                  />  
                )}
            </div>
        </div>
    )
}

export default HourGrid;