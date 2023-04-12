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
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === this.DONE) {
      if (this.status === 200) {
        let innerHtml = document.createElement("div");
        innerHtml.innerHTML = this.responseText;
        extractInnerBlock(innerHtml, innerHtml);
        sourceHtmlElement.innerHTML = innerHtml.innerHTML;
      }
      if (this.status === 404) {
        sourceHtmlElement.innerHTML = "Page not found.";
        alert(filePath + "not found")
      }
      /* Remove the attribute, and call this function once more: */
      sourceHtmlElement.removeAttribute("insert-block");
      includeHTML();
    }
  }

  request.open("GET", filePath, true);
  request.send();
}

function includeHTML() {
  let blocks = document.getElementsByTagName("div");

  for (let i = 0; i < blocks.length; i++) {
    let divElement = blocks[i];
    const file = divElement.getAttribute("insert-block");
    if (file) {
      extractHtml(file, divElement);
      return;
    }
  }
}

includeHTML();
