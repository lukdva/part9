import React from "react";
import { Entry } from "../../types";
import EntryInfo from "./EntryInfo";

interface EntryProps {
    entries: Entry[]
}

const EntryInfoList = (props: EntryProps) => {
    return (
        <>
            <h3>entries</h3>
                {
                    props.entries.map((entry:Entry) => (
                        <EntryInfo entry={entry}/>
                    ))
                }
        </>
        
    )
}
export default EntryInfoList;