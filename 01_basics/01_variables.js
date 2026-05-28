const accountId = 144553
let accountEmail = "Sindhu@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not prefered 
let accountState; // value will be undefined , if we dont declare the variable
accountPassword = "234566gf"
accountCity = "hyd";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* variables can be declared in 2 types : 1.var 2.let . Most of the times,we go with "let" .We dont use var 
 because of the issue in block scope and functional scope */