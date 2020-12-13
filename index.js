

window.addEventListener("keydown", function (event) {
  makeSound(event.keyCode);
});
window.addEventListener("keyup", function (event) {
  stopSound(event.keyCode);
});
function makeSound(key) {
  const audio = document.querySelector(`audio[data-key = "${key}"]`);
  console.log(audio);
  audio.play();
}
function stopSound(key){
  if(key==90||key==88||key==67||key==86||key==66||key==78)
  {

  }
  else
  {
  const audio = document.querySelector(`audio[data-key = "${key}"]`);
  console.log(audio);
  audio.pause();
 }
}
