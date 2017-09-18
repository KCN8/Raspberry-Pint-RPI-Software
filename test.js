var gpio = require("gpio");

var gpio4 = gpio.export(4, {
   direction: "in",
   ready: function() {
     console.log(gpio4);
   }
});
