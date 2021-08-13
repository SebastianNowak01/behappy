const QuotesArray = ["Będzie lepiej!",
 "Nie poddawaj się!", "Zrobisz to!",
"Kozak jesteś, nie zmieniaj się!",
 "Mama jest z ciebie dumna!", "Ale ciacho!", 
"Much wow, very nice :3", "Jesteś legendą!"]

const myFunction = () => {
    document.getElementById("text").innerHTML = QuotesArray[Math.floor(Math.random() * QuotesArray.length)];
};