function press(val){
  document.getElementById("first").value+=val
}


function clearvalue(){
    document.getElementById("first").value = null
}

function pressequal(){
    var text = document.getElementById("first").value
    var result = eval(text)  // eval() is a method that will automatically operate the arithmetic statements and store result.
    // document.getElementById("first").value = null
    document.getElementById("first").value = result
}