/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const tipiPrimitivi = [
    {
        type: "string",
        description: "Rappresenta una sequenza di caratteri compresi tra singoli/doppi apici o backtick di lunghezza arbitraria (è possibile anche dichiarare una stringa vuota: nessun carattrere tra apici)",
    },
    {
        type: "number",
        description: "Rappresenta un valore numerico. Esiste anche un valore speciale: NaN (Not a number) che può essere restituito, ad esempio, in oprazioni matematiche che coinvolgono numeri e stringe.",
    },
    {
        type: "null",
        description: "Rappresenta un varole vuoto, ad esempio una variabile che al suo interno non contiene alcun valore.",
    },
    {
        type: "undefined",
        description: "Rappresenta un valore indefinito. Una variabile alla quale non è stato ancora assegnato un valore sarà undefined.",
    },
    {
        type: "bigInt",
        description: "Rappresenta un valore numerico troppo grande per poter essere gestito con il type primitivo number.",
    },
    {
        type: "symbol",
        description: "N.B.",
    },
]

const rispostaEsercizio1 = `Esistono 6 datatype in Javascript, di seguito l'elenco:`;

console.table(tipiPrimitivi);

document.write(`<h1>${rispostaEsercizio1}</h1>`);
document.write(`<p><strong>${tipiPrimitivi[0].type}</strong>: ${tipiPrimitivi[0].description}</p>`);
document.write(`<p><strong>${tipiPrimitivi[1].type}</strong>: ${tipiPrimitivi[1].description}</p>`);
document.write(`<p><strong>${tipiPrimitivi[2].type}</strong>: ${tipiPrimitivi[2].description}</p>`);
document.write(`<p><strong>${tipiPrimitivi[3].type}</strong>: ${tipiPrimitivi[3].description}</p>`);
document.write(`<p><strong>${tipiPrimitivi[4].type}</strong>: ${tipiPrimitivi[4].description}</p>`);
document.write(`<p><strong>${tipiPrimitivi[5].type}</strong>: ${tipiPrimitivi[5].description}</p>`);

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const rispostaEsercizio2 = `Un oggetto Javascript è una raccolta di coppie chiave - valore utili a definire le proprietà stesse di un oggetto. Gli oggetti rientrano, insieme ad array e funzioni, nella classificazione di Structural Type in Javascript.`;

console.log(rispostaEsercizio2);
document.write(`<h1>${rispostaEsercizio2}</h1>`);


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 12;
let n2 = 20;
let sum = n1 + n2;

console.log(`La somma di ${n1} e ${n2} è:`, sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

console.log(x);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Luca";

console.log(name);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let subtraction = x - 4;

console.log(subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

console.log(name1 === name2); // false
console.log(name1.toLowerCase() === name2.toLowerCase()); // true