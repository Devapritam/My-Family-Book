var text = ["My Family Book", "Mr. Dhrubajyoti Sarma", "Mrs. Rina Sarma", "Miss. Gyanavi Sharma"];
var images = ["The_Family_Book.jpg", "father.jpg", "mother.jpg", "sister.png"];

var i = 0;
var j = 0;
function nextslide() {
    document.getElementById("nextPhoto").src = images[i];
    document.getElementById("next_text").innerHTML = text[j];
    i++;
    j++;
    if (i > 3){
        i = 0;
    }
    if (j > 3){
        j = 0;
    }
}