function okekechukwudalu(){
    const james = document.getElementById("utc-time");
    const oliver = new Date()
    james.textContent =`The current Time is ${oliver.toLocaleTimeString()}`;
}
 okekechukwudalu();