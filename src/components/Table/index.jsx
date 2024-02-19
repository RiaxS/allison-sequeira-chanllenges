import { useState, useEffect, useMemo } from "react";

export default ({ csv }) => {
    const jsonData = useMemo(() => {
        console.log("csv transform");
        const startArr = csv.split("\n");
        const firstLine = startArr.shift().split(".");
        return startArr.map((line) => {
            let curLine = line.split(".");

            return firstLine.reduce((acc, cur, index) => {
                acc[cur] = curLine[index];
                return acc;
            }, {});
        });
    }, [csv]);

    const [, setTime] = useState(new Date());
    useEffect(() => {
        const time = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(time);
        };
    }, []);


    return (
        <>
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </>
    );
};