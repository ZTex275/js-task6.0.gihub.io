var game = {
init: function(){

  var proccess=1;
  var matrix = [
    ["-","-","-"],
    ["-","-","-"],
    ["-","-","-"]
  ];
  
  
  while (proccess>0){
    for(i=2; i<=10; i++){
      if (i % 2 == 0){
        var j = prompt ("Ход крестиков! Введите первую координату: ")
        var k = prompt ("Ход крестиков! Введите первую координату: ")
        matrix[j][k] = "x";
        console.log (matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + "\n" + matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + "\n" + matrix[2][0] + " " + matrix[2][1] + " " + matrix[2][2])
  }
  else{
    var j = prompt ("Ход ноликов! Введите первую координату: ")
    var k = prompt ("Ход ноликов! Введите первую координату: ")
    matrix[j][k] = "o";
    console.log (matrix[0][0] + " " + matrix[0][1] + " " + matrix[0][2] + "\n" + matrix[1][0] + " " + matrix[1][1] + " " + matrix[1][2] + "\n" + matrix[2][0] + " " + matrix[2][1] + " " + matrix[2][2])
    }

    if (((matrix[0][0]=="x")&&(matrix[0][1]=="x")&&(matrix[0][2]=="x"))||((matrix[1][0]=="x")&&(matrix[1][1]=="x")&&(matrix[1][2]=="x"))||((matrix[2][0]=="x")&&(matrix[2][1]=="x")&&(matrix[2][2]=="x"))||((matrix[0][0]=="x")&&(matrix[1][1]=="x")&&(matrix[2][2]=="x"))||((matrix[0][2]=="x")&&(matrix[1][1]=="x")&&(matrix[2][0]=="x"))||((matrix[0][1]=="x")&&(matrix[1][1]=="x")&&(matrix[2][1]=="x"))||((matrix[0][0]=="x")&&(matrix[1][0]=="x")&&(matrix[2][0]=="x"))){
        alert("Победа крестиков!");
        proccess=0;
        break;}
    if (((matrix[0][0]=="o")&&(matrix[0][1]=="o")&&(matrix[0][2]=="o"))||((matrix[1][0]=="o")&&(matrix[1][1]=="o")&&(matrix[1][2]=="o"))||((matrix[2][0]=="o")&&(matrix[2][1]=="o")&&(matrix[2][2]=="o"))||((matrix[0][0]=="o")&&(matrix[1][1]=="o")&&(matrix[2][2]=="o"))||((matrix[0][2]=="o")&&(matrix[1][1]=="o")&&(matrix[2][0]=="o"))||((matrix[0][1]=="o")&&(matrix[1][1]=="o")&&(matrix[2][1]=="o"))||((matrix[0][0]=="o")&&(matrix[1][0]=="o")&&(matrix[2][0]=="o"))){
        alert("Победа ноликов!");
        proccess=0;
        break;}
   
         }
       }
     }
    }
    game.init()