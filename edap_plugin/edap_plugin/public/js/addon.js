/* App frontend script */
var rememberData;

var buttonClick = function(data){
      rememberData = data;
      
      var out = "";

      for(var q = 0; q < data.length; q++){
        if(document.getElementById("question" + q).checked){
          out += data[q].question + "\n";
          //out += "-->" + data[q].consequence + "\n";
        }

        for(var qs = 0; qs < data[q].subquestions.length; qs++){

          if(document.getElementById("subquestion" + q + "_" + qs).checked){
            out += "  " + data[q].subquestions[qs].question + "\n";
            out += "  --> " + data[q].subquestions[qs].consequence + "\n";
          }

        }

      }
      document.getElementById("checklist").style.display = "none";
      document.getElementById("ausgabetext").innerText = out;
      document.getElementById("result").style.visibility = "visible";
  };

  var back = function(){
    for(var q = 0; q < rememberData.length; q++){
      document.getElementById("question" + q).checked = false;
      for(var qs = 0; qs < rememberData[q].subquestions.length; qs++){
        document.getElementById("subquestion" + q + "_" + qs).checked = false;
      }
    }
    document.getElementById("checklist").style.display = "inline";
    document.getElementById("result").style.visibility = "collapse";
  };


