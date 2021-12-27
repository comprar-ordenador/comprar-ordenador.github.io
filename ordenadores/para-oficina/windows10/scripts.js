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
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B082P78YN3&linkId=bf2ea4eb0608a6906308d963f6871182"></iframe>', 8, '512 SSD', '2 2.3GHz', 'Lenovo'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09BVHL8MX&linkId=d4011530d5546870090d0e95e396eea5"></iframe>', 8, '256 SSD', '4 2.7GHz', 'CHUWI'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08MZS77TN&linkId=197ab6e6543091503a78c2a0412fff27"></iframe>', 8, '128 SSD', '4 1.5GHz', 'Huashetrade'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B097P2BJZ9&linkId=24063fe7f501ede6a1a40187eeb099ae"></iframe>', 8, '256 SSD', '4 2.6GHz', 'TECLAST'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09FJHDH27&linkId=c76af76dbe4f6ef2ca7a0566f2ed1c0a"></iframe>', 8, '256 SSD', '4 2.6GHz', 'TECLAST'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B09JSGPPY3&linkId=082cfc81523781be19e2c3414d85e5f0"></iframe>', 8, '256 SSD', '4 2.3GHz', 'TECLAST'],
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
