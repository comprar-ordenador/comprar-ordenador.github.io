if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    let br
    let containers_br = document.getElementsByClassName("brm")
    for (let index = 0; index < containers_br.length; index++) {
        br = document.createElement("br")
        containers_br[index].appendChild(br)
    }
}