const storeForm = document.getElementById("storeForm");
const product = document.getElementById("product");
const description = document.getElementById("description");
const quantityProduct = document.getElementById("quantityProduct");
const priceProduct = document.getElementById("priceProduct");
const loadProduct = document.getElementById("loadProduct");

loadProduct.addEventListener("click", function () {
  if (
    product.value == "" ||
    quantityProduct.value == " " ||
    priceProduct.value == " " ||
    description.value == ""
  ) {
    alert("Aún no se llenan los campos");
  } else {
    function productStore(product, description, priceProduct, quantityProduct) {
      this.product = product;
      this.description = description;
      this.priceProduct = priceProduct;
      this.quantityProduct = quantityProduct;
    }
    var captureProduct = document.getElementById("product").value;
    var captureDescription = document.getElementById("description").value;
    var capturePriceProduct = document.getElementById("priceProduct").value;
    var captureQuantityProduct =
      document.getElementById("quantityProduct").value;

    newProduct = new productStore(
      captureProduct,
      captureDescription,
      capturePriceProduct,
      captureQuantityProduct
    );
    addProduct();
    storeForm.reset();
  }
});

function addProduct() {
  var arrayStore = [];
  arrayStore.push(newProduct);
  console.log(arrayStore);
  const sum =
    parseFloat(quantityProduct.value) * parseFloat(priceProduct.value);
  const ivaProduct = sum * 0.19;
  const priceTotal = sum + ivaProduct;
  var row = document.createElement("tr");
  row.innerHTML = `<td>${newProduct.product}</td>
    <td>${newProduct.description}</td>
    <td>${newProduct.quantityProduct}</td>
    <td>${newProduct.priceProduct}</td>
    <td>${priceTotal}</td>`;
  tableProduct.appendChild(row);
}
