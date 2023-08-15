import React from 'react';
import { NonSensitiveDiaryEntry } from '../types' 

interface DiaryEntryProps {
   diary: NonSensitiveDiaryEntry;
}

function DiaryEntry(props: DiaryEntryProps) {
  return (
    <>
        <h2>{props.diary.date}</h2>
        <p>visibility:{props.diary.visibility}</p>
        <p>weather:{props.diary.weather}</p>
    </>
  );
}

export default DiaryEntry;
