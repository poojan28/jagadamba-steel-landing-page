/**
 * content.js
 * Paul Krishnamurthy 2016
 *
 * https://paulkr.com
 * paul@paulkr.com
 */

var $clickedEl;

document.addEventListener("contextmenu", function (event) {
  $clickedEl = $(event.target);
}, true);

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  if (message === "showFontDetails") {

    var fontName   = $clickedEl.css("font-family");
    var fontSize   = $clickedEl.css("font-size");
    var fontWeight = $clickedEl.css("font-weight");
    var lineHeight = $clickedEl.css("line-height");
    var fontColor  = $clickedEl.css("color");

    var htmlText = "<div id='FontPicker' style='font-size: 16px !important; margin: 20px 0 0 0 !important; padding: 0 !important; font-family: Helvetica, sans-serif !important; color: #595959 !important;'>" +
                    "<p style='color: #595959 !important; margin-bottom: 7px !important; margin-top: 7px !important; font-size: 16px !important; font-family: Helvetica, sans-serif !important;'> <b><span class='font-picker-span'>Font name: </span></b>" +
                    fontName + "</p><p style='color: #595959 !important; margin-bottom: 7px !important; margin-top: 7px !important; font-size: 16px !important; font-family: Helvetica, sans-serif !important;'> <b><span class='font-picker-span'>Font size: </span></b>" +
                    fontSize + "</p><p style='color: #595959 !important; margin-bottom: 7px !important; margin-top: 7px !important; font-size: 16px !important; font-family: Helvetica, sans-serif !important;'> <b><span class='font-picker-span'>Font weight: </span></b>" +
                    fontWeight + "</p><p style='color: #595959 !important; margin-bottom: 7px !important; margin-top: 7px !important; font-size: 16px !important; font-family: Helvetica, sans-serif !important;'> <b><span class='font-picker-span'>Line height: </span></b>" +
                    lineHeight + "</p><p style='color: #595959 !important; margin-bottom: 7px !important; margin-top: 7px !important; font-size: 16px !important; font-family: Helvetica, sans-serif !important;'> <b><span class='font-picker-span'>Font color: </span></b> " +
                    fontColor + "</p></div>";

    swal({
      title: "Font Picker",
      text: htmlText,
      imageUrl: chrome.extension.getURL("logo.png"),
      imageWidth: 80,
      imageHeight: 80,
      confirmButtonColor: "#3498DB",
      confirmButtonText: "Got it!",
      confirmButtonAriaLabel: 'Got it!',
      html: htmlText,
      background: "#FFF url(" + chrome.extension.getURL("background.png") + ")",
      allowOutsideClick: false,
      showCloseButton: true
    });

  }
});

