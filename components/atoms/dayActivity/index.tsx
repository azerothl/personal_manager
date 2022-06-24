import style from './dayActivity.module.scss';

interface IDayActivity {
    label: string,
    start: number,
    end: number,
    color ?: string,
    description ?: string,
    location ?: string,
    participant ?: string,
    memo ?: string,
    draggable ?: boolean,
    onDrag ?: (e:React.DragEvent<HTMLDivElement>) => void,
    onDragStart ?: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragEnter ?: (e: React.DragEvent<HTMLDivElement>, index: number) => void,
    onDragLeave ?: (e: React.DragEvent<HTMLDivElement>) => void,
    onDrop ?: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragEnd ?: (e: React.DragEvent<HTMLDivElement>) => void,
    onDragOver ?: (e: React.DragEvent<HTMLDivElement>) => void,
    onStartChange ?: () => void,
    onEndChange ?: () => void,
};

const DayActivity = function ({label,start,end,color,description,location,participant,memo,draggable,onDrag,onDragStart,onDragEnter,onDragLeave,onDrop,onDragEnd,onDragOver,onStartChange,onEndChange}:IDayActivity) {
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

    return (<div 
            className={[style.activityContainer, !draggable ? style.noDrag : ''].join(' ')}
            style={{gridRow:`${gridPosition(start)}/${gridPosition(end)}`, backgroundColor:color || 'lavender'}}
            draggable={draggable}
            onDrag={onDrag}
            onDragStart={onDragStart} 
            onDrop={onDrop}
            >
                <div 
                    
                    className={style.upResize}
                    
                    onMouseDown={onStartChange}
                >&nbsp;</div>
                <div 
                    className={style.activity}
                    
                      
                >
                {label}
                </div>
                <div 
                    
                    className={style.downResize}
                    onMouseDown={onEndChange}
                >&nbsp;</div>
            </div>);

};

export default DayActivity;