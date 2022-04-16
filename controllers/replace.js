const words = require("../words/words.json")

module.exports = async (req, res) => {
    try {
        const requestData = extractData(req)
        await analyseData(requestData)
        const acronym = await replaceWord(requestData)
        res.send({acronyms: acronym})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

function extractData(request) {
    const { words } = request.body
    return { words }
}

async function analyseData(request) {
    if (!request.words) {
        throw Error("Invalid data")
    }
}

async function replaceWord(request) {
    let acronyms = new Array()
    for (let i = 0; i < request.words.length; i++) {
        request.words[i] = request.words[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        request.words[i] = request.words[i].toUpperCase()
    }
    for (word of request.words) {
        for (let index = 0; index < words.length; index++) {
            if (words[index].word == word) {
                acronyms.push(words[index].acronym)
            }
        }
    }
    return acronyms
}