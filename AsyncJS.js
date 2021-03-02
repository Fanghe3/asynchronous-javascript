console.log('hello');

/* function myPromise(input)
{  return new Promise( function (resolve, reject) {

       const fatchedData = fetch() 
        if( typeof  input !== "number" )
        {   
           // const reason = new Error("error");   //does not work here
            reject("reason: this is not a number")         }
         
           // let result = input
            resolve(input) 
         
       }
   )
}
 */
/* function PromiseFunction (input)
{
    return new Promise((resolve,reject) => {
        setTimeout(() =>
        {   if( typeof  input !== "number" )
           // if (typeof a !== "number" || typeof b !== "number")
            {
                reject("Not a number");
            }
           // let result = a-b;
            resolve(input);
        },1000);
    })
} */



//fetch('http://icanhazdadjoke.com')
// .then(response => response.json())
// .then(data => console.log(data));


/* // fetch('https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes' , {
fetch('https://icanhazdadjoke.com', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
}
)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) */

const data = async () => {

    let result = await fetch('https://cat-fact.herokuapp.com/facts', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    }
    )
    
    let names = await result.json();
    
    // Create array of object keys, ["311", "310", ...]
    const keys = Object.keys(names)

    // Generate random index based on number of keys
    const randIndex = Math.floor(Math.random() * keys.length)

    // Select a key from the array of keys using the random index
    const randKey = keys[randIndex]

    // Use the key to get the corresponding name from the "names" object
    const name = names[randKey]

    console.log( name)
    return name;
}
 // data();

  let button = document.querySelector("#button");
  button.addEventListener("click", catData ) ;

 async function catData()
 {
    let data1 = await data();     //'async' key word wrapped "string"- name into promise
    console.log(" Data1: ", data1);
   // console.log("Cat Data: ", data1["text"]);
    let myCat = document.querySelector("#myCat");
    myCat.innerHTML =  data1["text"] ;
    
 }

 
