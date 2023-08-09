export let counterTime = function getTime() {
    let sec: number = 0
    let min: number = 0
    let hour: number = 0
    setTimeout(() => {
        setInterval(() => {
            sec++
            if (sec === 60) {
                min++
                sec = 0
            }
            if (min === 60) {
                hour++
                min = 0
            }
             console.log(`${hour}:${min}:${sec}`); 
        }, 1000)
    }, 5000)
}
