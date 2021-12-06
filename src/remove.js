const names = ['ZVideoItem','VideoAnswerPlayer','Pc-feedAd-container']

const hasNames = (str) => {
    return names.some((item) => str.includes(item))
}

const findNames = item => {
    if(!item) return false
    if(typeof item.className == 'string' && hasNames(item.className)) return true
    const children = Array.from(item.children)
    if(children.length > 0) {
        for(let child of children) {
            if(findNames(child)) return true
        }
    }
    return false
}

const run = () => {
    const cardElements = document.getElementsByClassName('Card')
    const cardArr = Array.from(cardElements)

    cardArr.forEach(item => {
        if(findNames(item)) {
            item.style.display = 'none'
        }
    })

}


setInterval(() => {
    run()
}, 1000);