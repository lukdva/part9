import React from 'react';
import DiaryEntries from './DiaryEntries';
import { NonSensitiveDiaryEntry} from '../types';
import { useState, useEffect } from 'react';
import { getAllDiaries } from '../services/diaryService';
import DiaryForm from './DiaryForm';

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, []);

  return (
    
    <>
      <DiaryForm diaries={diaries} setDiaries={setDiaries}></DiaryForm>
      <DiaryEntries diaries={ diaries }/>
    </>
  );
}

export default App;
