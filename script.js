let btns1 = document.getElementById('btns1');
let btns2 = document.getElementById('btns2');
let btns3 = document.getElementById('btns3');
let btns4 = document.getElementById('btns4');
let btns5 = document.getElementById('btns5');
let btns6 = document.getElementById('btns6');
let btns7 = document.getElementById('btns7');
let btnAll = document.getElementById('btnsAll');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');

let xs1 = document.getElementById('xs1');
let xs2 = document.getElementById('xs2');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');
let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let ml1 = document.getElementById('ml1');
let ml2 = document.getElementById('ml2');
let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let xl1 = document.getElementById('xl1');
let xl2 = document.getElementById('xl2');
let xxl1 = document.getElementById('xxl1');
let xxl2 = document.getElementById('xxl2');

let cart1=document.getElementById('cart1');
let cart2=document.getElementById('cart2');
let cart3=document.getElementById('cart3');
let cart4=document.getElementById('cart4');
let cart5=document.getElementById('cart5');
let cart6=document.getElementById('cart6');
let cart7=document.getElementById('cart7');
let cart8=document.getElementById('cart8');
let cart9=document.getElementById('cart9');
let cart10=document.getElementById('cart10');
let cart11=document.getElementById('cart11');
let cart12=document.getElementById('cart12');
let cart13=document.getElementById('cart13');
let cart14=document.getElementById('cart14');

let card1=document.getElementById('card1');
let card2=document.getElementById('card2');
let card3=document.getElementById('card3');
let card4=document.getElementById('card4');
let card5=document.getElementById('card5');
let card6=document.getElementById('card6');
let card7=document.getElementById('card7');
let card8=document.getElementById('card8');
let card9=document.getElementById('card9');
let card10=document.getElementById('card10');
let card11=document.getElementById('card11');
let card12=document.getElementById('card12');
let card13=document.getElementById('card13');
let card14=document.getElementById('card14');

let price1=document.getElementById('price1');
let price2=document.getElementById('price2');
let price3=document.getElementById('price3');
let price4=document.getElementById('price4');
let price5=document.getElementById('price5');
let price6=document.getElementById('price6');
let price7=document.getElementById('price7');
let price8=document.getElementById('price8');
let price9=document.getElementById('price9');
let price10=document.getElementById('price10');
let price11=document.getElementById('price11');
let price12=document.getElementById('price12');
let price13=document.getElementById('price13');
let price14=document.getElementById('price14');

let qnt1=document.getElementById('qnt1');
let qnt2=document.getElementById('qnt2');
let qnt3=document.getElementById('qnt3');
let qnt4=document.getElementById('qnt4');
let qnt5=document.getElementById('qnt5');
let qnt6=document.getElementById('qnt6');
let qnt7=document.getElementById('qnt7');
let qnt8=document.getElementById('qnt8');
let qnt9=document.getElementById('qnt9');
let qnt10=document.getElementById('qnt10');
let qnt11=document.getElementById('qnt11');
let qnt12=document.getElementById('qnt12');
let qnt13=document.getElementById('qnt13');
let qnt14=document.getElementById('qnt14');


let cntOrd=document.getElementById('cntOrd');
let totValue=document.getElementById('tot');

btns1.addEventListener("click", forBtns1);
btns2.addEventListener("click", forBtns2);
btns3.addEventListener("click", forBtns3);
btns4.addEventListener("click", forBtns4);
btns5.addEventListener("click", forBtns5);
btns6.addEventListener("click", forBtns6);
btns7.addEventListener("click", forBtns7);
btnAll.addEventListener("click", forAll);

cart1.addEventListener("click",showCard1);
cart2.addEventListener("click",showCard2);
cart3.addEventListener("click",showCard3);
cart4.addEventListener("click",showCard4);
cart5.addEventListener("click",showCard5);
cart6.addEventListener("click",showCard6);
cart7.addEventListener("click",showCard7);
cart8.addEventListener("click",showCard8);
cart9.addEventListener("click",showCard9);
cart10.addEventListener("click",showCard10);
cart11.addEventListener("click",showCard11);
cart12.addEventListener("click",showCard12);
cart13.addEventListener("click",showCard13);
cart14.addEventListener("click",showCard14);
// cart1.addEventListener("click",showCard1);

let cardOrd=0;
let tot_Value=0;

let price_1=0;
let price_2=0;
let price_3=0;
let price_4=0;
let price_5=0;
let price_6=0;
let price_7=0;
let price_8=0;
let price_9=0;
let price_10=0;
let price_11=0;
let price_12=0;
let price_13=0;
let price_14=0;

let qnt_1=0;
let qnt_2=0;
let qnt_3=0;
let qnt_4=0;
let qnt_5=0;
let qnt_6=0;
let qnt_7=0;
let qnt_8=0;
let qnt_9=0;
let qnt_10=0;
let qnt_11=0;
let qnt_12=0;
let qnt_13=0;
let qnt_14=0;

function forBtns1() {
    if (btns1.checked == true) {
        xs1.style.display = "block";
        xs2.style.display = "block";
        s1.style.display = "none";
        s2.style.display = "none";
        m1.style.display = "none"
        m2.style.display = "none"
        ml1.style.display = "none"
        ml2.style.display = "none"
        l1.style.display = "none"
        l2.style.display = "none"
        xl1.style.display = "none"
        xl2.style.display = "none"
        xxl1.style.display = "none"
        xxl2.style.display = "none"


        btn1.style.backgroundColor = "black"
        btn1.style.color = "white"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"

        if (btns2.checked == true) {
            s1.style.display = "block";
            s2.style.display = "block";
            btn2.style.backgroundColor = "black"
            btn2.style.color = "white"
        }
        if (btns3.checked == true) {
            m1.style.display = "block";
            m2.style.display = "block";
            btn3.style.backgroundColor = "black"
            btn3.style.color = "white"
        }
        if (btns4.checked == true) {
            ml1.style.display = "block";
            ml2.style.display = "block";
            btn4.style.backgroundColor = "black"
            btn4.style.color = "white"
        }
        if (btns5.checked == true) {
            l1.style.display = "block";
            l2.style.display = "block";
            btn5.style.backgroundColor = "black"
            btn5.style.color = "white"
        }
        if (btns6.checked == true) {
            xl1.style.display = "block";
            xl2.style.display = "block";
            btn6.style.backgroundColor = "black"
            btn6.style.color = "white"
        }
        if (btns7.checked == true) {
            xxl1.style.display = "block";
            xxl2.style.display = "block";
            btn7.style.backgroundColor = "black"
            btn7.style.color = "white"
        }
        if (btnAll.checked == true) {
            console.log("ok")
            btnAll.click();
        }
    }
    else {
        xs1.style.display = "none";
        xs2.style.display = "none";
        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"

        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
}

function forBtns2() {
    if (btns2.checked == true) {
        xs1.style.display = "none";
        xs2.style.display = "none";
        s1.style.display = "block";
        s2.style.display = "block";
        m1.style.display = "none"
        m2.style.display = "none"
        ml1.style.display = "none"
        ml2.style.display = "none"
        l1.style.display = "none"
        l2.style.display = "none"
        xl1.style.display = "none"
        xl2.style.display = "none"
        xxl1.style.display = "none"
        xxl2.style.display = "none"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "black"
        btn2.style.color = "white"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"

        if (btns1.checked == true) {
            xs1.style.display = "block";
            xs2.style.display = "block";
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
        }
        if (btns3.checked == true) {
            m1.style.display = "block";
            m2.style.display = "block";
            btn3.style.backgroundColor = "black"
            btn3.style.color = "white"
        }
        if (btns4.checked == true) {
            ml1.style.display = "block";
            ml2.style.display = "block";
            btn4.style.backgroundColor = "black"
            btn4.style.color = "white"
        }
        if (btns5.checked == true) {
            l1.style.display = "block";
            l2.style.display = "block";
            btn5.style.backgroundColor = "black"
            btn5.style.color = "white"
        }
        if (btns6.checked == true) {
            xl1.style.display = "block";
            xl2.style.display = "block";
            btn6.style.backgroundColor = "black"
            btn6.style.color = "white"
        }
        if (btns7.checked == true) {
            xxl1.style.display = "block";
            xxl2.style.display = "block";
            btn7.style.backgroundColor = "black"
            btn7.style.color = "white"
        }
        if (btnAll.checked == true) {
            btnAll.click();
        }
    }
    else {
        s1.style.display = "none";
        s2.style.display = "none";
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
}

function forBtns3() {
    if (btns3.checked == true) {
        xs1.style.display = "none";
        xs2.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        m1.style.display = "block"
        m2.style.display = "block"
        ml1.style.display = "none"
        ml2.style.display = "none"
        l1.style.display = "none"
        l2.style.display = "none"
        xl1.style.display = "none"
        xl2.style.display = "none"
        xxl1.style.display = "none"
        xxl2.style.display = "none"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "black"
        btn3.style.color = "white"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"

        if (btns1.checked == true) {
            xs1.style.display = "block";
            xs2.style.display = "block";
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
        }
        if (btns2.checked == true) {
            s1.style.display = "block";
            s2.style.display = "block";
            btn2.style.backgroundColor = "black"
            btn2.style.color = "white"
        }
        if (btns4.checked == true) {
            ml1.style.display = "block";
            ml2.style.display = "block";
            btn4.style.backgroundColor = "black"
            btn4.style.color = "white"
        }
        if (btns5.checked == true) {
            l1.style.display = "block";
            l2.style.display = "block";
            btn5.style.backgroundColor = "black"
            btn5.style.color = "white"
        }
        if (btns6.checked == true) {
            xl1.style.display = "block";
            xl2.style.display = "block";
            btn6.style.backgroundColor = "black"
            btn6.style.color = "white"
        }
        if (btns7.checked == true) {
            xxl1.style.display = "block";
            xxl2.style.display = "block";
            btn7.style.backgroundColor = "black"
            btn7.style.color = "white"
        }
        if (btnAll.checked == true) {
            btnAll.click();
        }
    }
    else {
        m1.style.display = "none"
        m2.style.display = "none"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
}

function forBtns4() {
    if (btns4.checked == true) {
        xs1.style.display = "none";
        xs2.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        m1.style.display = "none"
        m2.style.display = "none"
        ml1.style.display = "block"
        ml2.style.display = "block"
        l1.style.display = "none"
        l2.style.display = "none"
        xl1.style.display = "none"
        xl2.style.display = "none"
        xxl1.style.display = "none"
        xxl2.style.display = "none"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "black"
        btn4.style.color = "white"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"

        if (btns1.checked == true) {
            xs1.style.display = "block";
            xs2.style.display = "block";
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
        }
        if (btns2.checked == true) {
            s1.style.display = "block";
            s2.style.display = "block";
            btn2.style.backgroundColor = "black"
            btn2.style.color = "white"
        }
        if (btns3.checked == true) {
            m1.style.display = "block";
            m2.style.display = "block";
            btn3.style.backgroundColor = "black"
            btn3.style.color = "white"
        }
        if (btns5.checked == true) {
            l1.style.display = "block";
            l2.style.display = "block";
            btn5.style.backgroundColor = "black"
            btn5.style.color = "white"
        }
        if (btns6.checked == true) {
            xl1.style.display = "block";
            xl2.style.display = "block";
            btn6.style.backgroundColor = "black"
            btn6.style.color = "white"
        }
        if (btns7.checked == true) {
            xxl1.style.display = "block";
            xxl2.style.display = "block";
            btn7.style.backgroundColor = "black"
            btn7.style.color = "white"
        }
        if (btnAll.checked == true) {
            btnAll.click();
        }
    }
    else {
        ml1.style.display = "none"
        ml2.style.display = "none"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
}

function forBtns5() {
    if (btns5.checked == true) {
        xs1.style.display = "none";
        xs2.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        m1.style.display = "none"
        m2.style.display = "none"
        ml1.style.display = "none"
        ml2.style.display = "none"
        l1.style.display = "block"
        l2.style.display = "block"
        xl1.style.display = "none"
        xl2.style.display = "none"
        xxl1.style.display = "none"
        xxl2.style.display = "none"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "black"
        btn5.style.color = "white"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"

        if (btns1.checked == true) {
            xs1.style.display = "block";
            xs2.style.display = "block";
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
        }
        if (btns2.checked == true) {
            s1.style.display = "block";
            s2.style.display = "block";
            btn2.style.backgroundColor = "black"
            btn2.style.color = "white"
        }
        if (btns3.checked == true) {
            m1.style.display = "block";
            m2.style.display = "block";
            btn3.style.backgroundColor = "black"
            btn3.style.color = "white"
        }
        if (btns4.checked == true) {
            ml1.style.display = "block";
            ml2.style.display = "block";
            btn4.style.backgroundColor = "black"
            btn4.style.color = "white"
        }
        if (btns6.checked == true) {
            xl1.style.display = "block";
            xl2.style.display = "block";
            btn6.style.backgroundColor = "black"
            btn6.style.color = "white"
        }
        if (btns7.checked == true) {
            xxl1.style.display = "block";
            xxl2.style.display = "block";
            btn7.style.backgroundColor = "black"
            btn7.style.color = "white"
            
        }
        if (btnAll.checked == true) {
            btnAll.click();
        }
    }
    else {
        l1.style.display = "none"
        l2.style.display = "none"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
    
}

function forBtns6() {
    if (btns6.checked == true) {
        xs1.style.display = "none";
        xs2.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        m1.style.display = "none"
        m2.style.display = "none"
        ml1.style.display = "none"
        ml2.style.display = "none"
        l1.style.display = "none"
        l2.style.display = "none"
        xl1.style.display = "block"
        xl2.style.display = "block"
        xxl1.style.display = "none"
        xxl2.style.display = "none"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "black"
        btn6.style.color = "white"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"

        if (btns1.checked == true) {
            xs1.style.display = "block";
            xs2.style.display = "block";
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
        }
        if (btns2.checked == true) {
            s1.style.display = "block";
            s2.style.display = "block";
            btn2.style.backgroundColor = "black"
            btn2.style.color = "white"
        }
        if (btns3.checked == true) {
            m1.style.display = "block";
            m2.style.display = "block";
            btn3.style.backgroundColor = "black"
            btn3.style.color = "white"
        }
        if (btns4.checked == true) {
            ml1.style.display = "block";
            ml2.style.display = "block";
            btn4.style.backgroundColor = "black"
            btn4.style.color = "white"
        }
        if (btns5.checked == true) {
            l1.style.display = "block";
            l2.style.display = "block";
            btn5.style.backgroundColor = "black"
            btn5.style.color = "white"
        }
        if (btns7.checked == true) {
            xxl1.style.display = "block";
            xxl2.style.display = "block";
            btn7.style.backgroundColor = "black"
            btn7.style.color = "white"
        }
        if (btnAll.checked == true) {
            btnAll.click();
        }
    }
    else {
        xl1.style.display = "none"
        xl2.style.display = "none"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
}

function forBtns7() {
    if (btns7.checked == true) {
        xs1.style.display = "none";
        xs2.style.display = "none";
        s1.style.display = "none";
        s2.style.display = "none";
        m1.style.display = "none"
        m2.style.display = "none"
        ml1.style.display = "none"
        ml2.style.display = "none"
        l1.style.display = "none"
        l2.style.display = "none"
        xl1.style.display = "none"
        xl2.style.display = "none"
        xxl1.style.display = "block"
        xxl2.style.display = "block"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "black"
        btn7.style.color = "white"

        if (btns1.checked == true) {
            xs1.style.display = "block";
            xs2.style.display = "block";
            btn1.style.backgroundColor = "black"
            btn1.style.color = "white"
        }
        if (btns2.checked == true) {
            s1.style.display = "block";
            s2.style.display = "block";
            btn2.style.backgroundColor = "black"
            btn2.style.color = "white"
        }
        if (btns3.checked == true) {
            m1.style.display = "block";
            m2.style.display = "block";
            btn3.style.backgroundColor = "black"
            btn3.style.color = "white"
        }
        if (btns4.checked == true) {
            ml1.style.display = "block";
            ml2.style.display = "block";
            btn4.style.backgroundColor = "black"
            btn4.style.color = "white"
        }
        if (btns5.checked == true) {
            l1.style.display = "block";
            l2.style.display = "block";
            btn5.style.backgroundColor = "black"
            btn5.style.color = "white"
        }
        if (btns6.checked == true) {
            xl1.style.display = "block";
            xl2.style.display = "block";
            btn6.style.backgroundColor = "black"
            btn6.style.color = "white"
        }
        if (btnAll.checked == true) {
            btnAll.click();
        }
    }
    else {
        xxl1.style.display = "none"
        xxl2.style.display = "none"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"
        if(btns1.checked==false && btns2.checked==false && btns3.checked==false && btns4.checked==false && btns5.checked==false && btns6.checked==false && btns7.checked==false )
        {
            btnAll.click();
        }
    }
}

function forAll() {
    if (btnAll.checked == true) {
        xs1.style.display = "block";
        xs2.style.display = "block";
        s1.style.display = "block";
        s2.style.display = "block";
        m1.style.display = "block"
        m2.style.display = "block"
        ml1.style.display = "block"
        ml2.style.display = "block"
        l1.style.display = "block"
        l2.style.display = "block"
        xl1.style.display = "block"
        xl2.style.display = "block"
        xxl1.style.display = "block"
        xxl2.style.display = "block"


        btn1.style.backgroundColor = "#a4a3a3"
        btn1.style.color = "black"
        btn2.style.backgroundColor = "#a4a3a3"
        btn2.style.color = "black"
        btn3.style.backgroundColor = "#a4a3a3"
        btn3.style.color = "black"
        btn4.style.backgroundColor = "#a4a3a3"
        btn4.style.color = "black"
        btn5.style.backgroundColor = "#a4a3a3"
        btn5.style.color = "black"
        btn6.style.backgroundColor = "#a4a3a3"
        btn6.style.color = "black"
        btn7.style.backgroundColor = "#a4a3a3"
        btn7.style.color = "black"
    }
}

function showCard1(){
    
    console.log("ok")
    card1.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_1+=1;
    price_1+=2000;
    qnt1.innerHTML=qnt_1;
    price1.innerHTML=price_1;

    tot_Value+=price_1;
    totValue.innerHTML=tot_Value;

}

function showCard2(){
    console.log("ok")
    card2.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_2+=1;
    price_2+=1500;
    qnt2.innerHTML=qnt_2;
    price2.innerHTML=price_2;
    
    tot_Value+=price_2;
    totValue.innerHTML=tot_Value;
}

function showCard3(){
    console.log("ok")
    card3.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_3+=1;
    price_3+=231;
    qnt3.innerHTML=qnt_3;
    price3.innerHTML=price_3;
    
    tot_Value+=price_3;
    totValue.innerHTML=tot_Value;
}

function showCard4(){
    console.log("ok")
    card4.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_4+=1;
    price_4+=699;
    qnt4.innerHTML=qnt_4;
    price4.innerHTML=price_4;
    
    tot_Value+=price_4;
    totValue.innerHTML=tot_Value;
}

function showCard5(){
    console.log("ok")
    card5.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_5+=1;
    price_5+=299;
    qnt5.innerHTML=qnt_5;
    price5.innerHTML=price_5;
    
    tot_Value+=price_5;
    totValue.innerHTML=tot_Value;
}

function showCard6(){
    console.log("ok")
    card6.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_6+=1;
    price_6+=759;
    qnt6.innerHTML=qnt_6;
    price6.innerHTML=price_6;
    
    tot_Value+=price_6;
    totValue.innerHTML=tot_Value;
}

function showCard7(){
    console.log("ok")
    card7.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_7+=1;
    price_7+=559;
    qnt7.innerHTML=qnt_7;
    price7.innerHTML=price_7;
    
    tot_Value+=price_7;
    totValue.innerHTML=tot_Value;
}

function showCard8(){
    console.log("ok")
    card8.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_8+=1;
    price_8+=867;
    qnt8.innerHTML=qnt_8;
    price8.innerHTML=price_8;
    
    tot_Value+=price_8;
    totValue.innerHTML=tot_Value;
}

function showCard9(){
    console.log("ok")
    card9.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_9+=1;
    price_9+=529;
    qnt9.innerHTML=qnt_9;
    price9.innerHTML=price_9;
    
    tot_Value+=price_9;
    totValue.innerHTML=tot_Value;
}

function showCard10(){
    console.log("ok")
    card10.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_10+=1;
    price_10+=719;
    qnt10.innerHTML=qnt_10;
    price10.innerHTML=price_10;
    
    tot_Value+=price_10;
    totValue.innerHTML=tot_Value;
}

function showCard11(){
    console.log("ok")
    card11.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_11+=1;
    price_11+=399;
    qnt11.innerHTML=qnt_11;
    price11.innerHTML=price_11;
    
    tot_Value+=price_11;
    totValue.innerHTML=tot_Value;
}

function showCard12(){
    console.log("ok")
    card12.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_12+=1;
    price_12+=354;
    qnt12.innerHTML=qnt_12;
    price12.innerHTML=price_12;
    
    tot_Value+=price_12;
    totValue.innerHTML=tot_Value;
}

function showCard13(){
    console.log("ok")
    card13.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_13+=1;
    price_13+=388;
    qnt13.innerHTML=qnt_13;
    price13.innerHTML=price_13;
    
    tot_Value+=price_13;
    totValue.innerHTML=tot_Value;
}

function showCard14(){
    console.log("ok")
    card14.style.display="block"
    cardOrd+=1;
    cntOrd.innerHTML=cardOrd;

    qnt_14+=1;
    price_14+=669;
    qnt14.innerHTML=qnt_14;
    price14.innerHTML=price_14;
    
    tot_Value+=price_14;
    totValue.innerHTML=tot_Value;
}