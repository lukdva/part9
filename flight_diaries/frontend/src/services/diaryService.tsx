import axios from 'axios';
import {NonSensitiveDiaryEntry, NewDiaryEntry, DiaryEntry} from '../types';

const baseUrl = 'http://localhost:3003/api/diaries'

export const getAllDiaries = () => {
    return axios
        .get<NonSensitiveDiaryEntry[]>(baseUrl)
        .then(response => response.data)
}

export const createNewDiary = (object: NewDiaryEntry) => {
    return axios
        .post<DiaryEntry>(baseUrl, object)
        .then(response => response.data)
}