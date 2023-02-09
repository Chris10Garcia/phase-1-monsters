let pageNum = 1;
const serverURL = `http://localhost:3000/monsters/`
const getURL = `${serverURL}?_limit=50&_page=`



function createForm(){
    const divCreate = document.getElementById('create-monster')
    const form = document.createElement('form')

    const formStructure = {
        "name" : "name...",
        "age" : "age...",
        "description" : "description..."
    }

    for (key in formStructure){
        const input = document.createElement('input')
        input.id = key
        input.placeholder = formStructure[key]
        form.append(input)
    }
    
    const bttn = document.createElement('button')
    bttn.innerText = "Create"
    
    form.append(bttn)
    form.addEventListener('submit', e => {
        e.preventDefault()
        formSubmit(e)
    })

    divCreate.append(form)
}





function formSubmit(e){
    const monData = {
        "name" : e.target.name.value,
        "age" : e.target.age.value,
        "description" : e.target.description.value
    }

    fetch(serverURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(monData)
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
    
}


function handleArrows(e){

    if (pageNum > 1 && e.target.id === "back"){
        pageNum --
        getData()

    } else if (pageNum === 1 && e.target.id === "back"){
        alert("Aint no monsters here")

    } else {
        pageNum ++
        getData()

    }
}



function buildCard(array){
    const divMonContainer = document.getElementById('monster-container')
    divMonContainer.innerHTML = ''

    array.forEach(obj => {
        const h2 = document.createElement('h2')
        h2.innerText = obj.name 

        const h4 = document.createElement('h4')
        h4.innerText = `Age: ${obj.age}`

        const p = document.createElement('p')
        p.innerText = `bio: ${obj.description}`

        const div = document.createElement('div')
        div.append(h2, h4, p)

        divMonContainer.append(div)
    })
}


function getData(){
    fetch(`${getURL}${pageNum}`)
        .then(resp => resp.json())
        .then(data => buildCard(data))
}



document.addEventListener('DOMContentLoaded', ()=>{
    getData()
    createForm()

    document.getElementById('back').addEventListener('click', handleArrows)
    document.getElementById('forward').addEventListener('click', handleArrows)
})



/* COMPLETED

// event listener for form submit
    // capture data
    // build object
    // post it to database

/* createForm
    capture create-monster

    create form
    structure { 
        "name": "name...",
        "age" : "age..."
        "description" : "description..."
    }

    for (key in structure){
        create input
        input.id = key
        input.playholder = structure[key]
        
        form.append(input)
    }

    create button
    form.append(button)

    create event listener for button

    create-monster.append(form)
*/

// make htmlcard
// capture monster-container
    //clear monster-container innerHTML
// array.foreach obj 
    /* structure
        h2 = obj.name
        h4 = `Age: ${obj.age}`
        p = obj.description

        create div
        append(h2, h4, p)
        
        append monster-container
    */

// get data
// fetch(JSONURL)
// pass data to card maker function

// when content loaded, 
    // run get data
    // run create form

// create 2 eventlisteners for left and right arrow, but point to same function

/* handleArrows(e)

    if pageNum > 1 && e.target.id === "back"
        pageNum --
        getData
        
    else if pageNum === 1 && e.target.id === "back"
        alert("Aint no monsters here")
    else 
        pageNum ++
        getData
*/