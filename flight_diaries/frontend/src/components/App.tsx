import React from 'react';
import DiaryEntries from './DiaryEntries';
import { NonSensitiveDiaryEntry} from '../types';
import { useState, useEffect } from 'react';
import { getAllDiaries } from '../services/diaryService';

function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);

  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, []);

  return (
    <>
      <DiaryEntries diaries={ diaries }/>
    </>
  );
}

export default App;
