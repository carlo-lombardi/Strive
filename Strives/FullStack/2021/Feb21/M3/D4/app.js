console.log(".js connected");

window.onload = () =>{
    const renderBook = (curr) => {
            // console.log(curr);
            // console.log(curr.title);
            // console.log(curr.category);
            // console.log(curr.price);
       return `<div class="card mb-3" style="max-width: 380px; max-height: 200px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="./details.html?details=${curr.asin}">
                <img class="img-fluid my-img" src="${curr.img}" alt="${curr.title}">
            </a>  
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${curr.title}</h5>
              <p class="card-text"><small class="text-muted">${curr.category}</small></p>
              <div class="btn-group" role="group" aria-label="...">
                <button id="addToCard" type="button" class="btn btn-warning"><i class="fas fa-shopping-cart"></i> <span class="">${curr.price}</span></button>
                <button id="skip" type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>`
    }
    
    const createCardsBook = (prev,curr)=>{
        return prev+renderBook(curr)
    }
    
    const getInfoApi = () => {
        fetch("https://striveschool-api.herokuapp.com/books").then(response => response.json()).then(
            data => {
                console.log(data)
                const listavailable = data.reduce((prev, libro) => createCardsBook(prev, libro),"")
                const list = document.querySelector("#list")
                list.innerHTML = ""
                list.innerHTML = listavailable
                // console.log(categories);
            }
        )
    } 
    
    getInfoApi()
}

