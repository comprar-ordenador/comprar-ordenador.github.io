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
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09KVCWSJF&linkId=23cfce3a5d920bee94a5f14cdf00ed8d"></iframe>', 16, '1024 SSD', '6 3.7GHz', 12, 'PCSpecialist'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08ZDQBG46&linkId=c2a7bc81b480f428ba3ca81806fe7608"></iframe>', 16, '1024 SSD', '8 4.4GHz', 12, 'PCSpecialist'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07ZVKMHB2&linkId=36ab7cf0bc3795db1c01c5d446cb255b"></iframe>', 8, '240 SSD', '2 3.5GHz', 16, 'Megaport'],
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
        case 'gpu':
            products.sort(function(a,b){return b[4]-a[4];});
            break;
        case 'hard-disk-size':
            products.sort(function(a,b){return parseInt(b[2].replace(" SSD", "")) - parseInt(a[2].replace(" SSD", ""));});
            break;
        default:  // type
            products.sort(function(a,b){return a[5].localeCompare(b[4]);});
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
