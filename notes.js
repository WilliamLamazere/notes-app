const fs = require('fs')
const { default: chalk } = require('chalk')


const addNote = (title,body) => {
    notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('new note added'))
    } else {console.log(chalk.red('note title taken!')) }

   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>  {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const listNotes = () => {
    console.log(chalk.inverse.white("Your notes"))

    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    }) 
}

const readNote = (title) => {
    const notes = loadNotes()

    requestedNote = notes.find((note) => note.title === title)
    if (!requestedNote) {
        console.log(chalk.red("no note with this title"))
    } else {
        console.log(chalk.inverse.blueBright(requestedNote.title));
        console.log(requestedNote.body)
    } 
}

const removeNote = (title) =>  {
    notes = loadNotes()

    const notesToKeep = notes.filter( (note) => note.title !== title)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red('No note found!'))
    } else {
        console.log(chalk.green('Note removed!'))
    }

    saveNotes(notesToKeep)

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}