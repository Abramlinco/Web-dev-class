// const button = document.getElementsByClassName('btn')
// button.addEventListener('click', ()=>{
//   btn.textContent= alert("Happy new day!")
// })

let b = ["house", 12,11,13,14,16]

//map
console.log(b);


let b1 = b.map((num)=> num * num)
console.log(b1);

//SYNCHRONOUS, ASYNCHRONOUS-ASYNC, CLIENT, SERVER,API,JSON REQUEST,AWAIT,PROMISE

//APIs - ENDPOINT- URL

const fetctDisplayProduct = async ()=>{
    const URL = `https://fakestoreapi.com/products`
    try {
        const response = await fetch(URL)

        const products = response.json()
        displayProducts(products)
    } 
    
    catch (error) {
    console.log("error displaying", error);
    alert("error displaying product, check console for more information")   
    }

    // function to display on our document
    const displayProducts = (products) => {
      const productList = document.querySelector('.product-list')

      let productHTML = ""

     products.forEach(product => {
      console.log(product);
      
      productHTML += `
        (div class="w-full rounded-nd shadow p-3m-2 "
          <hl class- "text-4x1 font-bold
          uppercase text-center">${product.title}
          </h1>
          <img> sre="${product.Image}" aIt="$
          {product.title.slice(0,3)}" Class="W-
          [15rem] h-15rem mx-auto rounded-md">
          <p class="text-center text-nd
          text-gray-400">

          ${product.descriptions}
          </p>

          <p class="text-sm">$product.category}</p>
          <p class="text-red-500 font-bold text-md">$${product.category}</p>
          <span class="font-semibold">Rating: <span>${product.rating.rate} (${product.rating.count} reviews)</span></span>
          </dv>
      `
      productList.innerHtml = productHtmml
     })
    }
    }
    
     fetchDisplayProduct()