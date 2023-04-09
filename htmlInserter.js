function extractInnerBlock(document, sourceHtmlElement) {
  let divTags = document.getElementsByTagName("div");
  for (let divTagsKey = 0; divTagsKey < divTags.length; divTagsKey++) {
    let innerDiv = divTags[divTagsKey];
    let innerFile = innerDiv.getAttribute("insert-block");
    if (innerFile) {
      extractHtml(innerFile, sourceHtmlElement);
    }
  }
}

function extractHtml(filePath, sourceHtmlElement)
{
  /* Make an HTTP request using the attribute value as the file name: */
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        let innerHtml = document.createElement('div');
        innerHtml.innerHTML = this.responseText;
        extractInnerBlock(innerHtml, innerHtml);
        sourceHtmlElement.innerHTML = innerHtml.innerHTML;
      }
      if (this.status == 404) {
        sourceHtmlElement.innerHTML = "Page not found.";
        alert(filePath + "not found")
      }
      /* Remove the attribute, and call this function once more: */
      sourceHtmlElement.removeAttribute("insert-block");
      includeHTML();
    }
  }

  xhttp.open("GET", filePath, true);
  xhttp.send();
  /* Exit the function: */
}

function includeHTML() {
  var z, i, elmnt, file;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    console.log(elmnt);
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("insert-block");
    console.log(file);
    if (file) {
      extractHtml(file, elmnt);
      return;
    }
  }
}
