let params = (new URL(document.location)).searchParams;
let url = params.get("params");

let container = document.querySelector(".container");

fetch(`https://jsonplaceholder.typicode.com/photos/${url}`)
    .then((resp) => resp.json())
    .then((dts) => {

        let row = document.createElement("div");
        let basket = document.createElement("div");
        let basket_icon = document.createElement("i");
        let sup = document.createElement("sup");
        let resp_col_six = document.createElement("div");
        let images_class = document.createElement("div");
        let images = document.createElement("img");
        let resp_second_col_ = document.createElement("div");
        let content = document.createElement("div");
        let title = document.createElement("div");
        let common_good = document.createElement("p");
        let text = document.createElement("h1");
        let icons_star_class = document.createElement("div");
        let firs_ul = document.createElement("ul");

        for (let i = 0; i < 5; i++) {
            let first_li = document.createElement("li");
            firs_ul.appendChild(first_li);

            let icons_star = document.createElement("i")
            first_li.appendChild(icons_star);
            icons_star.className = "fa-solid fa-star";
        }

        let span = document.createElement("span");
        let p = document.createElement("p")
        let price = document.createElement("div");
        let h3 = document.createElement("h3");
        let size = document.createElement("div");
        let icon_image = document.createElement("i");
        let chart = document.createElement("span");
        let infos = document.createElement("div");
        let left = document.createElement("div");
        let second_ul = document.createElement("ul");
       for (let i = 0; i < 4; i++) {
            let second_li = document.createElement("li");
            second_ul.appendChild(second_li);
            second_li.innerText = "Brand:"
       }


        let right = document.createElement("div");
       let third_ul = document.createElement("ul")
       for (let i = 0; i < 4; i++) {
        let third_li = document.createElement("li");
        third_ul.appendChild(third_li);
        third_li.innerText = "Marka"
           
       }
        
        let hr = document.createElement("hr");
        let quatity = document.createElement("div");
        let p_quati = document.createElement("p");
        let input = document.createElement("input");
        let buttons = document.createElement("div");
        let btn1 = document.createElement("button");

        btn1.addEventListener("click",function(){
            console.log("test");
        })
        let btn2 = document.createElement("button");


        row.className = "row mt-5";
        basket.className = "basket";
        basket_icon.className = "fa-solid fa-basket-shopping";
        resp_col_six.className = "col-lg-6";
        images_class.className = "images";
        resp_second_col_.className = "col-lg-6";
        content.className = "content";
        title.className = "title";
        icons_star_class.className = "icons mt-4";
        firs_ul.className = "d-flex";

        price.className = "price";
        size.className = "size";
        icon_image.className = "fa-regular fa-image";
        infos.className = "infos mt-4 d-flex";
        left.className = "left";
        right.className = "right";
        quatity.className = "quatity";
        input.type = "number";
        input.min = "1";
        input.max = "50";
        input.placeholder = "1";
        buttons.className = "buttons mt-5";
        btn1.className = "btn btn-warning btn-lg";
        btn2.className = "btn btn-info btn-lg";


        row.appendChild(basket);
        row.appendChild(resp_col_six);
        row.appendChild(resp_second_col_);

        basket.appendChild(basket_icon);
        basket_icon.appendChild(sup);
        sup.innerText = "0";
        resp_col_six.appendChild(images_class);
        images_class.appendChild(images);
        images.src = dts.url
        resp_second_col_.appendChild(content);
        content.appendChild(title);
        title.appendChild(common_good);
        common_good.innerText = " Common Good"
        title.appendChild(text);


        text.innerText = dts.title;


        content.appendChild(icons_star_class);
        icons_star_class.appendChild(firs_ul);
        firs_ul.appendChild(span);
        span.innerText = "(No reviews yet)";
        firs_ul.appendChild(p);
        p.innerText = "Write a Review";
        content.appendChild(price);
        price.appendChild(h3);


        h3.innerText = dts.id;
        


        content.appendChild(size);
        size.appendChild(icon_image);
        icon_image.appendChild(chart);
        chart.innerText = "Size Chart";
        content.appendChild(infos);
        infos.appendChild(left);
        left.appendChild(second_ul);
        infos.appendChild(right);
        right.appendChild(third_ul);
        infos.appendChild(hr);
        content.appendChild(quatity);
        quatity.appendChild(p_quati);
        p_quati.innerText = "Quantity:";
        quatity.appendChild(input);
        content.appendChild(buttons);
        buttons.appendChild(btn1);
        btn1.innerText = "Add to card"
        buttons.appendChild(btn2);
        btn2.innerText = "Add to Wish List"
        







        console.log(container);
        container.append(row)
    })