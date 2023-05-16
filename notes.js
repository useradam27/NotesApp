var myNotes = [];
document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction(event) {
    //alert("submitted")
    event.preventDefault(); //prevents refresh
    alert(document.getElementById("title").value);
    console.log(document.getElementById("title").value);
    console.log(document.getElementById("note").value);

    addNote(document.getElementById("title").value, document.getElementById("note").value);
}

// if notes is empty, return error

function addNote(title, contents)
{
    const newNote = { title, contents}
    myNotes.push(newNote);
    printNote();
}

function printNote(){
    const ul = document.querySelector("ul");

    document.querySelectorAll("li").forEach((child) => child.remove());

    myNotes.forEach((note) =>{
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const div = document.createElement("div");
        const p = document.createElement("p");

        h2.innerText = note.title;
        p.innerHTML = note.contents;
        div.appendChild(h2);
        div.appendChild(p);

        li.appendChild(div);
        ul.appendChild(li);
    });
}