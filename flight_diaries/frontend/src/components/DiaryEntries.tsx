import React from 'react';
import { NonSensitiveDiaryEntry } from '../types' 
import DiaryEntry from './DiaryEntry';
import Header from './Header';

interface DiaryEntriesProps {
   diaries: NonSensitiveDiaryEntry[];
}

function DiaryEntries(props: DiaryEntriesProps) {
  return (
    <>
        <Header text="Diary entries"/>
        {props.diaries.map( diary => <DiaryEntry key={diary.id} diary={diary}/> )}
    </>
  );
}

export default DiaryEntries;
