//Click on a box and have it rotate (45+ degrees each click)

//On the third click of each box change the color of the other two boxes

//On a click of a box, turn that box into a circle and have it move to the right


let degrees1 = 0;
let count1 = 0;
let degrees2 = 0;
let count2 = 0;
let degrees3 = 0;
let count3 = 0;
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

box1.addEventListener("click", ()=> {

  //Part 1: rotate box 45 degrees
  degrees1 += 45;
  box1.style.transform = "rotate(" + degrees1 + "deg)";
  // console.log("rotate(" , degrees1 , "deg)")

  //Part 2: change color of other two boxes after 3 clicks(comment line 26-30)
  count1 += 1;
  // console.log("box1 has been clicked " + count1 + " times");
  if(count1===3){
    box2.style.background = "chartreuse";
    box3.style.background = "chartreuse";
  }

  //Part 3: change box into a circle and move to the right (comment line 34-40)
  if(count1===1){
    box1.style.display = "block";
    box2.style.display = "none";
    box3.style.display = "none";
    box1.style.float = "right";
    box1.style.borderRadius = "100%";
    box1.style.width = "15%";
    box1.style.height = "150px";
  }
})

box2.addEventListener("click", () => {

  //Part 1: rotate box 45 degrees
  // degrees2 += 45;
  // box2.style.transform = "rotate(" + degrees2 + "deg)";

  //Part 2: change color of other two boxes after 3 clicks(comment line 51-55)
  // count2 += 1;
  // if(count2===3){
  //   box1.style.background = "red";
  //   box3.style.background = "red";
  // }

  //Part 3: change box into a circle and move to the right (comment line )
  if(count1===1){
    box2.style.display = "block";
    box1.style.display = "none";
    box3.style.display = "none";
    box2.style.float = "right";
    box2.style.borderRadius = "100%";
    box2.style.width = "15%";
    box2.style.height = "150px";
  }
})

box3.addEventListener("click", ()=> {

  //Part 1: rotate box 45 degrees
  // degrees3 += 45;
  // box3.style.transform = "rotate(" + degrees3 + "deg)";

  //Part 2: change color of other two boxes after 3 clicks(comment line )
  // count3 += 1;
  // if(count3===3){
  //   box1.style.background = "yellow";
  //   box2.style.background = "yellow";
  // }

  //Part 3: change box into a circle and move to the right (comment line )
  if(count1===1){
    box3.style.display = "block";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.float = "right";
    box3.style.borderRadius = "100%";
    box3.style.width = "20%";
    box3.style.height = "150px";
  }

})
