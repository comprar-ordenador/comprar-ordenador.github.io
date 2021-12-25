// DECLARING VARIABLES
let permission_to_change_class = false
let n_per_fila
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    let br
    let containers_br = document.getElementsByClassName("brm")
    n_per_fila = Math.floor((4*screen.availWidth/5)/(130))
    for (let index = 0; index < containers_br.length; index++) {
        br = document.createElement("br")
        containers_br[index].appendChild(br)
    }
    permission_to_change_class = true
    let clusters = document.getElementsByClassName("ccm")
    for (let index = 0; index < clusters.length; index++) {
        clusters[index].style.display = "block"
        clusters[index].style.width = "90%"
    }
    let md = document.getElementsByClassName("md")
    for (let index = 0; index < md.length; index++) {
        md[index].remove()
    }
} else {
    n_per_fila = Math.floor((4*screen.availWidth/5)/(160))
}
let products = [
    // AQUI ///////////////////////////////////////////
]
let counter = 0
let class_html = "column-3"
let variable = ''
let orderBy
const init_html = '<div class="row">'

// DECLARING FUNCTIONS

function initialize() {
    counter = 0
    variable = init_html
    for (i = 0; i < n_per_fila; i++) {
        variable += products[counter][0].replace('style="width:120px;height:240px;"', 'style="width:120px;height:240px;" class="'+class_html+'"')
        counter++
    }
    $('#products').append(variable+"</div>")
    $('#products').append('<br>')
    variable = init_html
    for (i = 0; i < n_per_fila; i++) {
        variable += products[counter][0].replace('style="width:120px;height:240px;"', 'style="width:120px;height:240px;" class="'+class_html+'"')
        counter++
    }
    $('#products').append(variable+"</div>")
    $('#products').append('<br>')
    if (permission_to_change_class){
        let h1_l = document.getElementsByClassName("column-3")
        for (let index = 0; index < h1_l.length; index++) {
            h1_l[index].setAttribute("class", "column-2")
        }
    }
}

function appendData() {
    variable = init_html
    for (i = 0; i < n_per_fila; i++) {
        if(counter < products.length){
            variable += products[counter][0].replace('style="width:120px;height:240px;"', 'style="width:120px;height:240px;" class="'+class_html+'"')
            counter++
        }
    }
    $('#products').append(variable+"</div>")
    $('#products').append('<br>')
    if (permission_to_change_class){
        let h1_l = document.getElementsByClassName("column-3")
        for (let index = 0; index < h1_l.length; index++) {
            h1_l[index].setAttribute("class", "column-2")
        }
    }
}

// GET INIT ON THE PAGE

initialize()

// LISTENERS

document.getElementById("search").addEventListener('click', ()=>{
    orderBy = document.getElementById('sortby').value
    switch (orderBy) {
        case 'ram':
            products.sort(function(a,b){return b[1]-a[1];});
            break;
        case 'cpu':
            products.sort(function(a,b){return b[3].replace("GHz", "").split(" ")[0] * b[3].replace("GHz", "").split(" ")[1] - a[3].replace("GHz", "").split(" ")[0] * a[3].replace("GHz", "").split(" ")[1];});
            break;
        case 'hard-disk-size':
            products.sort(function(a,b){return parseInt(b[2].replace(" SSD", "")) - parseInt(a[2].replace(" SSD", ""));});
            break;
        default:  // type
            products.sort(function(a,b){return a[4].localeCompare(b[4]);});
            break;
    }
    let elements = document.getElementsByClassName("row")
    for (let index = 0; index < elements.length; index++) {
        elements[index].remove()
    }
    initialize()
})

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height() && counter < products.length) {
        appendData()
    }
});
