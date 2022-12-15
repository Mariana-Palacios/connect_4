
export default function winDetector(matrix){
    let prueba = []
    let pruebaDos = []
    let pruebaTres= []
    let pruebaCuatro= []
    let finalArray = []
    let finalArrayDos = []
    let con = [0,0,0,0]

    for(let i = 0; i < 7; i++){
      for (let j = 0; j < 6; j++) {
        if(j+i<=5){
            if(matrix[6-j]['array'][j+i]!=0){
                con[0]= con[0]+1
                prueba.push({column:6-j,row:j+i,value:matrix[6-j]['array'][j+i]})
                if(prueba.length>1&&prueba[prueba.length-2]['value']!=matrix[6-j]['array'][j+i]){
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
            if(matrix[0+j]['array'][5-i-j]!=0){
                con[1]= con[1]+1
                pruebaDos.push({column:0+j,row:5-i-j,value:matrix[0+j]['array'][5-i-j]})
                if(pruebaDos.length>1&&pruebaDos[pruebaDos.length-2]['value']!=matrix[0+j]['array'][5-i-j]){
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
        // 0_0, 1_1, 2_2, 3_3, 4_4, 5_5
        if(j<=5 && i<=5 && i+j<=5){
          if(matrix[j]['array'][i+j]!=0 ){
              con[2]= con[2]+1
              pruebaTres.push({column:j,row:i+j,value:matrix[j]['array'][i+j]})
              if(pruebaTres.length>1&&pruebaTres[pruebaTres.length-2]['value']!=matrix[j]['array'][i+j]){
                if(con[2]<4){
                    pruebaTres[pruebaTres.length-2] = pruebaTres[pruebaTres.length-1]
                    pruebaTres.pop()
                    con[2]=1
                }
                else if(con[2]>=4){
                    con[2]= con[2]-1
                    pruebaTres.pop()
                }
            }
          }
        }

        if(j<=5 && i<=5 && i+j<=5){
          if(matrix[j]['array'][i+j]!=0 ){
              con[2]= con[2]+1
              pruebaTres.push({column:j,row:i+j,value:matrix[j]['array'][i+j]})
              if(pruebaTres.length>1&&pruebaTres[pruebaTres.length-2]['value']!=matrix[j]['array'][i+j]){
                if(con[2]<4){
                    pruebaTres[pruebaTres.length-2] = pruebaTres[pruebaTres.length-1]
                    pruebaTres.pop()
                    con[2]=1
                }
                else if(con[2]>=4){
                    con[2]= con[2]-1
                    pruebaTres.pop()
                }
            }
          }
        }
        if(j<=5 && i<=5 && 1+i+j<=6){
          if(matrix[1+i+j]['array'][j]!=0 ){
              con[3]= con[3]+1
              pruebaCuatro.push({column:1+i+j,row:j,value:matrix[1+i+j]['array'][j]})
              if(pruebaCuatro.length>1&&pruebaCuatro[pruebaCuatro.length-2]['value']!=matrix[1+i+j]['array'][j]){
                if(con[3]<4){
                    pruebaCuatro[pruebaCuatro.length-2] = pruebaCuatro[pruebaCuatro.length-1]
                    pruebaCuatro.pop()
                    con[3]=1
                }
                else if(con[3]>=4){
                    con[3]= con[3]-1
                    pruebaCuatro.pop()
                }
            }
          }
        }
      }
      if(pruebaCuatro.length>=4){
        con[3]=0
        finalArray.push(pruebaCuatro)
      }
      if(pruebaDos.length>=4){
        con[1]=0
        finalArrayDos.push(pruebaDos)
      }
      prueba = []
      pruebaDos = []
      pruebaTres = []
      pruebaCuatro = []
    }
    //console.log(finalArray)
    console.log(finalArray)
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
