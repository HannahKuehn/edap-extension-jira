/* App frontend script */

var checks = [];

testString = 'huhu das sollte angezeigt werden';

var buttonClick = function(data){
      console.log("hello");
      var out = "";

      for(var q = 0; q < data.length; q++){
        if(document.getElementById("question" + q).checked){
          out += data[q].question + "\n";
        }

        for(var qs = 0; qs < data[q].subquestions.length; qs++){

          if(document.getElementById("subquestion" + q + "_" + qs).checked){
            out += data[q].subquestions[qs].question + "\n";
          }

        }

      }
      document.getElementById("ausgabetext").innerText = out;
  };


