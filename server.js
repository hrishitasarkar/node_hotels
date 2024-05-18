//function add(a,b){
 //   return a+b;
//}

//var add=function(a,b){
 //   return a+b;
//}

//var add=(a,b)=>{return a+b;}

/*var add=(a,b)=>a+b;
var result=add(18,7);

console.log(result);

(function(){console.log("rai is coding");})();
*/

/*var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);

fs.appendFile('greeting.txt','Hi'+' '+user.username+'!\n',()=>{
    console.log('file is created');
});
*/

const notes=require('./notes.js');
var _ =require('lodash');
console.log('server file is available');

var age=notes.age;
var addnum=notes.addnumber(age,10);
console.log(addnum);

var data=['person','person',1,2,3,2,3];
var filter=_.uniq(data);
console.log(filter);