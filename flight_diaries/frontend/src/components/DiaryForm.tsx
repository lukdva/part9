import React from "react";
import Header from './Header'
import { useState } from "react";
import { createNewDiary } from "../services/diaryService";
import { NonSensitiveDiaryEntry, Visibility, Weather, NotificationType } from "../types";
import axios from "axios";

interface diaryFormProps {
    diaries: NonSensitiveDiaryEntry[]
    setDiaries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
    setNotificationType: React.Dispatch<React.SetStateAction<NotificationType>>;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}
const DiaryForm = (props: diaryFormProps) => {
    const [date, setDate] = useState('');
    const [visibility, setVisibility] = useState(Visibility.Great);
    const [weather, setWeather] = useState(Weather.Sunny);
    const [comment, setComment] = useState('');

    const styles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px'
    }

    const handleDiarySubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const createdDiary =  createNewDiary({date, visibility: visibility as Visibility, weather: weather as Weather, comment})
        .then( createdDiary => {
            props.setDiaries(props.diaries.concat(createdDiary));
            setDate('');
            setComment('');
        })
        .catch(error => {
            if(axios.isAxiosError(error)) {
                props.setMessage(error.response?.data);
                props.setNotificationType(NotificationType.Error);
                setTimeout(() => {
                    props.setMessage('')
                }, 3000)
            }
        });

    }

    return (
        <>
            <Header text="Add new entry"/>
            <form onSubmit={handleDiarySubmit}>
                <div>
                    <label>date: </label>
                    <input 
                    type='date' 
                    name='Date'
                    value={date}
                    onChange={({target}) => setDate(target.value)}
                    />
                </div>
                <div>
                    <label>Visibility: </label>
                    <div style={styles}>
                        {Object.values(Visibility).map(v => 
                            <div key={v}>
                                <label>{v}</label>
                                <input 
                                type='radio' 
                                name='Visibility'
                                checked={visibility === v}
                                onChange={() => setVisibility(v)}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label>Weather: </label>
                    <div style={styles}>
                        {Object.values(Weather).map(w => 
                            <div key={w}>
                                <label>{w}</label>
                                <input 
                                type='radio' 
                                name='Weather'
                                checked={weather === w}
                                onChange={() => setWeather(w)}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label>comment: </label>
                    <input 
                    type='text' 
                    name='Comment'
                    value={comment}
                    onChange={({target}) => setComment(target.value)}
                    />
                </div>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default DiaryForm