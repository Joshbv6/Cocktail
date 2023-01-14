var cssId = 'css';  // you could encode the css path itself to generate id..
var width = screen.width;
        if (!document.getElementById(cssId))
        {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            if(width < 1260 && width > 480){
                link.href = 'cocktaillaptop.css';
            } else if(width < 480) {
                link.href = 'cocktailmobile.css';
            } else if(width > 1260) {
                link.href = 'cocktailpc.css'
            }
            head.appendChild(link);
        }


function black() {
        var off = new XMLHttpRequest();
        off.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php");
        off.send();
        off.onload = () => {
            if(off.status === 200){
                let cocktail = JSON.parse(off.response);
                console.log(off.response);
                document.getElementById("name").innerHTML = cocktail.drinks[0].strDrink;
                document.getElementById("cocktail").src = cocktail.drinks[0].strDrinkThumb.concat("/preview");
                document.getElementById("inst").innerHTML = cocktail.drinks[0].strInstructions;
                document.getElementById("ing1").innerHTML = cocktail.drinks[0].strIngredient1;
                document.getElementById("ing2").innerHTML = cocktail.drinks[0].strIngredient2;
                document.getElementById("ing3").innerHTML = cocktail.drinks[0].strIngredient3;
                document.getElementById("ing4").innerHTML = cocktail.drinks[0].strIngredient4;
                document.getElementById("ing5").innerHTML = cocktail.drinks[0].strIngredient5;
                document.getElementById("ing6").innerHTML = cocktail.drinks[0].strIngredient6;
                document.getElementById("img1").src = "http://www.thecocktaildb.com/images/ingredients/".concat(cocktail.drinks[0].strIngredient1).concat("-Small.png");
                document.getElementById("img2").src = "http://www.thecocktaildb.com/images/ingredients/".concat(cocktail.drinks[0].strIngredient2).concat("-Small.png");
                document.getElementById("img3").src = "http://www.thecocktaildb.com/images/ingredients/".concat(cocktail.drinks[0].strIngredient3).concat("-Small.png");
                document.getElementById("img4").src = "http://www.thecocktaildb.com/images/ingredients/".concat(cocktail.drinks[0].strIngredient4).concat("-Small.png");
                document.getElementById("img5").src = "http://www.thecocktaildb.com/images/ingredients/".concat(cocktail.drinks[0].strIngredient5).concat("-Small.png");
                document.getElementById("img6").src = "http://www.thecocktaildb.com/images/ingredients/".concat(cocktail.drinks[0].strIngredient6).concat("-Small.png");
                document.getElementById("fluid").style = "margin-top: 0px;";
                document.getElementById("botonini").style = "display: none;";
                document.getElementById("nav").style = "display: block;";
                document.getElementById("info").style = "display: block;";
                document.getElementById("cocktail").style = "display: block;";
                document.getElementById("boton").addEventListener("mousedown",function(event) {
                    document.getElementById("boton").innerHTML = "Preparing...";
                })
                document.getElementById("boton").innerHTML = "Other Cocktail";
            } else {
                console.log(`error ${off.status} ${off.statusText}`);
            }
        }
    //DOCUMENTACION https://www.thecocktaildb.com/api.php
}
