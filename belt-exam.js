function like(id){
    var like = document.querySelector(`#${id}`)
    console.log(like.innerHTML)
    like.innerHTML++
}
function remove(){
    const element = document.getElementById("donate");
    element.remove();
}
function selectPet(element) {
    console.log(element.value);
    alert("you are looking for a: " + element.value)
}