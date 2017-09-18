var gpio = require("gpio");

var gpio4 = gpio.export(4, {
   direction: "in",
   ready: function() {
     console.log(gpio4);
   }
});

var processPin4 = function(val) {
  console.log(val);
}

gpio4.on("change", processPin4);
