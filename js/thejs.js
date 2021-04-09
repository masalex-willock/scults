let favourite = 'coding and CG stuff'

function masalex8 (time, pay, activity){
    if (activity === 'web development')
        alert('this dude can do that all the time')
    else if (activity === 'CG things')
        alert('available for that price')
    else{
        (time <= 1200 && pay >= '100$') ? alert('am all in') : alert('i will then pass that')
    }

    return;
}

class People {
    constructor (name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    year(){
        let this_year = new Date()
        return this_year.getFullYear - this.age;
    }
}