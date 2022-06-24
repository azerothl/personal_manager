import { useEffect, useState } from 'react';
import style from './select.module.scss';
import { disabled } from '../../../.history/components/atoms/button/button.stories_20220615112835';

export interface ISelectDatas {
    label:string,
    value:number,
    icon?:string,
    description?:string
}

export interface ISelect {
    datas:ISelectDatas[],
    current?:number,
    handleSelect?:any,
    showCurrent?:boolean,
    isDisabled?:boolean
}

const Select = function ({datas, current, handleSelect, showCurrent=true, isDisabled=false}:ISelect) {
    const [showSelection, setShowSelection] = useState(false);
    const [selectValue, setSelectValue] = useState({});
    
    useEffect(() => {
        if(current) {
            datas.forEach(e => {if(e.value === current) {setSelectValue(e)}});
        }
    }, [])

    const handleValue = (e) => {
        if(!isDisabled) {
            setSelectValue(e)
            handleSelect?handleSelect(e):null;
            setShowSelection(false);
        }
    }

    return (
        <div
            className={[style.selector, isDisabled?style['selector--disabled']:''].join(' ')}
        >
            <div 
                className={style.selectedLabel}
                onChange={handleSelect}
                defaultValue={current}
                onClick={() => setShowSelection(!showSelection)}
            >
                {selectValue?selectValue.label:''}
            </div>
            {showSelection && (
            <ul>
                {datas && datas.map( e => 
                    <li onClick={() => handleValue(e)} className={(showCurrent && selectValue === e)?style.selected:null}><div>{e.icon?<img src={e.icon} />:''} {e.label} </div> <div>{e.description?e.description:''}</div></li>
                )}
            </ul>
            )}
        </div>
    )
}

export default Select