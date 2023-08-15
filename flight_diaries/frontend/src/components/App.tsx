import React from 'react';
import DiaryEntries from './DiaryEntries';
import { NonSensitiveDiaryEntry, NotificationType} from '../types';
import { useState, useEffect } from 'react';
import { getAllDiaries } from '../services/diaryService';
import DiaryForm from './DiaryForm';
import Notification from './Notification';


function App() {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  const [message, setMessage] = useState('');
  const [notificationType, setNotificationType] = useState<NotificationType>(NotificationType.Error);

  useEffect(() => {
    getAllDiaries().then(data => {
      setDiaries(data)
    })
  }, []);

  return (
    
    <>
      <Notification notificationType={notificationType} msg={message}/>
      <DiaryForm diaries={diaries} setDiaries={setDiaries} setMessage={setMessage} setNotificationType={setNotificationType} ></DiaryForm>
      <DiaryEntries diaries={ diaries }/>
    </>
  );
}

export default App;
