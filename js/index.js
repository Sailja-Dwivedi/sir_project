const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");

document.addEventListener("click", function(e){

    if(!e.target.classList.contains("item")) return;

    const item = e.target;
    // Move Area1 -> Area2

    if(item.parentElement.id === "area1"){

        if(area2.children.length >= 5){
            alert("Maximum 5 categories allowed");
            return;
        }

        area2.appendChild(item);
    }

    // Move Area2 -> Area1
    else{
        area1.appendChild(item);
    }

    updateCounts();
    printDetails();
});

function updateCounts(){

    count1.textContent =
        area1.querySelectorAll(".item").length;

    count2.textContent =
        area2.querySelectorAll(".item").length;
}

function printDetails(){

    const area1Items =
    [...area1.querySelectorAll(".item")]
    .map(x => x.innerText);

    const area2Items =
    [...area2.querySelectorAll(".item")]
    .map(x => x.innerText);

    console.clear();

    console.log("===== AREA DETAILS =====");

    console.log("Area 1 Categories:");
    console.log(area1Items);
    console.log("Count:", area1Items.length);

    console.log("----------------------");

    console.log("Area 2 Categories:");
    console.log(area2Items);
    console.log("Count:", area2Items.length);

    console.log("======================");
}

updateCounts();