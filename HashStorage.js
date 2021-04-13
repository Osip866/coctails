class HashStorage {
    constructor() {
        this.obj = {};
    }
    addValue(key, value) {
        this.obj[key] = value;
    }

    getValue(recipeCoctail) {
        if (!Object.keys(this.obj).includes(recipeCoctail)) {
            return false;
        } else {
            return this.obj[recipeCoctail]
        }
    }
    deleteValue(del) {
        if (!Object.keys(this.obj).includes(del)) {
            return false;
        }
        delete this.obj[del];
        return true;
    }
    getKeys() {
        var result = Object.keys(this.obj);
        console.log(result);
        return result;
    }
}


let coctailsStorage = new HashStorage();

let ingr = document.getElementById("ingredient");
let ingridients = [];

ingr.addEventListener("change", checkValue);

function checkValue() {
    if (confirm("Есть еще ингридиенты") == true) {
        ingridients.push(ingr.value);
        ingr.value = ("");
        ingr.placeholder = ("Ингридиент и его вес")
    } else {
        ingridients.push(ingr.value);
    }
}

var div = document.getElementById("result");

function addValue2() {
    var key = document.getElementById("coctail").value;
    var alkohol;
    var alko = document.getElementsByName("alcoho")[0]
    if (alko.checked){
        alkohol = true
    }else{
        alkohol = false
    }
    var recipe = document.getElementById("comment").value;
    var value = {};
    value.alk = alkohol;
    value.ingr = ingridients;
    value.recip = recipe

    let coco = coctailsStorage.addValue(key, value);
}

function getValue2() {
    let recipeCoctail = prompt("Введите наименование напитка");
    var get = coctailsStorage.getValue(recipeCoctail);
if (get == false){
    div.textContent = null;
    div.textContent = "Такого коктейля нет в базе данных!";
}else{
    div.textContent = null;
    let h = document.createElement("h2")
    let yesNo;
    if (get.alk){
        yesNo = "Да"
    }else{yesNo = "Нет"}
    h.textContent = recipeCoctail + " (Алкогольный:" + yesNo + ")";
    div.appendChild(h);
    let ul1 = document.createElement("ul");
    for (var i = 0; i < get.ingr.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = get.ingr[i];
        ul1.appendChild(li);
    }
    div.appendChild(ul1);
    var p = document.createElement("p");
    p.textContent = get.recip;
    div.appendChild(p);
}
    
}

function getKeys2() {
    var one = coctailsStorage.getKeys();
    var ul = document.createElement("ul");
    div.textContent = null;
    for (var i = 0; i < one.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = one[i];
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

function deleteValue2() {
    let del = prompt("Какой напиток вы хотите удалить?");
    let deleten = coctailsStorage.deleteValue(del);
    div.textContent = null;
    if (deleten) {
        div.textContent = "Коктейль " + del + " удален";
    } else {
        div.textContent = "Такого коктейля нет в базе данных!";
    }

}


key = "Маргарита";
value = {
    alk: true,
    ingr: ["Водка Finlandia 50мл", "Кофейный ликер 25мл", "Лед в кубиках 120 г"],
    recip: "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой."
};
let myCoctail = coctailsStorage.addValue(key, value);

key = "Пеликан";
value = {
    alk: false,
    ingr: ["Гренадин Monin 10мл", "Клубничный сироп Monin 10мл", "Персиковый сок 150мл", "Лимонный сок 15мл", "Банан 110г", "Клубника 50г", "Дробленый лед 60г"],
    recip: "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке."
};

coctailsStorage.addValue(key, value);

key = "Молочный";
value = {
    alk: false,
    ingr: ["Молоко - 500 грамм", "Мороженое (любое) - 100 грамм", "Сахар - по вкусу"],
    recip: "Холодное молоко налейте в блендер, добавьте сахар. Добавьте мороженое по вашему вкусу. Взбивайте с помощью блендера до образования однородной массы и появления воздушных пузырьков на поверхности. Разливайте коктейль в стаканчики, подавайте и охлаждайтесь."
};

coctailsStorage.addValue(key, value);

key = "Пиранья";
value = {
    alk: true,
    ingr: ["Водка – 37 мл (6 ч. л.)", "Шоколадный ликер, коричневый – 25 мл (1,5 ст. л.)", "Кола, сильно охлажденная – 25 мл (1,5 ст. л.)"],
    recip: "Влейте спиртное в низкий стакан, заполненный большим количеством колотого льда. Хорошо размешайте. Затем добавьте колу."
};

coctailsStorage.addValue(key, value);

key = "Красный грех";
value = {
    alk: true,
    ingr: ["Черносмородиновый ликер Creme de Cassis - 40 мл", "Апельсиновый сок - 10 мл", "Красное шампанское - 300-400 мл", "Лед - 5-6 куб.", "Сахар - 100 г"],
    recip: "Смочить кромку стакана для лонгдринка апельсиновым соком или водой. Вращать смоченную кромку стакана в сахаре. Ликер и сок смешать в стакане для лонгдринка вместе с кубиками льда. Долить шампанским. Фруктовый коктейль можно подавать."
};

coctailsStorage.addValue(key, value);