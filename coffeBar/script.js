function promo(){
    promocode = document.getElementById("input").value
    console.log(promocode)
    if (promocode == "chaix"){
        alert("Промокод использовон успешно!")
    }
    else{
        alert("простите птакой промокод не существует")
    }
}