const run = () => {
    const cardElements = document.getElementsByClassName('Card')
    const cardArr = Array.from(cardElements)

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

    cardArr.forEach(item => {
        if(findVideo(item)) {
            item.style.display = 'none'
        }
    })

}


setInterval(() => {
    run()
}, 1000);