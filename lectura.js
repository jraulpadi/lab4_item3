const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese cadena de símbolos: ', (answer) => {
  // TODO: Log the answer in a database
  
  var simbolos = answer.trim();
  var largo = answer.length;
  
  var cola = [];

  var error = false;
  var poserror = 0;

  var poscola = 0;
  for(x=0; x<largo; x++){
      if (tipoabre(simbolos.substr(x,1))) {
          poscola++;
          cola[poscola] = simbolos.substr(x,1);          
      }
      else{
          if(paridad(cola[poscola], simbolos.substr(x,1))){
              poscola--;              
              if(poscola < 0){
                  error = true;
                  poserror = x;
                  break;
              }
          }
          else{
              error = true;
              poserror = x;
              break;
          }
      }
  }
  if(poscola != 0){
      error = true;
      poserror = largo;      
  }

  if(error){
    console.log(`Error en el texto en la posicion ${poserror}`);
  }
  else{
      console.log('Texto correcto.');      
  };
  rl.close();
});

function tipoabre(sim){
    if(sim=='{' || sim=='[' || sim =='('){
        return true;
    }
    else{
        return false;
    };
};

function paridad(sim1, sim2){
    if((sim1=='(' && sim2==')')||(sim1=='{' && sim2=='}')||(sim1=='[' && sim2==']')){
        return true;
    }
    else{
        return false;
    }
}