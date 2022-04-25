(() => {
  // DistributionPackages/Alicante.Forms/Resources/Private/Fusion/Forms.js
  var orderItems = document.getElementById("formOrder");
  window.choices = new Choices(orderItems, {
    delimiter: ",",
    addItems: true,
    editItems: false,
    maxItemCount: -1,
    removeItems: true,
    removeItemButton: true,
    duplicateItemsAllowed: false,
    items: localStorage.getItem("orderValue") ? localStorage.getItem("orderValue").length ? localStorage.getItem("orderValue").split(",") : [] : []
  });
  orderItems.addEventListener("change", function(event) {
    localStorage.setItem("orderValue", document.getElementById("formOrder").value);
  }, false);
  orderItems.addEventListener("removeItem", function(id, value, label, customProperties, groupValue) {
    let event = new CustomEvent("item-removed", {
      element: {
        id,
        value,
        label,
        groupValue,
        customProperties
      }
    });
    window.dispatchEvent(event);
  }, false);
  window.addEventListener("item-added", function(e) {
    var title = document.querySelector("h1 .productTitle").innerText.replace(/,\s*/g, "-"), formOrder = document.getElementById("formOrder").value;
    if (!formOrder.split(",").includes(title)) {
      window.choices.setValue([{
        value: document.querySelector("h1 .productTitle").innerText.replace(/,\s*/g, "-"),
        label: document.querySelector("h1 .productTitle").innerText.replace(/,\s*/g, "-"),
        customProperties: {
          theme: document.body.dataset.theme || "default"
        }
      }]);
    }
  });
})();
//# sourceMappingURL=Forms.js.map
