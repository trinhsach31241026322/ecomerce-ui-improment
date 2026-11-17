var first = document.getElementById("first");

for (var i = 0; i < first.childNodes.length; i++) {
    var child = first.childNodes[i];
    console.log("child " + i + " = " + child + " nodeType=" + child.nodeType);

    // nodeType 3 is a text node; apply the color to the other child nodes.
    if (child.nodeType !== 3 && child.style) {
        child.style.backgroundColor = "#f5f5f5";
    }
}
