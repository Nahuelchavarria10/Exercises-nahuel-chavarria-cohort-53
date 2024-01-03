                          //DOM Exercisies//
//1//
const titulo = document.getElementById( "titulo" )
console.log(titulo)


 //2//
const tituloPrincipal = "Frutas"
titulo.textContent = tituloPrincipal
titulo.className = "text-5xl my-3 mb-5"


//3//
const $header = document.querySelectorAll(".messi")
const color = "bg-orange-400"
$header[0].className = color
$header[1].className = color


//4//


const $footerP = document.querySelector("footer p")
$footerP.textContent += " Nahuel Chavarria Cohort N°53"


//5//
const $main = document.querySelector("main")
$main.innerHTML += "<div id='contenedor'></div>"
const $div = document.getElementById("contenedor")


//6//


function createCard(nombre, foto, descripcion) {
    return `
    <article>
        <h3>${nombre}</h3>
        <img src="${foto}" alt="">
        <p>${descripcion}</p>
    </article>`
}


//7//


function bucleCard(array) {
    let acumuladorFrutas = ""
    for (const i of array) {
        acumuladorFrutas += createCard(i.nombre, i.foto, i.descripcion)
    }
    return acumuladorFrutas
}


//8//
$div.innerHTML += bucleCard(frutas)


//nose si la consigna especificaba darle los estilos de las cartas en la funcion (createCard) por las dudas la hice aparte con bucles//


$div.classList.add("flex", "flex-wrap", "justify-center", "gap-9")

const $article = document.querySelectorAll("article")
for (const elemento of $article) {
    elemento.classList.add("w-60", "min-h-70", "max-h-80", "text-center", "border-2", "border-gray-400","rounded-xl")
}

const $h3 = document.querySelectorAll("article h3")
for (const elemento of $h3) {
    elemento.classList.add("text-lg", "font-medium");
}


const $img = document.querySelectorAll("img")
for (const elemento of $img) {
    elemento.classList.add("object-cover", "w-32", "h-32", "m-auto")
}


const $p = document.querySelectorAll("p")
for (const elemento of $p) {
    elemento.classList.add("py-10")
}


//9//


$main.innerHTML += `<div id="lista"></div>`
const $divLista = document.getElementById("lista")
lista.innerHTML = `<h2 class = "text-3xl my-4">frutas dulces</h2>`


//10//


function createList(array) {
    const $ul = document.createElement("ul")
    for (const elemento in array) {
        if (array[elemento].esDulce == true) {
            const $li = document.createElement("li")
            $li.textContent = array[elemento].nombre
            $li.className = "list-disc"
            $ul.className = ""
            $ul.appendChild($li)
        }
    }
    return $ul
}


//11//
$divLista.appendChild(createList(frutas))



//////////////////////////////////////////////////////////



