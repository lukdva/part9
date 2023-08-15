import React from 'react';
import { NonSensitiveDiaryEntry } from '../types' 
import DiaryEntry from './DiaryEntry';

interface DiaryEntriesProps {
   diaries: NonSensitiveDiaryEntry[];
}

function DiaryEntries(props: DiaryEntriesProps) {
  return (
    <>
        <h1>Diary entries</h1>
        {props.diaries.map( diary => <DiaryEntry key={diary.id} diary={diary}/> )}
    </>
  );
}

export default DiaryEntries;
