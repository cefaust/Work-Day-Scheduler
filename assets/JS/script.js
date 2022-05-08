var saveBtnEl = $(".btn");
let textareaEls = $("textarea");

setInterval(runEverySecond, 1000);
function runEverySecond(time) {
  var unix = moment().format("X");
  var time = moment(unix, "X").format("MMM DD, YYYY [at] h:mm:ss ");
  const currentHour = moment(unix, "X").format("H");
  $("#currentDay").text(time);

  for (let i = 0; i < textareaEls.length; i++) {
    const textarea = $(textareaEls[i]);
    const rowHour = i + 9;
    if (currentHour < rowHour) {
      // if in future
      textarea.css("background-color", "green");
    } else if (currentHour > rowHour) {
      // if in past
      textarea.css("background-color", "grey");
    } else {      
      // current hour
      textarea.css("background-color", "red");
    }
  }
}
runEverySecond()

saveBtnEl.click(function (event) {
  let textarea = $(event.currentTarget).siblings("textarea");
  console.log(textarea, textarea.attr("id"));
  let id = textarea.attr("id");
  let val = textarea.val();

  localStorage.setItem(id, val);
  
});

for (let i = 0; i < textareaEls.length; i++) {
  const textarea = $(textareaEls[i]);
  let id = textarea.attr("id");

  let valueFromStorage = localStorage.getItem(id);
  textarea.val(valueFromStorage);
}
