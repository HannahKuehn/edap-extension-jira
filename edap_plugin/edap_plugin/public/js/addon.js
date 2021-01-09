/* App frontend script */

var checks = [];

testString = 'huhu das sollte angezeigt werden';

var buttonClick = function(){
      /*console.log("hello");
      for(var q = 0; q < data.length; q++){
        console.log(data[q].question);
        for(var qs = 0; qs < data[q].subquestions; qs++){
          console.log('     ' + data[q].subquestions[qs]);
        }
      }*/
      for(var i = 0; i < checks.length; i++){
        console.log(checks[i].question);
      }
  };

var boxClick = function(check, question){
  if(check.checked){
    checks.push(question);
  }else{
    const i = checks.indexOf(question);
    if (i > -1) {
      checks.splice(i, 1);
    }
  } 
};

