//const timeNodes = document.querySelectorAll("[data-time]");
//this is a node list not an array, need to turn it into an array in order to map it

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(":").map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600; 
    // % tells you how many are left after everything is distributed evenly, so say you have 10 M&Ms and 5 kids, Math.floor(11 / 5) will give you 2 (each kid gets 2 m&ms), and 11 % 5 will give you 1 (after the m&Ms have been divided, there's one left over)
    
    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
    
    console.log(hours, mins, secondsLeft)
