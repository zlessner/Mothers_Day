let card=document.querySelector('.box')

let container=document.querySelector('.box1')

let leftLine=document.querySelector('.line1')

let rightLine=document.querySelector('.line2')

let pic=document.querySelector('.pic')

let body=document.querySelector('body')

card.addEventListener("click", showPic);
function showPic() {
    body.innerHTML="<img src='MothersDay.jpg' />" + "</br>" + "</br>" + "<h2>" + "Dear Mom," + "<h3>" + 
    "Happy Mother's Day! I hope you have a great day of biking and watching the Sixers Game 7! Thanks for always being there for me!"
     + "</h3>" + "<h2>" + "Love, Zack" + "</h2>" + "</h2>";


}

