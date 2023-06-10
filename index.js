let array = [
    {
      tag: 1,
      image: `https://res.cloudinary.com/dthsiibas/image/upload/v1671548161/alithmb_wloem9.jpg`,
    },
    {
      tag: 2,
      image: `https://res.cloudinary.com/dthsiibas/image/upload/v1671533405/Ali-sitting-and-smiling_gfrk7y.png`,
    },
    {
      tag: 3,
      image: `https://res.cloudinary.com/dthsiibas/image/upload/v1671291240/Ali-Abdaal-AirPods_lmnguo.jpg`,
    },
    {
        tag: 1,
        image: `https://res.cloudinary.com/dthsiibas/image/upload/v1671548161/alithmb_wloem9.jpg`,
    },
    {
        tag: 2,
        image: `https://res.cloudinary.com/dthsiibas/image/upload/v1671533405/Ali-sitting-and-smiling_gfrk7y.png`,
    },
    {
        tag: 3,
        image: `https://res.cloudinary.com/dthsiibas/image/upload/v1671291240/Ali-Abdaal-AirPods_lmnguo.jpg`,
    },
]
const passOrfail = document.getElementById(`passOrfail`)
const passed = document.getElementById(`passed`)
const total = document.getElementById(`total`)

let numberofpassed =1
total.innerHTML = array.length/2

  
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// shuffleArray(array)
const container = document.getElementById(`container`)
window.onload = shuffleArray(array)

function setImages(){
  for (let i=0;i<array.length;i++){
    const newDiv = document.createElement("div")
    newDiv.classList.add("img")
    const imageDiv = document.createElement("img")
    imageDiv.src = array[i].image
    imageDiv.setAttribute("data-tag", array[i].tag);
    newDiv.appendChild(imageDiv)
    container.appendChild(newDiv)
    cleararray =[]
    selected = []
    function blurOut (){
      newDiv.classList.add("has-overlay");
    }
    setTimeout(blurOut, 2000);
    newDiv.addEventListener('click', function onClick(e) {
      if (newDiv.classList.contains("matched")) {
        return;
      }
      newDiv.classList.remove("has-overlay");
      
      const tag = imageDiv.getAttribute("data-tag");
      selected.push({ tag, element: imageDiv });
      console.log(selected);
      
      if (selected.length === 2) {
        if (selected[0].tag === selected[1].tag) {


          passed.innerHTML = numberofpassed++
          function aMatch(){
            passOrfail.innerHTML = `A Match!!`
          }
          aMatch()
          function clearMatch (){
            passOrfail.innerHTML = ``
          }
          setInterval(clearMatch,3000)
          console.log("Match!");
          selected.forEach((item) => {
            
            item.element.removeEventListener("click", onClick);
            item.element.parentElement.classList.add("matched");
          });
          selected = []
        } else {
          console.log("Try again!");
          selected.forEach((item) => {
            setTimeout(() => {
              item.element.parentElement.classList.add("has-overlay");
            }, 1000);
          });
          selected = []
        }
        selected = [];
      }
    });
    


   };

}
setImages()
