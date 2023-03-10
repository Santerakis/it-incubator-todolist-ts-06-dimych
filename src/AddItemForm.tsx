import React, {KeyboardEvent, ChangeEvent, useState} from 'react';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {
    let [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const addItem = () => {
        if(title.trim() !== '') {
            props.addItem(title)
            setTitle('')
        }
        else{
            setError('Title is required')
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if(e.key === 'Enter') {
            addItem()
        }
    }

    return (
        <div>
            <input value={title}
            onChange={onChangeHandler}
            onKeyDown={onKeyPressHandler}
            className={error ?'error' :''}
            />
            <button onClick={addItem}>x</button>
            {error && <div className='error-message'>{error}</div>}
        </div>
    );
};

export default AddItemForm;