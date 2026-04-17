const list_El = document.getElementById("list")
const inputbtn_El = document.getElementById("saver")
const input_El = document.getElementById("input")
const delete_El = document.getElementById("delete")
const tab_El = document.getElementById("tab")

let myLead = []


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    render()
}


inputbtn_El.addEventListener("click", function () {
    if (input_El.value === "") return

    myLead.push(input_El.value)
    localStorage.setItem("myLead", JSON.stringify(myLead))
    input_El.value = ""
    render()
})


delete_El.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    render()
})


tab_El.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render()
    })
})

function render() {
    let listitem = ""

    for (let i = 0; i < myLead.length; i++) {
        listitem += `
            <li>
                <a target="_blank" href="${myLead[i]}">
                    ${myLead[i]}
                </a>
            </li>
        `
    }

    list_El.innerHTML = listitem
}
