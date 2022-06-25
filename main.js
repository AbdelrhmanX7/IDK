let first_value = document.querySelectorAll(".first_value");
let price = document.querySelector(".header_price");
let Full_Price = document.querySelector(".show_Result");
let get_pay = document.querySelectorAll("select");
let change_background = "";
let results = "";
let counter = 0
function Select_All(check) {
  let get_All_Radio_Btn = document.querySelectorAll('.check_radio')
  if(check.innerHTML === 'مفيش حد') {
    counter = 0
    for(let i = 0; i < get_All_Radio_Btn.length; i++) {
      try {get_All_Radio_Btn[i].removeAttribute('Dn')
      get_All_Radio_Btn[i].removeAttribute('checked')}catch{}
      if(get_All_Radio_Btn[i].value === 'فاضي') {
        get_All_Radio_Btn[i].setAttribute('checked', true)
        get_All_Radio_Btn[i].checked = true
        get_All_Radio_Btn[i].parentNode.parentNode.style.backgroundColor = "red";
        get_All_Radio_Btn[i].parentNode.parentNode.querySelectorAll("p")[1].innerHTML = "مفيش حد";
      }
    }

    for(let i = 0; i <get_All_Radio_Btn.length; i++) {
      if(get_All_Radio_Btn[i].value === 'فاضي') {
        get_All_Radio_Btn[i].setAttribute('Dn', 'check')
      }
    }

    Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;
  }else if(check.innerHTML === 'كل موجود') {
    try {get_All_Radio_Btn[i].removeAttribute('Dn')
    get_All_Radio_Btn[i].removeAttribute('checked')}catch{}
    counter = 13
    for(let i = 0; i < get_All_Radio_Btn.length; i++) {
      if(get_All_Radio_Btn[i].value === 'مدفعش') {
        get_All_Radio_Btn[i].setAttribute('checked', true)
        get_All_Radio_Btn[i].checked = true
        get_All_Radio_Btn[i].parentNode.parentNode.style.backgroundColor = "yellow";
        get_All_Radio_Btn[i].parentNode.parentNode.querySelectorAll("p")[1].innerHTML = `هيدفع: ${price.value}`;
      }
    }

    for(let i = 0; i <get_All_Radio_Btn.length; i++) {
      if(get_All_Radio_Btn[i].value === 'دفع' || get_All_Radio_Btn[i].value === 'مدفعش') {
        get_All_Radio_Btn[i].setAttribute('Dn', 'check')
      }
    }

    Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;
  }else {
    counter = 13
    for(let i = 0; i < get_All_Radio_Btn.length; i++) {
      try {get_All_Radio_Btn[i].removeAttribute('Dn')
      get_All_Radio_Btn[i].removeAttribute('checked')}catch{}
      if(get_All_Radio_Btn[i].value === 'دفع') {
        get_All_Radio_Btn[i].setAttribute('checked', true)
        get_All_Radio_Btn[i].checked = true
        get_All_Radio_Btn[i].parentNode.parentNode.style.backgroundColor = "springgreen";
        get_All_Radio_Btn[i].parentNode.parentNode.querySelectorAll("p")[1].innerHTML =  `باقي: ${
          get_All_Radio_Btn[i].parentNode.parentNode.querySelector("select").value -
          price.value
        }`;
      }
    }

    for(let i = 0; i <get_All_Radio_Btn.length; i++) {
      if(get_All_Radio_Btn[i].value === 'دفع' || get_All_Radio_Btn[i].value === 'مدفعش') {
        get_All_Radio_Btn[i].setAttribute('Dn', 'check')
      }
    }
    Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;

  }
}
function change_pay_price(click_pay) {
  let check_res = click_pay.parentNode.parentNode.querySelector(
    ".check_radio[checked]"
  );
  if (check_res.value === "دفع") {
      click_pay.nextElementSibling.innerHTML = `باقي : ${
      click_pay.value - price.value
    }`;
  } else if (check_res.value === "مدفعش") {
    click_pay.nextElementSibling.innerHTML = `هيدفع : ${price.value}`;
  }
  click_pay.blur()
}

function change_state(click_state) {
  change_background = click_state.parentNode.parentNode.style;
  results = click_state.parentNode.parentNode.querySelectorAll("p")[1];
  remove_Attr = click_state.parentNode.querySelectorAll(".check_radio");

  if (click_state.value === "فاضي") {

    if(counter > 0 && !click_state.hasAttribute('Dn')) {
      counter--
      Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;
    }

    change_background.backgroundColor = "red";
    results.innerHTML = "مفيش حد";

    for (const i in remove_Attr) {
      try {
        remove_Attr[i].removeAttribute("checked");
      } catch (error) {}
    }

    click_state.setAttribute("checked", true);

    for(let i = 0; i < remove_Attr.length; i++) {
      try {
        remove_Attr[i].removeAttribute('Dn');
      } catch (error) {}
    }

    click_state.setAttribute('Dn', 'check')
  } else if (click_state.value === "مدفعش") {
    change_background.backgroundColor = "yellow";
    results.innerHTML = `هيدفع: ${price.value}`;

    if(!click_state.hasAttribute('Dn')) {
      counter++
    }

    Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;

    for (const i in remove_Attr) {
      try {
        remove_Attr[i].removeAttribute("checked");
      } catch (error) {}
    }

    click_state.setAttribute("checked", true);

    for(let i = 0; i < remove_Attr.length; i++) {
      try {
        remove_Attr[i].removeAttribute('Dn');
      } catch (error) {}
    }

    click_state.setAttribute('Dn', 'check')
    
    remove_Attr[2].setAttribute('Dn', 'check')

  } else if (click_state.value === "دفع") {
    change_background.backgroundColor = "springgreen";
    
    if(!click_state.hasAttribute('Dn')) {
      counter++
    }

    Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;
    for (const i in remove_Attr) {
      try {
        remove_Attr[i].removeAttribute("checked");
      } catch (error) {}
    }

    click_state.setAttribute("checked", true);
    results.innerHTML = `باقي: ${
      click_state.parentNode.parentNode.querySelector("select").value -
      price.value
    }`;

    for(let i = 0; i < remove_Attr.length; i++) {
      try {
        remove_Attr[i].removeAttribute('Dn');
      } catch (error) {}
    }
    
  click_state.setAttribute('Dn', 'check')
  remove_Attr[1].setAttribute('Dn', 'check')
  }
}

for (const i in first_value) {
  first_value[i].value = price.value;
  first_value[i].innerHTML = price.value;
}

Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;

console.log(Full_Price.innerHTML);

price.addEventListener("keyup", function () {
  let checked_Values = document.querySelectorAll(".check_radio[checked]");
  counter = 0
  for (const i in first_value) {
    try {
      results =
        checked_Values[i].parentNode.parentNode.querySelectorAll("p")[1];
    } catch {}
    first_value[i].value = price.value;
    first_value[i].innerHTML = price.value;
    if (checked_Values[i].value === "دفع") {
      try {
        results.innerHTML = `باقي: ${
          checked_Values[i].parentNode.parentNode.querySelector("select")
            .value - price.value
        }`;
        counter++
      } catch (error) {}
    } else if (checked_Values[i].value === "مدفعش") {
      results.innerHTML = `هيدفع: ${price.value}`;
      counter++
    }
  }
  Full_Price.innerHTML = `الاجرة كاملة: ${price.value * counter}`;
});
