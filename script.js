
function save_note() {
    var notes = document.getElementById('note')
    var saved_notes = []
    let index = 0;

    saved_notes[index] = notes.value
    index + 1;

    console.log(saved_notes)
    return false;
}