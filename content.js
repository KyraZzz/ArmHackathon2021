var listener = () => {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        var text = range.cloneContents().textContent;
        console.log(text);
    }
};
document.addEventListener('dblclick', listener);