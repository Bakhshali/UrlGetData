fetch("https://jsonplaceholder.typicode.com/photos")


    .then((resp) => resp.json())
    .then((data) => {

        let container = document.querySelector(".container")
        console.log(container);
        let row = document.createElement("div")
        row.className = "row justify-content-between mt-5"

        for (let i = 0; i < data.length - 4952; i++) {


            let card = document.createElement("div");
            let forimg = document.createElement("div")
            let images = document.createElement("img")
            let card_body = document.createElement("div");
            let title = document.createElement("h5");
            let text = document.createElement("p");
            let body_link = document.createElement("div")
            let link = document.createElement("a");

            card.className = "card mt-5 ";
            card.style.width = "18rem";
            forimg.className = "colour-img d-flex"
            images.className = "card-img-top mt-2"
            images.style.width = "150px"
            card_body.className = "card-body";
            title.className = "card-title";
            text.className = "card-text";
            body_link.className = "card-body-link"
            link.className = "card-link btn btn-danger";
            link.innerText = "Click here"

            images.src = data[i].url;
            title.innerText = data[i].id;
            text.innerText = data[i].title;
            link.href = `detail.html?params=${data[i].id}`

            forimg.appendChild(images);
            card_body.appendChild(title);
            card_body.appendChild(text);
            body_link.appendChild(link);
            card.appendChild(forimg)
            card.appendChild(card_body);
            card.appendChild(body_link);
            row.appendChild(card);

        }
        container.appendChild(row)

    })