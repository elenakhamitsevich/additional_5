module.exports = function check(a, bracketsConfig)  {
  var x = [];
    for (var i=0, len=bracketsConfig.length; i<len; ++i){
      for(var p = 0, l = a.length; p < l; p++){
      if (a[p] === bracketsConfig[i][0]){
        x.push(a[p]);
      }
      if (a[p] === bracketsConfig[i][1]){
        if (x.length === 0){
          return false;
         } else if(a[p]===bracketsConfig[i][1]){
        x.pop();
      }
      else{
          return false;
         }
    }}
        if (x.length === 0) {    
      return true;
    }
   else {
     return false;
  }}}
  