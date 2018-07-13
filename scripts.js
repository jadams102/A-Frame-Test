$(document).ready(function() {
  let images = ["#coast", "#garden", "#falcon", "#ocean", "#paris", "#night"];
  let currentImgIndex = 0;

  function NextImage() {
      if (currentImgIndex < images.length - 1) {
        document.getElementById("360image").setAttribute("src", images[currentImgIndex + 1])
        currentImgIndex ++; 
      }
  }

  function PreviousImage() {
    if (currentImgIndex > 0) {
      document.getElementById("360image").setAttribute("src", images[currentImgIndex - 1])
      currentImgIndex --; 
    }
}

  document.getElementById("next").addEventListener("click", function(evt) {
    NextImage();
  });

  document.getElementById("previous").addEventListener("click", function(evt) {
    PreviousImage();
  });
});
