let images = ["#coast","#garden","#falcon", "#ocean", "#paris", "#night"]
let currentImgIndex = 1;

function NextImage(){
    $("#360Image").attr("src",images[currentImgIndex + 1])
}

$("#next").