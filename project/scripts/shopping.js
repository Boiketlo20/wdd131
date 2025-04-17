const bags = [
    {
      bagName: "Hamptons Hobo Bag",
      price: 500,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/cj814_b4s0m_a0?$desktopProductTile$"
    },
    {
      bagName: "Jonie Bag With Cherry Print",
      price: 800,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/cae83_b4cah_a0?$desktopProductTile$"
    },
    {
      bagName: "Coachtopia Loop Bag",
      price: 250,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/ct385_blk_a0?$desktopProductTile$"
    },
    {
      bagName: "Coachtopia Loop Backpack",
      price: 600,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/ct384_blk_a0?$desktopProductTile$"
    },
    {
      bagName: "Juliet Shoulder Bag",
      price: 450,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/cal96_b4sn_a0?$desktopProductTile$"
    },
    {
      bagName: "Wllow Tote Bag",
      price: 325,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/cal99_b4na_a0?$desktopProductTile$"
    },
    {
      bagName: "Brooklyn Shoulder Bag",
      price: 495,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/c8562_b4xhg_a0?$desktopProductTile$"
    },
    {
      bagName: "League Flap Backpack",
      price: 486,
      imageUrl:
      "https://coach.scene7.com/is/image/Coach/cu201_r8e_a0?$desktopProductTile$"
    },
    {
      bagName: "Traditional Shweshe",
      price: 60,
      imageUrl:
      "https://images.unsplash.com/photo-1692689383138-c2df3476072c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGJhZ3N8ZW58MHx8MHx8fDA%3D"
    },
    {
      bagName: "Crossbody Bags",
      price: 75,
      imageUrl:
      "https://images.unsplash.com/photo-1527385352018-3c26dd6c3916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        bagName: "African Leather Bags",
        price: 245,
        imageUrl:
        "https://images.unsplash.com/photo-1613896640137-bb5b31496315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJhZ3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        bagName: "Hand-weaved Bag",
        price: 350,
        imageUrl:
        "https://images.unsplash.com/photo-1524679813234-66a389fe1a42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJhZ3N8ZW58MHx8MHx8fDA%3Dhttps://coach.scene7.com/is/image/Coach/cu201_r8e_a0?$desktopProductTile$"
    }
  ];
  
  createTempleCard(bags);

  const highPriced = document.querySelector("#high");
  const lowPriced = document.querySelector("#low");
  const allPrices = document.querySelector("#home");
  const addButton = document.createElement('button');
  
  highPriced.addEventListener("click", () => {
    createTempleCard(bags.filter(bag => bag.price > 400))
  });
  
  lowPriced.addEventListener("click", () => {
    createTempleCard(bags.filter(bag => bag.price < 400))
  });
  
  allPrices.addEventListener("click", () => {
    createTempleCard(bags)
  });
  
function createTempleCard(filteredBags) {
  document.querySelector(".res-grid").innerHTML = "";
  filteredBags.forEach(bag => {
      let card = document.createElement('section');
      let name = document.createElement('h3');
      let price = document.createElement('p');
      let image = document.createElement('img');
      let button = document.createElement('button')

      name.textContent = bag.bagName;
      price.textContent = `R${bag.price}`;
      image.setAttribute("src", bag.imageUrl);
      image.setAttribute("alt", `${bag.bagName}`);
      image.setAttribute("loading", "lazy");
      image.setAttribute("loading", "lazy");
      button.textContent = "Add to Cart";
      button.classList.add('add-to-cart');


      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(button)

      document.querySelector(".res-grid").appendChild(card);
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(bag) {
  cart.push(bag);
  localStorage.setItem('cart', JSON.stringify(cart));
}

addButton.textContent = 'Add to Cart';
addButton.addEventListener('click', () => addToCart(bag));
card.appendChild(addButton);