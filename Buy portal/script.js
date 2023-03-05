//to Logout form shopping portal
function myFun() {
    localStorage.removeItem('loggedIn');
    window.location.href = '/Contest F3/project/login.html'
}

//to Display Tiles of products
fetch('https://fakestoreapi.com/products')
    .then((resp) => resp.json())
    .then((data) => {
        let arr1 = data
        
        let targets = document.querySelector('.tiles')
        
        arr1.map((products)=>{
            targets.innerHTML += `<div class="col">
            <div class="card h-100 " style="width: 18rem;">
                
                <img src=${products.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${products.title} </h5>
                    <p class="price"> $ <span>${products.price}</span></p>
                    <p class="card-text">
                    Category : <span class="catogory">${products.category}</span> <br>
                    
                    <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                    Rating: ${products.rating.rate}
                    </p>
                    
                </div>
                <button class="btn btn-dark" onclick="addToCart(event, ${products.id})">Add TO Cart</button>
            </div>
        </div>`
        })
    })
    

    //filter profucts
    let search = document.getElementById('inpText');
    let filter = document.querySelectorAll('.filter')
   

   
    search.addEventListener('keyup', filterProduct);

    function filterProduct(){
        let filterValue = search.value.toUpperCase();
        let item = document.querySelectorAll('.card-title');
        for(let i=0; i<item.length; i++){

            if(item[i].innerHTML.toLocaleUpperCase().indexOf(filterValue)>-1){
                item[i].style.display = 'inital';
            }else{
                item[i].parentElement.parentElement.style.display = 'none';
            }
        }
    }
// For fileter all
    filter[0].addEventListener('click', ()=>{
        for (const val of filter) {
            val.classList.remove('active');
        }
        filter[0].classList.add('active')
        let parent = document.querySelectorAll('.card');
        
        for(let i=0; i<parent.length; i++){
            parent[i].style.display = '';
        }

    })

// For Mens filter
    filter[1].addEventListener('click', ()=>{
        for (const val of filter) {
            val.classList.remove('active');
        }
        filter[1].classList.add('active');
        let filterValue = `men's clothing`;
        let target = document.querySelectorAll('.catogory');
        
        for (let i = 0; i < target.length; i++) {
            if(target[i].innerHTML == filterValue){
                target[i].parentElement.parentElement.parentElement.style.display = '';
            }else{
                target[i].parentElement.parentElement.parentElement.style.display = 'none';
            }            
        }

    }) 
    
    
// For Womens filter
    filter[2].addEventListener('click', ()=>{
        for (const val of filter) {
            val.classList.remove('active');
        }
        filter[2].classList.add('active');
        let filterValue = `women's clothing`;
        let target = document.querySelectorAll('.catogory');

        for (let i = 0; i < target.length; i++) {
            if(target[i].innerHTML == filterValue){
                target[i].parentElement.parentElement.parentElement.style.display = '';
            }else{
                target[i].parentElement.parentElement.parentElement.style.display = 'none';
            }            
        }

    })    


    //For jewellery filter

    filter[3].addEventListener('click', ()=>{
        for (const val of filter) {
            val.classList.remove('active');
        }
        filter[3].classList.add('active');
        let filterValue = `jewelery`;
        let target = document.querySelectorAll('.catogory');

        for (let i = 0; i < target.length; i++) {
            if(target[i].innerHTML == filterValue){
                target[i].parentElement.parentElement.parentElement.style.display = '';
            }else{
                target[i].parentElement.parentElement.parentElement.style.display = 'none';
            }            
        }

    }) 

    //for electronics filter

    filter[4].addEventListener('click', ()=>{
        for (const val of filter) {
            val.classList.remove('active');
        }
        filter[4].classList.add('active');
        let filterValue = `electronics`;
        let target = document.querySelectorAll('.catogory');

        for (let i = 0; i < target.length; i++) {
            if(target[i].innerHTML == filterValue){
                target[i].parentElement.parentElement.parentElement.style.display = '';
            }else{
                target[i].parentElement.parentElement.parentElement.style.display = 'none';
            }            
        }

    }) 

    // Add To Cart Function

    let items = []
    
    function addToCart(event, i){
        let num = 1;
        console.log()
        let item = {
            id: i,
            name : event.target.parentElement.children[1].children[0].innerText,
            price: event.target.parentElement.children[1].children[1].children[0].innerText,
            no: num
        };

        if (JSON.parse(localStorage.getItem('items'))==null) {
            items.push(item)
            localStorage.setItem('items', JSON.stringify(items))
            
        }else{
            let localItem = JSON.parse(localStorage.getItem('items'))
            localItem.push(item);
            localStorage.setItem('items', JSON.stringify(localItem))
        }

    }

    //logout function
    function myFun() {
        localStorage.removeItem('items')
        localStorage.removeItem('loggedIn')
        window.location.href = '../index.html'
    }
