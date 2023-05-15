var myNotes = [];
document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction(event) {
    //alert("submitted")
    event.preventDefault(); //prevents refresh
    alert(document.getElementById("title").value);
    console.log(document.getElementById("title").value);

    newNote(document.getElementById("title").value);
}

// if notes is empty, return error

function newNote(title)
{
    const note = { title}
    myNotes.push(note);
    printNote();
}

function printNote(){
    const ul = document.querySelector("ul");

    document.querySelectorAll("li").forEach((child) => child.remove());

    myNotes.forEach((note) =>{
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        const div = document.createElement("div");

        h2.innerText = note.title;
        div.appendChild(h2);

        li.appendChild(div);
        ul.appendChild(li);
    });
}