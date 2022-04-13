function sumRubl(qiymat, miqtor) {
   
        if (qiymat === 'sum-rubl'){
            return miqtor / 147;
        } else if (qiymat === 'usb-sum'){
            return miqtor * 11_329;
        } else {
            console.eror('sum-rubl yoki usd-sum kirit');
        } 
}

let kiritiladiganQiymat = prompt('sum-rubl yoki usd-sum kiriting')
let kiritiladiganMiqdor = Number(prompt('Soni kiriting'))
 
let natija = sumRubl(kiritiladiganQiymat,kiritiladiganMiqdor)
console.log('Natija = ',natija)


// function Random() {
//     return Math.floor(Math.random()*Math.pow(10,6))
// }

// let Natija = Random();
// console.log(Natija);