const items = [
  {
    id: 1,
    name: "Mailer Boxes",
    src: "images/product/mailer-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 2,
    name: "Display Boxes",
    src: "images/product/display-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 3,
    name: "Gable Boxes",
    src: "images/product/product-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 4,
    name: "Pillow Boxes",
    src: "images/product/gift-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 5,
    name: "Four Corner Boxes",
    src: "images/product/shipping-box.jpg",
    url: "",
    clsx: "offset-lg-1",
  },
  {
    id: 6,
    name: "Cake Boxes",
    src: "images/product/mailer-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 7,
    name: "Candle Boxes",
    src: "images/product/display-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 8,
    name: "Paper Bags",
    src: "images/product/product-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 9,
    name: "Business Card Boxes",
    src: "images/product/gift-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 10,
    name: "Cosmetic Boxes",
    src: "images/product/shipping-box.jpg",
    url: "",
    clsx: "offset-lg-1",
  },
  {
    id: 11,
    name: "Product Boxes",
    src: "images/product/mailer-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 12,
    name: "Chinese Food Boxes",
    src: "images/product/display-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 13,
    name: "Cigarette Boxes",
    src: "images/product/product-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 14,
    name: "Envelopes",
    src: "images/product/gift-box.jpg",
    url: "",
    clsx: "",
  },
  {
    id: 15,
    name: "Shipping Boxes",
    src: "images/product/shipping-box.jpg",
    url: "",
    clsx: "offset-lg-1",
  },
];

const searchBar = document.querySelector("#search-bar");
// const searchBtn = document.querySelector("#search-btn");

function search() {
  let query = searchBar.value;
  if (query) {
    console.log(query);
  }

  for (let x = 1; x <= rowCount; x++) {
    const fragmentCol = document.createDocumentFragment();
    const productRow = document.createElement("div");
    productRow.classList.add("row", "mb-4", "product-row");
    console.log("x =", x);

    for (let y = x * rowSize - 5; y < x * rowSize; y++) {
      console.log("y =", y);
      const productItemCol = document.createElement("div");
      productItemCol.classList.add(
        "col-sm-6",
        "col-md-3",
        "col-lg-2",
        "product-item"
      );

      const productItem = document.createElement("div");
      productItem.classList.add("team-member");

      const productItemImgDiv = document.createElement("div");
      productItemImgDiv.classList.add("mb-4");

      const productItemImg = document.createElement("img");
      productItemImg.classList.add(
        "rounded-circle",
        "img-fluid",
        "product-img"
      );

      const productItemTitleDiv = document.createElement("div");
      productItemTitleDiv.classList.add("align-self-center");

      const productItemTitle = document.createElement("h5");
      productItemTitle.classList.add("product-name");

      productItemCol.appendChild(productItem);
      productItem.appendChild(productItemImgDiv);
      productItem.appendChild(productItemTitleDiv);
      productItemImgDiv.appendChild(productItemImg);
      productItemTitleDiv.appendChild(productItemTitle);

      productItemTitle.textContent = items[y].name;
      productItemImg.setAttribute("src", items[y].src);

      fragmentCol.appendChild(productItemCol);
    }
    productRow.appendChild(fragmentCol);
    fragmentRow.appendChild(productRow);
    products.appendChild(fragmentRow);
  }
}


const products = document.querySelector(".products");

// Create a fragement
const fragmentRow = document.createDocumentFragment();

const rowSize = 5;
const rowCount = items.length / rowSize;