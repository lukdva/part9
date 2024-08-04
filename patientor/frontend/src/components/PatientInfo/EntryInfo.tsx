import React from "react";
import { Entry } from "../../types";
import { Typography } from "@mui/material";
interface EntryProps {
    entry: Entry
}

const EntryInfo = (props: EntryProps) => {
    return (
        <>
            <Typography>{props.entry.date} <i>{props.entry.description}</i></Typography>
            <ul>
                {props.entry.diagnosisCodes?.map((code:string) => (
                    <li> {code} </li>
                ))}
            </ul>
        </>
    )
}
export default EntryInfo;