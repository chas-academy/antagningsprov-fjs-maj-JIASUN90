

function uppg8(){

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument
    const person = [
        {name:"Nils", age:30},
        {name:"Loona", age:24},
        {name:"Betty", age:25},
        {name:"Harrison", age:36},
        {name:"Järma", age:18}
    ];

    function skrivUtOver30(arr){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].age > 30){
                console.log(arr[i].name);
            }
        }
    }
    
    skrivUtOver30(person);
}

module.exports = { uppg8 };
