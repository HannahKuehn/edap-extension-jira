/* App frontend script */
var rememberData;

var buttonClick = function(groups){
      rememberData = groups;
      var out = "";

      for(var i = 0; i < groups.length; i++){
        var data = groups[i].questions;
        out += "<H2>" + groups[i].group + "</H2><br>";
        for(var q = 0; q < data.length; q++){
          if(document.getElementById("question" + data[q].qid).checked){
            out += "<H3>" +  data[q].question + "</H3><br>";
            out += data[q].consequence + "<br>";
          }
  
          out += "<ul>";
  
          for(var qs = 0; qs < data[q].subquestions.length; qs++){
            if(document.getElementById("subquestion" + data[q].subquestions[qs].qid).checked){
              out += "<li><H4>" + data[q].subquestions[qs].question + "</H4><br>";
              out += data[q].subquestions[qs].consequence + "<br></li>";
            }
  
          }
  
          out += "</ul>";
        
        }
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
    for(var i = 0; i < rememberData.length; i++){
      var data = rememberData[i].questions;
      document.getElementById("group" + rememberData[i].groupid).checked = false;
      document.getElementById("groupdiv" + rememberData[i].groupid).style.display = "none";
      for(var q = 0; q < data.length; q++){
        document.getElementById("question" + data[q].qid).checked = false;
        for(var qs = 0; qs < data[q].subquestions.length; qs++){
          document.getElementById("subquestion" + data[q].subquestions[qs].qid).checked = false;
        }
      }
    }
    document.getElementById("checklist").style.display = "inline";
    document.getElementById("result").style.visibility = "collapse";
    document.getElementById("pagetitle").textContent = "Welcome to the EDAP Checklist";
  };


