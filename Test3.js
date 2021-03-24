function dropdownCart() {
    let check = document.getElementById("dropdown-cart")
    if (check.style.display == "none") {
        check.style.display = "flex"
    }
    else {
        check.style.display = "none"
    }
}

function selectPayment1() {
    let select1 = document.getElementById("paymentOption1")
    let select2 = document.getElementById("paymentOption2")
    let dot1 = document.getElementById("dot1")
    let dot2 = document.getElementById("dot2")
    if (select1.style.border == "2px solid gray") {
        select1.style.border = "2px solid blue"
        dot1.style.border = "10px solid blue"
        dot1.style.width = "8px"
        dot1.style.height = "8px"
        if (select2.style.border == "2px solid blue") {
            select2.style.border = "2px solid gray"
            dot2.style.border = "2px solid gray"
            dot2.style.width = "25px"
            dot2.style.height = "25px"
        }
    }
    else {
        select1.style.border = "2px solid gray"
        dot1.style.border = "2px solid gray"
        dot1.style.width = "25px"
        dot1.style.height = "25px"
    }
}

function selectPayment2() {
    let select1 = document.getElementById("paymentOption1")
    let select2 = document.getElementById("paymentOption2")
    let dot1 = document.getElementById("dot1")
    let dot2 = document.getElementById("dot2")
    if (select2.style.border == "2px solid gray") {
        select2.style.border = "2px solid blue"
        dot2.style.border = "10px solid blue"
        dot2.style.width = "8px"
        dot2.style.height = "8px"
        if (select1.style.border == "2px solid blue") {
            select1.style.border = "2px solid gray"
            dot1.style.border = "2px solid gray"
            dot1.style.width = "25px"
            dot1.style.height = "25px"
        }
    }
    else {
        select2.style.border = "2px solid gray"
        dot2.style.border = "2px solid gray"
        dot2.style.width = "25px"
        dot2.style.height = "25px"
    }
}

function selectPayment3() {
    let select3 = document.getElementById("paymentOption3")
    let select4 = document.getElementById("paymentOption4")
    let dot3 = document.getElementById("dot3")
    let dot4 = document.getElementById("dot4")
    if (select3.style.border == "2px solid gray") {
        select3.style.border = "2px solid blue"
        dot3.style.border = "10px solid blue"
        dot3.style.width = "8px"
        dot3.style.height = "8px"
        if (select4.style.border == "2px solid blue") {
            select4.style.border = "2px solid gray"
            dot4.style.border = "2px solid gray"
            dot4.style.width = "25px"
            dot4.style.height = "25px"
        }
    }
    else {
        select3.style.border = "2px solid gray"
        dot3.style.border = "2px solid gray"
        dot3.style.width = "25px"
        dot3.style.height = "25px"
    }
}

function selectPayment4() {
    let select3 = document.getElementById("paymentOption3")
    let select4 = document.getElementById("paymentOption4")
    let dot3 = document.getElementById("dot3")
    let dot4 = document.getElementById("dot4")
    if (select4.style.border == "2px solid gray") {
        select4.style.border = "2px solid blue"
        dot4.style.border = "10px solid blue"
        dot4.style.width = "8px"
        dot4.style.height = "8px"
        if (select3.style.border == "2px solid blue") {
            select3.style.border = "2px solid gray"
            dot3.style.border = "2px solid gray"
            dot3.style.width = "25px"
            dot3.style.height = "25px"
        }
    }
    else {
        select4.style.border = "2px solid gray"
        dot4.style.border = "2px solid gray"
        dot4.style.width = "25px"
        dot4.style.height = "25px"
    }
}
