const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

function eleMaker(name,price,image,description,platform) {
    let that=this;

    this.name=name;
    this.price=price;
    this.img=image;
    this.description=description;
    this.platform=platform;

    this.ele = document.createElement("div");
    this.eleImg = document.createElement("img");
    this.platImg = document.createElement("img");
    this.elePrice = document.createElement("h2");

    this.ele.classList.add("product", this.platform);
    this.eleImg.classList.add("prdImg");
    this.platImg.classList.add("plat");
    this.elePrice.innerHTML = this.price;
    this.eleImg.src = this.img;

    if (this.platform === "playstation") {
        this.platImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
        this.ele.style.color="blue";
    } else if (this.platform === "xbox") {
        this.platImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";
        this.ele.style.color="green";
    } else if (this.platform === "switch") {
        this.platImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
        this.ele.style.color="red";
    }

    this.ele.addEventListener("click", function () {

        popUp.style.display = "flex";

        popUp.innerHTML =
            "<img src='" +that.img + "'>"
            + "<h2>" + that.name + "</h2>"
            + "<h3>" + that.price + "</h3>"
            + "<p>" + that.description + "</p>"
            + "<p>" + that.platform + "</p>";
    });

    document.body.appendChild(this.ele);
    this.ele.appendChild(this.eleImg);
    this.ele.appendChild(this.platImg);
    this.ele.appendChild(this.elePrice);

};


popUp = document.createElement("div");
popUp.classList.add("popUp");
popUp.innerHTML = "";


popUp.addEventListener("click", function () {
    popUp.style.display = "none";
    popUp.innerHTML = "";
});

document.body.appendChild(popUp);

let game=[];

for(let i=0;i<games.length;i++){
    game[i]=new eleMaker(games[i].name,games[i].price,games[i].img,games[i].description,games[i].platform);
}