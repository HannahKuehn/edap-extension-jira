/* App frontend script */
var rememberData;

var buttonClick = function(data){
      rememberData = data;
      
      var out = "";

      for(var q = 0; q < data.length; q++){
        if(document.getElementById("question" + q).checked){
          out += "<H3>" +  data[q].question + "</H3><br>";
          out += data[q].consequence + "<br>";
        }

        out += "<ul>";

        for(var qs = 0; qs < data[q].subquestions.length; qs++){
          if(document.getElementById("subquestion" + q + "_" + qs).checked){
            out += "<li><H4>" + data[q].subquestions[qs].question + "</H4><br>";
            out += data[q].subquestions[qs].consequence + "<br></li>";
          }

        }

        out += "</ul>";
      
      }
      document.getElementById("pagetitle").textContent = "Result of your checklist";
      document.getElementById("checklist").style.display = "none";
      document.getElementById("ausgabetext").innerHTML = out;
      document.getElementById("result").style.visibility = "visible";
  };

  var group = function(group){
    document.getElementById("groupdiv" + group).style.display = document.getElementById("group" + group).checked ? "inline" : "none";
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
    document.getElementById("pagetitle").textContent = "Welcome to the EDAP Checklist";
  };


