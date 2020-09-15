const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// Create add command
yargs.command({
    command:"add",
    describe:'add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'NOte body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})


// Create remove command
yargs.command({
    command:"remove",
    describe:'remove a note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command:"list",
    describe:'list all notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command:"read",
    describe:'read the note',
    builder:{
        title:{
            describe:"note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)
//console.log(process.argv)

