// generate a random color
function rand_color(){
    const a_num = () => Math.floor(Math.random() * 255)

    return `rgb(${a_num()}, ${a_num()}, ${a_num()})`
}

