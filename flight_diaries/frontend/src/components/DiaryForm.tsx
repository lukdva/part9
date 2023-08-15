import React from "react";
import Header from './Header'
import { useState } from "react";
import { createNewDiary } from "../services/diaryService";
import { NonSensitiveDiaryEntry, Visibility, Weather, DiaryEntry } from "../types";

interface diaryFormProps {
    diaries: NonSensitiveDiaryEntry[]
    setDiaries: React.Dispatch<React.SetStateAction<NonSensitiveDiaryEntry[]>>;
}
const DiaryForm = (props: diaryFormProps) => {
    const [date, setDate] = useState('');
    const [visibility, setVisibility] = useState('');
    const [weather, setWeather] = useState('');
    const [comment, setComment] = useState('');
    
    const handleDiarySubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const createdDiary =  createNewDiary({date, visibility: visibility as Visibility, weather: weather as Weather, comment}).then( createdDiary => {
            props.setDiaries(props.diaries.concat(createdDiary));
        });
        setDate('');
        setVisibility('');
        setWeather('');
        setComment('');
    }

    return (
        <>
            <Header text="Add new entry"/>
            <p>

            </p>
            <form onSubmit={handleDiarySubmit}>
                <p>
                    <label>date: </label>
                    <input 
                    type='text' 
                    name='Date'
                    value={date}
                    onChange={({target}) => setDate(target.value)}
                    />
                </p>
                <p>
                    <label>visibility: </label>
                    <input 
                    type='text' 
                    name='Visibility'
                    value={visibility}
                    onChange={({target}) => setVisibility(target.value)}
                    />
                </p>
                <p>
                    <label>weather: </label>
                    <input 
                    type='text' 
                    name='Weather'
                    value={weather}
                    onChange={({target}) => setWeather(target.value)}
                    />
                </p>
                <p>
                    <label>comment: </label>
                    <input 
                    type='text' 
                    name='Comment'
                    value={comment}
                    onChange={({target}) => setComment(target.value)}
                    />
                </p>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default DiaryForm