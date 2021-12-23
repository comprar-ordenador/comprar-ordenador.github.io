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
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08TB36YXR&linkId=65159f6477cfb529b8deb34007eef0ce"></iframe>', 16, '1000 SSD', '8 3.9GHz', 'Sedatech'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08CZW3YRK&linkId=1d457113a7c6da8abf4c454c5a505db4"></iframe>', 32, '1000 SSD', '4 3.5GHz', 'Kingdel'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0968CH9H5&linkId=013d4c91eb9abe2470deabfe503787d7"></iframe>', 16, '250 SSD', '4 3.5GHz', 'CeO-Tech'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0968CH9H5&linkId=0747aa35912f11c89899e586424e21ce"></iframe>', 16, '250 SSD', '4 4GHz', 'CeO-Tech'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07ZVLMLBT&linkId=fc7a52177aaee14cfdcd29969adb0b1b"></iframe>', 8, '120 SSD', '2 3.5GHz', 'Megaport'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08R38SJWV&linkId=86984c4017adfffc2733857adcbd32b0"></iframe>', 16, '512 SSD', '4 3.6GHz', 'MINIS FORUM'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B097C3GRJF&linkId=01c01d5633d55ef5ee8407b5f1704e37"></iframe>', 32, '2000 SSD', '8 2.9GHz', 'CoolBox'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B097C3GGFN&linkId=cbd6cb4e60d6b529f63fb61746452b84"></iframe>', 32, '1000 SSD', '10 2.8GHz', 'CoolBox'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B08WPKGCZL&linkId=202e3eb4872a9e26fa5982a2af722444"></iframe>', 32, '960 SSD', '8 5GHz', 'ROMAGNA COMPUTER'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B097C3GGFN&linkId=6a898723c3be341794f53a7256dddfb7"></iframe>', 32, '2000 SSD', '10 2.8GHz', 'CoolBox'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B091VTT6JL&linkId=6784017281de49e9e768dbb55a97443b"></iframe>', 16, '740 SSD', '1 3.2GHz', 'HP'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B081RPDBJ8&linkId=45df8f030326020e07916e7e4c183b4c"></iframe>', 16, '240 SSD', '1 3.2GHz', 'HP'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B084RPFWY3&linkId=d529516e9c9fe16c19acc3d5c1bd2366"></iframe>', 16, '240 SSD', '1 3.2GHz', 'HP'],
    ['<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=informatic08f-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B087M1RS5B&linkId=4291e2d5d9fc1548e042755c3040b315"></iframe>', 32, '780 SSD', '1 3.2GHz', 'HP']
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
