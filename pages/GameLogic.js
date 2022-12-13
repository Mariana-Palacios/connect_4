export default function winDetector(matix){
    let prueba = []
    let pruebaDos = []
    let finalArray = []
    let finalArrayDos = []
    let con = [0,0]

    for(let i = 0; i < 7; i++){
      for (let j = 0; j < 6; j++) {
        if(j+i<=5){
            if(matix[6-j]['array'][j+i]!=0){
                con[0]= con[0]+1
                prueba.push({column:6-j,row:j+i,value:matix[6-j]['array'][j+i]})
                if(prueba.length>1&&prueba[prueba.length-2]['value']!=matix[6-j]['array'][j+i]){
                    if(con[0]<4){
                        prueba[prueba.length-2] = prueba[prueba.length-1]
                        prueba.pop()
                        con[0]=1
                    }
                    else if(con){
                        con[0]= con[0]-1
                        prueba.pop()
                    }
                }
            }
        }
        if(5-j>=0 && 5-i-j>-1){
            if(matix[0+j]['array'][5-i-j]!=0){
                con[1]= con[1]+1
                pruebaDos.push({column:0+j,row:5-i-j,value:matix[0+j]['array'][5-i-j]})
                if(pruebaDos.length>1&&pruebaDos[pruebaDos.length-2]['value']!=matix[0+j]['array'][5-i-j]){
                  if(con[1]<4){
                      pruebaDos[pruebaDos.length-2] = pruebaDos[pruebaDos.length-1]
                      pruebaDos.pop()
                      con[1]=1
                  }
                  else if(con){
                      con[1]= con[1]-1
                      pruebaDos.pop()
                  }
              }
            }
        }
      }
      if(prueba.length>=4){
        con[0]=0
        finalArray.push(prueba)
      }
      if(pruebaDos.length>=4){
        con[1]=0
        finalArrayDos.push(pruebaDos)
      }
      prueba = []
      pruebaDos = []
    }
    //console.log(finalArray)
    console.log(finalArrayDos)
  } 
  
  function generateRandomNumber(min = 0, max = 6) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}
