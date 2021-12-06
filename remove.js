const findVideo = (item) => {
    if(!item) return false
    if(typeof item.className == 'string' && (item.className.includes('ZVideoItem') || item.className.includes('VideoAnswerPlayer'))) return true
    const children = Array.from(item.children)
    if(children.length > 0) {
        for(let child of children) {
            if(findVideo(child)) return true
        }
    }
    return false
}

const findAd = (item) => {
    if(!item) return false
    if(typeof item.className == 'string' && item.className.includes('Pc-feedAd-container ')) return true
    const children = Array.from(item.children)
    if(children.length > 0) {
        for(let child of children) {
            if(findAd(child)) return true
        }
    }
    return false
}

const run = () => {
    const cardElements = document.getElementsByClassName('Card')
    const cardArr = Array.from(cardElements)

    cardArr.forEach(item => {
        if(findVideo(item) || findAd(item)) {
            item.style.display = 'none'
        }
    })

}


setInterval(() => {
    run()
}, 1000);