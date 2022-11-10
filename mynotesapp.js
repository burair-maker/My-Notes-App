console.log("mynotes")
showmynote()



var addnote = document.getElementById("newnote")

addnote.addEventListener("click", addanote)
function addanote(){
    var addtext = document.getElementById("addtext")
    var cardnote = localStorage.getItem("cardnote")
    if (!cardnote) {
        cardnote = []
    } else {
        cardnote = JSON.parse(cardnote)
    }

    cardnote.push(addtext.value)
    localStorage.setItem("cardnote", JSON.stringify(cardnote))
    addtext.value = "";
    showmynote()

    var addtitle = document.getElementById("addtitle")
    var cardtitle = localStorage.getItem("cardtitle")
    if (!cardtitle) {
        cardtitle = []
    } else {
        cardtitle = JSON.parse(cardtitle)
    }

    cardtitle.push(addtitle.value)
    localStorage.setItem("cardtitle", JSON.stringify(cardtitle))
    addtitle.value = "";
    showmynote()
} 


function showmynote() {
    var cardnote = localStorage.getItem("cardnote");
    if (!cardnote) {
        cardnote = []
    } else {
        cardnote = JSON.parse(cardnote)
    }

    var cardtitle = localStorage.getItem("cardtitle");
    if (!cardtitle) {
        cardtitle = []
    } else {
        cardtitle = JSON.parse(cardtitle)
    }
    var html = "";


cardnote.forEach(function (cardnote, index) {
    console.log(cardtitle, cardtitle[index])
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title" id="title">${cardtitle[index]} </h5>
                            <p class="card-text">${cardnote}</p>
                            <button id="${cardtitle[index]}" onClick=deleteNotes(this.id) class="btn btn-warning btn-rounded">Delete Note</button>                                           
                            </div>
                    </div>`;

    });
    if (cardnote.length != 0) {
        displaycard1.innerHTML = html;
    }
    else {
        displaycard1.innerHTML = `Nothing to show! use add notes`;
    }


}

function deleteNotes(index) {
    console.log(index)
    let cardnote = localStorage.getItem("cardnote");
    if (!cardnote) {
        cardnote = []
    
    } else {

        cardnote = JSON.parse(cardnote)
    }
    cardnote.splice(index, 1)
    localStorage.setItem("cardnote", JSON.stringify(cardnote))



    console.log(index)
    let  cardtitle = localStorage.getItem("cardtitle");
    if (!cardtitle) {
        cardtitle = []
    } else {
        cardtitle = JSON.parse(cardtitle)
    }
    cardtitle.splice(index, 1)
    localStorage.setItem("cardtitle", JSON.stringify(cardtitle))
    showmynote();
}


let clearall = document.getElementById("clearall")

clearall.addEventListener("click",clearAllNote)
function clearAllNote(){
localStorage.getItem("cardnote")
localStorage.getItem("cardtitle")
 window.localstorage.clear()
}








// function showmytitle() {

//     let html = "";
//     cardtitle.forEach(function (dfdf, fgfg) {
//         html += `
//         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                         <div class="card-body">
//                             <h5 class="card-title">${fgfg + 1} </h5>
//                             <p class="card-text">${dfdf}</p>
//                             <button id="${fgfg}" onClick=deleteNotes(this.id) class="btn btn-primary">Delete Note</button>                                           
//                             </div>
//                     </div>`;
//     });
//     if (cardtitle.length != 0) {
//         displaycard1.innerHTML = html;
//     }
//     else {
//         displaycard1.innerHTML = `Nothing to show! use add notes`;
//     }
// }






// cardtitle,cardnote.forEach(function (element, cardtitle) {
//     html += `
//     <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
//                     <div class="card-body">
//                         <h5 class="card-title">${cardtitle} </h5>
//                         <p class="card-text">${element}</p>
//                         <button id="${cardtitle}" onClick=deleteNotes(this.id) class="btn btn-primary">Delete Note</button>                                           
//                         </div>
//                 </div>`;
// });
// let displaycard1 = document.getElementById("displaycard1");
// if (cardtitle,cardnote.length != 0) {
//     displaycard1.innerHTML = html;
// }
// else {
//     displaycard1.innerHTML = `Nothing to show! use add notes`;
// }
