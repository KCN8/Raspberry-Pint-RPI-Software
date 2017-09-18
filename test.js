var gpio = require("gpio");

var gpio4 = gpio.export(4, {
   direction: "in",
   ready: function() {
     console.log(gpio4);
   }
});

gpio4.set(function (){
  console.log(gpio4.value);
})

gpio4.set(0, function (){
  console.log(gpio4.value);
})
