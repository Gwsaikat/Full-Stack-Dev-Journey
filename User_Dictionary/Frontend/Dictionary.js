
const Search_El = document.getElementById("search-btn")
const Input_El = document.getElementById("input")
const User_Info_El = document.getElementById("User-info")


Search_El.addEventListener("click", async function(){
    const id = Input_El.value 
    const response = await fetch(`http://localhost:2000/user/${id}`)

    if (!response.ok){ 
    const error = await response.json()
    User_Info_El.innerText = error.message
    return
}

    const user = await response.json()

    User_Info_El.innerText = user.name + " - " + user.role;
})
