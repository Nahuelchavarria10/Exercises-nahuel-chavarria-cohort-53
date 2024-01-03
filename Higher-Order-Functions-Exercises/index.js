//Higher order functions Exercises//


//1//
/* const printMessage = message => console.log( message ) */



//2//
/* const createMultplication = (number1, number2) => {
    let result = number1 * number2
    return result
}




//3//
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array.map(createMultplication)); */




//4//
/* const majorMinor = function(array) {
    const ten = beers.sort((a, b) => b.abv - a.abv).filter((beer,indice)=> indice < 10 )
    return ten
}
console.log(majorMinor(beers)); */




//5//
/* const minorMajor = function(array) {
    const ten = beers.sort((a, b) => a.abv - b.abv).filter((beer ,indice) => indice < 10)
    return ten
}

console.log(minorMajor(beers));  */




//6//
/* const objetoCompleto = function (array, name) {
    const cervezaFiltrada = array.find( beer => name === beer.name)
    return cervezaFiltrada
}
console.log(objetoCompleto(beers,"Buzz")); */




//7//
/* const findIbu = function(array,ibuEntered) {
    const ibuFind = array.find(beer => ibuEntered === beer.ibu)
    if (ibuFind === undefined) {
        return "Name of the beer entered"
    }
    else{
        return ibuFind
    }
}

console.log(findIbu(beers,30)); */

//8//

/* const objetoCerveza = function(nombre) {
    const posicionFiltrada = beers.find( beer => nombre === beer.name )
    if (posicionFiltrada) {
        return beers.indexOf(posicionFiltrada)
    } else {
        return "Name of the beer entered"
    }
}
console.log(objetoCerveza("Storm")); */




//9//
/* const abvCondition = function(array,valueAlcohol) {
    const noSuperanValor = array.filter(beer => valueAlcohol >= beer.abv).map(beer => ({name: beer.name, abv: beer.abv, ibu: beer.ibu}))
    return noSuperanValor
}

console.log(abvCondition(beers,8)); */


//10//


/* const cervezatres = function(array,propiedad,boleano) {
    if (boleano === true) {
        const tenbeerA = array.sort((a, b) => a[propiedad] - b[propiedad]).filter((beer,indice)=> indice < 10)
        return tenbeerA
    }else if (boleano === false) {
        const tenbeerB = array.sort((a, b) => b[propiedad] - a[propiedad]).filter((beer,indice)=> indice < 10)
        return tenbeerB
    }
    
}
console.log(cervezatres(beers,"abv",true));
console.log(cervezatres(beers,"abv",false)); */

//11//


const $tbody = document.getElementById("bodyBeers")

function table(array, Id) {
    let structure = ""
    array.forEach(beer => structure += `
    <tr>
    <td>${beer.name}</td>
    <td>${beer.abv}</td>
    <td>${beer.ibu}</td>
    </tr>`)

    Id.innerHTML = structure

}
table(beers, $tbody);
