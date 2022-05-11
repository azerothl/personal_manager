import dynamic from 'next/dynamic';
import styles from './form.module.scss'
const EmojiPicker = dynamic(() => import('emoji-picker-react'), { ssr: false });
import { useState } from 'react';
export default function FormDetails({className, onSubmit, onClose}) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [emoji, setEmoji] = useState('❓');
    const [showEmoji, setShowEmoji] = useState(false);

    const handleEmoji = (event, emojiObject) => {
        setEmoji(emojiObject.emoji)
    }

    const handleSubmit = () => {
        onSubmit({icon:emoji, title, value, description});
    }

    return (
        <div
            className={className}
        >
            <div
                className={styles.flex}
            >
            <label> Icone <span className="mendatory">*</span>
                
            </label>
            <button onClick={() => setShowEmoji(!showEmoji)}>{emoji}</button>
                <div
                className='emoji-container'>
                {showEmoji &&
                <EmojiPicker 
                    pickerStyle={{position:'absolute'}}
                    onEmojiClick={handleEmoji}
                />
                }
                </div>
            </div>
            <div
            className={styles.flex}
            >
            <label> title
                
            </label>
            <input onChange={e => setTitle(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
                <label> Value  <span className="mendatory">*</span>
                    
                </label>
                <input onChange={e => setValue(e.target.value)}/>
            </div>
            <div
            className={styles.flex}
            >
            <label> Description
                
            </label>
            <input onChange={e => setDescription(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    )
}