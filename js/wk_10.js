document.getElementById("button1").addEventListener("click", function(e){
    // change attributes of element
    document.getElementById("image").src = "../class_notes/images/unicorns/unicorn (3).png"
})

var block_of_text = "Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient nisi netus magnis urna faucibus nibh adipiscing congue dui. Mus justo sagittis phasellus morbi blandit aliquam justo eros. Varius luctus torquent in potenti sociosqu cras. Mus tincidunt hendrerit dui penatibus phasellus pharetra penatibus morbi. Dictumst auctor eu suscipit praesent vulputate efficitur ut. Quisque dui maecenas urna hendrerit nunc ex. Ultrices fames pellentesque adipiscing curabitur ac nam tempor. Blandit per dolor class vulputate risus etiam elementum inceptos."

document.getElementById("button2").addEventListener("click", function(e){
    // change attributes of element
    
    document.getElementById("paragraph").innerHTML = block_of_text;
})

// dblclick, mouseleave, mouseover, mousemove