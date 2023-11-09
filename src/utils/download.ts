export const triggerDownload = (url: string, filename: string) => {
    let aTag = document.createElement('a')
    aTag.href =  url
    aTag.setAttribute('style', "display: none")
    aTag.download = filename
    document.body.appendChild(aTag)
    aTag.click()
}