
var id = 0;

var title = document.getElementById("title-input");
var content = document.getElementById("content-input");
var editTitle = document.getElementById("edit-title-input");
var editContent = document.getElementById("edit-content-input");

var noteTitle = document.getElementById("note-title");
var noteContent = document.getElementById("note-content");

//NOTE SECTION
      
      function addNewNote() {

        title.value = "";
        content.value = "";

       document.getElementById("note-section").style.display = "none";
       document.getElementById("save-note-section").style.display = "block";
       document.getElementById("view-note-section").style.display = "none";
       document.getElementById("edit-note-section").style.display = "none";

       document.getElementById("save-button").style.display = "block";
       document.getElementById("save-button-active").style.display = "none";
    //    title.classList.add("ggg")

    }




//SAVE NOTE SECTION

function exitSave() {

       title.value = "";
       content.value = "";
        
       document.getElementById("note-section").style.display = "block";
       document.getElementById("save-note-section").style.display = "none";
       document.getElementById("view-note-section").style.display = "none";
       document.getElementById("edit-note-section").style.display = "none";

       }


function titleKeyup() {


if (title.value.trim() !="" && content.value.trim() !="") {
    document.getElementById("save-button-active").style.display = "block";
    document.getElementById("save-button").style.display = "none";
}
else {
    document.getElementById("save-button-active").style.display = "none";
    document.getElementById("save-button").style.display = "block";
}

}

function contentKeyup() {

if (title.value.trim() !="" && content.value.trim() !="") {
    document.getElementById("save-button-active").style.display = "block";
    document.getElementById("save-button").style.display = "none";
}
else {
    document.getElementById("save-button-active").style.display = "none";
    document.getElementById("save-button").style.display = "block";
}

} 

function saveNote() {
    if (localStorage.getItem("id") !== null) {
        id = localStorage.getItem("id");
        id++;
    } else {
        id++;
    }

    var titleKey = 'titlekey' + id;
    var contentKey = 'contentkey' + id;
    var timestampKey = 'timestampkey' + id;
    var noteDiv_id = 'note' + id;
    var deleteBtn_id = 'delete' + id;
    var openBtn_id = 'open' + id;

    var timestamp = new Date().toLocaleString(); // Get current timestamp

    localStorage.setItem(titleKey, title.value);
    localStorage.setItem(contentKey, content.value);
    localStorage.setItem(timestampKey, timestamp); // Save timestamp

    //NOTEDIV
    var noteDiv = document.createElement('div');
    noteDiv.textContent = localStorage.getItem(titleKey) + ' (' + localStorage.getItem(timestampKey) + ')';
    noteDiv.setAttribute('class', 'note');
    noteDiv.setAttribute('id', noteDiv_id);
    document.getElementById("notes-container").appendChild(noteDiv);

    //DELETEBTN
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute('class', 'buttons');
    deleteBtn.setAttribute('id', deleteBtn_id);
    deleteBtn.onclick = function () {

        noteDiv.remove();
        localStorage.removeItem(titleKey);
        localStorage.removeItem(contentKey);
        localStorage.removeItem(timestampKey); // Remove timestamp

    }
    noteDiv.appendChild(deleteBtn);

    //OPENBTN
    var openBtn = document.createElement('button');
    openBtn.textContent = "Open";
    openBtn.setAttribute('class', 'buttons');
    openBtn.setAttribute('id', openBtn_id);
    openBtn.onclick = function () {

        id = openBtn_id.charAt(openBtn_id.length - 1);
        console.log(id);

        noteTitle.textContent = localStorage.getItem(titleKey);
        noteContent.textContent = localStorage.getItem(contentKey);

        document.getElementById("note-section").style.display = "none";
        document.getElementById("save-note-section").style.display = "none";
        document.getElementById("view-note-section").style.display = "block";
        document.getElementById("edit-note-section").style.display = "none";
    }
    noteDiv.appendChild(openBtn);

    noteTitle.textContent = localStorage.getItem(titleKey);
    noteContent.textContent = localStorage.getItem(contentKey);

    localStorage.setItem('id', id);

    document.getElementById("note-section").style.display = "none";
    document.getElementById("save-note-section").style.display = "none";
    document.getElementById("view-note-section").style.display = "block";
    document.getElementById("edit-note-section").style.display = "none";
}



//VIEW NOTE SECTION

    
    function exitView() {

        var hideButtons = document.getElementsByClassName("hide");
        for (var i = 0; i < hideButtons.length; i++) {
            hideButtons[i].style.display = "none";
        }
        
        document.getElementById("note-section").style.display = "block";
        document.getElementById("save-note-section").style.display = "none";
        document.getElementById("view-note-section").style.display = "none";
        document.getElementById("edit-note-section").style.display = "none";



    }
    
    function editView() {

        var titleKey = ('titlekey' + id);
        var contentKey = ('contentkey' + id); 

        document.getElementById("note-section").style.display = "none";
        document.getElementById("save-note-section").style.display = "none";
        document.getElementById("view-note-section").style.display = "none";
        document.getElementById("edit-note-section").style.display = "block";

        document.getElementById("edit-save-button-active").style.display = "block";
        document.getElementById("edit-save-button").style.display = "none";

        editTitle.value = localStorage.getItem(titleKey);
        editContent.value = localStorage.getItem(contentKey); 

    } 



//EDIT NOTE SECTION 

function exitEdit() {
    
    document.getElementById("note-section").style.display = "block";
    document.getElementById("save-note-section").style.display = "none";
    document.getElementById("view-note-section").style.display = "none";
    document.getElementById("edit-note-section").style.display = "none";

}

 function editTitleKeyup() {


    if (editTitle.value.trim() !="" && editContent.value.trim() !="") {
        document.getElementById("edit-save-button-active").style.display = "block";
        document.getElementById("edit-save-button").style.display = "none";
    }
    else {
        document.getElementById("edit-save-button-active").style.display = "none";
        document.getElementById("edit-save-button").style.display = "block";
    }
    
    }
    
    function editContentKeyup() {
    
    if (editTitle.value.trim() !="" && editContent.value.trim() !="") {
        document.getElementById("edit-save-button-active").style.display = "block";
        document.getElementById("edit-save-button").style.display = "none";
    }
    else {
        document.getElementById("edit-save-button-active").style.display = "none";
        document.getElementById("edit-save-button").style.display = "block";
    }
    
    }

function saveEdit() {

    var titleKey = ('titlekey' + id);
    var contentKey = ('contentkey' + id);
    var noteDiv_id = ('note' + id);
    var deleteBtn_id = ('delete' + id);
    var openBtn_id = ('edit' + id); 

    localStorage.setItem(titleKey,editTitle.value);
    localStorage.setItem(contentKey,editContent.value); 

    noteTitle.textContent = localStorage.getItem(titleKey);
    noteContent.textContent = localStorage.getItem(contentKey);
    document.getElementById(noteDiv_id).textContent = localStorage.getItem(titleKey);

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute('class','buttons');
    deleteBtn.setAttribute('id',deleteBtn_id);
    deleteBtn.onclick = function() {
    
    document.getElementById(noteDiv_id).remove();
    localStorage.removeItem(titleKey);
    localStorage.removeItem(contentKey);
    
    }
    document.getElementById(noteDiv_id).appendChild(deleteBtn);
    
    var openBtn = document.createElement('button');
    openBtn.textContent = "Open";
    openBtn.setAttribute('class','buttons');
    openBtn.setAttribute('id',openBtn_id);
    openBtn.onclick = function() {

    id = openBtn_id.charAt(openBtn_id.length-1);
    console.log(id);

    noteTitle.textContent = localStorage.getItem(titleKey);
    noteContent.textContent = localStorage.getItem(contentKey);
        
    document.getElementById("note-section").style.display = "none";
    document.getElementById("save-note-section").style.display = "none";
    document.getElementById("view-note-section").style.display = "block";
    document.getElementById("edit-note-section").style.display = "none";
    }
    document.getElementById(noteDiv_id).appendChild(openBtn);

    document.getElementById("note-section").style.display = "none";
    document.getElementById("save-note-section").style.display = "none";
    document.getElementById("view-note-section").style.display = "block";
    document.getElementById("edit-note-section").style.display = "none";

}


//UPON PAGE LOAD

function loadNotes() {

    document.getElementById("note-section").style.display = "block";
    document.getElementById("save-note-section").style.display = "none";
    document.getElementById("view-note-section").style.display = "none";
    document.getElementById("edit-note-section").style.display = "none";

    if (localStorage.getItem("id") !== null) {

            id = localStorage.getItem("id");
            var i = 1;
            var id_array = [];

            while (i <= id) {

             id_array.push(i);
             i++;

            }
            
            console.log(id_array);
            id_array.forEach(loadNotesDiv);

        }

        else {

            id = 0;
        }
    
  } 


  function loadNotesDiv(local_id) {

    var titleKey = ('titlekey' + local_id);
    var contentKey = ('contentkey' + local_id);
    var noteDiv_id = ('note' + local_id);
    var deleteBtn_id = ('delete' + local_id);
    var openBtn_id = ('open' + local_id);

       //NOTEDIV
       var noteDiv = document.createElement('div');
       noteDiv.textContent = localStorage.getItem(titleKey);
       noteDiv.setAttribute('class','note');
       noteDiv.setAttribute('id',noteDiv_id);
       document.getElementById("notes-container").appendChild(noteDiv);

       //DELETEBTN
       var deleteBtn = document.createElement('button');
       deleteBtn.textContent = "Delete";
       deleteBtn.setAttribute('class','buttons');
       deleteBtn.setAttribute('id',deleteBtn_id);
       deleteBtn.onclick = function() {

        noteDiv.remove();
        localStorage.removeItem(titleKey);
        localStorage.removeItem(contentKey);

       }
       noteDiv.appendChild(deleteBtn);

       //OPENBTN
       var openBtn = document.createElement('button');
       openBtn.textContent = "Open";
       openBtn.setAttribute('class','buttons');
       openBtn.setAttribute('id',openBtn_id);
       openBtn.onclick = function() {

        id = openBtn_id.charAt(openBtn_id.length-1);
        console.log(id);

        noteTitle.textContent = localStorage.getItem(titleKey);
        noteContent.textContent = localStorage.getItem(contentKey);
    
        document.getElementById("note-section").style.display = "none";
        document.getElementById("save-note-section").style.display = "none";
        document.getElementById("view-note-section").style.display = "block";
        document.getElementById("edit-note-section").style.display = "none";
       }
       noteDiv.appendChild(openBtn);

  }


  // Function to toggle dark mode when button is clicked
function toggleDarkModeButton() {
    toggleDarkMode();
    saveDarkModePreference();
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Function to save dark mode preference
function saveDarkModePreference() {
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
}

// Function to load dark mode preference
function loadDarkModePreference() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    if (darkModeEnabled) {
        toggleDarkMode();
    }
}

// Call loadDarkModePreference on page load
loadDarkModePreference();




