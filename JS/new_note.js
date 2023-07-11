function Save_Note(title_str, content_str) {
    const note_box = document.createElement('div')
    note_box.classList.add('note-box')
  
    const note_title = document.createElement('div')
    note_title.classList.add('note-title')
    const title = document.createElement('h2')
    title.textContent = title_str
    note_title.appendChild(title)
  
    const hr = document.createElement('hr')
  
    const noteContent = document.createElement('div')
    noteContent.classList.add('note-content')
    const content = document.createElement('p')
    content.textContent = content_str
    noteContent.appendChild(content)
  
    note_box.appendChild(note_title)
    note_box.appendChild(hr)
    note_box.appendChild(noteContent)
  
    document.querySelector('.notes').appendChild(note_box)
  }
  


let title_obj = document.querySelector("#title-input h2")
let content_obj = document.querySelector("#content-input p")

// Create a note

const add_note_button = document.querySelector("#add-button-div button")
const new_note = document.querySelector(".new-note")

add_note_button.addEventListener("click", function(){
    new_note.showModal()

    title_obj.textContent = "Title"
    content_obj.textContent = "Content of your note"
})

// Save the note

const save_bttn = document.querySelector("#save-button")

save_bttn.addEventListener("click", function(){
    let title = title_obj.textContent
    let content = content_obj.textContent

    new_note.close()
    Save_Note(title, content)
})

// Closing modal button

document.querySelector("#close-button").addEventListener("click", function(){
    new_note.close()
})
