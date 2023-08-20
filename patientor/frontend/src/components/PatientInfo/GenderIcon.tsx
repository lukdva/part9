import React from "react";
import { Gender } from "../../types";
import {QuestionMark, Female, Male} from '@mui/icons-material';
interface GIconProps {
    gender: Gender
}

const GenderIcon = (props: GIconProps) => {
    switch (props.gender){
        case Gender.Male:
            return (<Male/>);
        case Gender.Female:
            return (<Female/>);
        default :
            return (<QuestionMark/>)
    }
    
}
export default GenderIcon;