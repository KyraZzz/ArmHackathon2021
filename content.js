var deselect = () => {
    var elementList = document.getElementsByClassName("acronym-marker");
    var selection = window.getSelection();
    for (var i = 0; i < elementList.length;i++) {
        var ele = elementList[i];
        if (selection.toString() !== ele.textContent){
            var newElement = document.createElement("span");
            newElement.innerText = ele.textContent;
            ele.replaceWith(newElement);
        }
    }
}

var listener = () => {
    var selection = window.getSelection();
    var element = document.createElement("mark");
    element.style.fontWeight = "bold";
    element.style.color = "black";
    element.className = "acronym-marker";
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        range.surroundContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    deselect();
    
};
document.addEventListener('dblclick', listener);
