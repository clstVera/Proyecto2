let products = JSON.parse(localStorage.getItem('product'))

window.addEventListener('load', e => {
    loadProduct()
})

function loadProduct(product) {
    document.querySelector('.nav-tabs').innerHTML = ''
    document.querySelector('.tab-content').innerHTML = ''

    products.forEach(product => {
        document.querySelector('.nav-tabs').innerHTML += `  <li class="nav-item" role="presentation">
                                                                <button class="nav-link" data-bs-toggle="tab" data-bs-target="#product${product.id}" type="button" role="tab">Product ${product.id}</button>
                                                            </li>`
        document.querySelector('.tab-content').innerHTML += `   <div class="tab-pane fade" id="product${product.id}" role="tabpanel">
                                                                    <div class="container-fluid d-flex justify-content-start my-5">
                                                                        <div class="row g-4">
                                                                            <div class="d-none d-lg-flex col-lg-2 justify-content-start align-items-end flex-column">
                                                                                <img src=${product.imgFront} class="img-fluid rounded mb-4" d-flex
                                                                                    justify-content-center align-items-center style="height: 150px;">
                                                                                <img src=${product.imgBack} class="img-fluid rounded" d-flex
                                                                                    justify-content-center align-items-center style="height: 150px;">
                                                                            </div>
                                                                            <div class="col-md-6 col-lg">
                                                                                <div id="carouselExampleControls${product.id}" class="carousel slide" data-bs-ride="carousel">
                                                                                    <div class="carousel-inner">
                                                                                        <div class="carousel-item active">
                                                                                            <img src=${product.imgFront} class="img-fluid rounded">
                                                                                        </div>
                                                                                        <div class="carousel-item">
                                                                                            <img src=${product.imgBack}  class="img-fluid rounded">
                                                                                        </div>
                                                                                    </div>
                                                                                    <button class="carousel-control-prev" type="button"
                                                                                        data-bs-target="#carouselExampleControls${product.id}" data-bs-slide="prev">
                                                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                                        <span class="visually-hidden">Previous</span>
                                                                                    </button>
                                                                                    <button class="carousel-control-next" type="button"
                                                                                        data-bs-target="#carouselExampleControls${product.id}" data-bs-slide="next">
                                                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                                        <span class="visually-hidden">Next</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-6 col-lg p-5">
                                                                                <h3>${product.product}</h3>
                                                                                <p class="fs-4">$ ${product.price}</p>
                                                                                <p class="fs-5">${product.description}</p>
                                                                                <p>Size</p>
                                                                                <ul class="d-flex flex-row" style="list-style: none; padding-inline-start:0px">
                                                                                    <li class="me-1">
                                                                                        <p class="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center"
                                                                                            style="height: 50px; width: 50px;">S
                                                                                        </p>
                                                                                    </li>
                                                                                    <li class="me-1">
                                                                                        <p class="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center"
                                                                                            style="height: 50px; width: 50px;">M
                                                                                        </p>
                                                                                    </li>
                                                                                    <li class="me-1">
                                                                                        <p class="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center"
                                                                                            style="height: 50px; width: 50px;">L
                                                                                        </p>
                                                                                    </li>
                                                                                    <li class="me-1">
                                                                                        <p class="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center"
                                                                                            style="height: 50px; width: 50px;">XL
                                                                                        </p>
                                                                                    </li>
                                                                                    <li class="me-1">
                                                                                        <p class="rounded-circle border border-2 border-primary d-flex justify-content-center align-items-center"
                                                                                            style="height: 50px; width: 50px;">XLL
                                                                                        </p>
                                                                                    </li>
                                                                                </ul>
                                                                                <div class="d-grid gap-2">
                                                                                    <button class="btn btn-dark" type="button">ADD TO CART</button>
                                                                                    <button class="btn btn-primary" type="button">BUY IT NOW</button>
                                                                                </div>
                                                                            </div>
                                                                            <div class="d-none d-lg-flex col-lg-2 justify-content-start align-items-center flex-column">
                                                                                <img src="https://i.ibb.co/y6R1RNB/Z001.jpg" class="img-fluid rounded mb-4" d-flex
                                                                                    justify-content-center align-items-center style="height: 150px;">
                                                                                <img src="https://i.ibb.co/2KMkzWT/Z002.jpg" class="img-fluid rounded mb-4" d-flex
                                                                                    justify-content-center align-items-center style="height: 150px;">
                                                                                <img src="https://i.ibb.co/9v8tDh1/Z003.jpg" class="img-fluid rounded mb-4" d-flex
                                                                                    justify-content-center align-items-center style="height: 150px;">
                                                                                <p><strong>YOU MAY ALSO LIKE</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>`
    })
}