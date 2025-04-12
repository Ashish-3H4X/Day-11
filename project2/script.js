// string lenght method

var str = "rahul";
demo1.innerHTML = `
 var str = "rahul"; <br>
     demo1.innerHTML = str.length <br>
     result : --->>><br>
${str.length}`

//  string CharAt() method

demo2.innerHTML = ` var str = "rahul"; <br>
     demo2.innerHTML = str.charAt(2) <br>
      
     result : --->>> <br>
${str.charAt(2)}`


// string charCodeAt(0) method
demo3.innerHTML = `var str = "rahul"; <br>
     demo3.innerHTML = str.charCodeAt(2) <br>
      
     result : --->>> <br>
     ${str.charCodeAt(2)}`

// string at ()  method 

demo4.innerHTML = `var str = "rahul"; <br>
     demo4.innerHTML = str.at(3) <br>
     result : --->>><br>
       ${str.at(3)}`
/// string text[3] method 

demo5.innerHTML = `var str = "rahul"; <br>
     demo4.innerHTML = str[3] <br>
     result : --->>><br>
       ${str[3]}`

// Slice method 
let text = "Apple, Banana, Kiwi";
demo6.innerHTML = ` text = "Apple, Banana, Kiwi"; <br>
     demo4.innerHTML = text.slice(0,1) <br>
     result : --->>><br>
       ${text.slice(0, 1)}`
demo7.innerHTML = `text = "Apple, Banana, Kiwi"; <br>
 demo4.innerHTML = text.slice(0,7) <br>
 result : --->>><br>
   ${text.slice(0, 7)}`
demo8.innerHTML = `text = "Apple, Banana, Kiwi"; <br>
   demo4.innerHTML = text.slice(7,13) <br>
   result : --->>><br>
     ${text.slice(7, 13)}`
demo9.innerHTML = `text = "Apple, Banana, Kiwi"; <br>
     demo4.innerHTML = text.slice(14, text.length) <br>
     result : --->>><br>
       ${text.slice(14, text.length)}`