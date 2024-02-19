import { useCallback, useEffect, useMemo } from "react"

export default ({test = '', arr = [1,2,3]}) => {
    const myVar = useMemo(() => [...arr, 4], [arr])
    const myFunc = useCallback(() => {
        return `the value is ${test}`
    }, [test])
    useEffect(() => {
        myFunc(myVar)
    }, [myFunc, myVar])
    return <div>Ola</div>;
}