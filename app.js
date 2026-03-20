let avgPrice = 0

function animateCost(amount, isBuy) {
    const costText = document.getElementById("c1")
    if (!costText) {
        return
    }
    const sign = isBuy ? "-" : "+"
    costText.innerText = `${sign}$${amount.toFixed(2)}`
    costText.style.color = isBuy ? "#ff5f57" : "#28c840"
    costText.classList.remove("cost-float-animate")
    void costText.offsetWidth
    costText.classList.add("cost-float-animate")
}

function animateSell(amount, isSell) {
    const costText = document.getElementById("c1")
    if (!costText) {
        return
    }
    const sign = isSell ? "-" : "+"
    costText.innerText = `+${amount.toFixed(2)}`
    costText.style.color = "#28c840"
    costText.classList.remove("sell-float-animate")
    void costText.offsetWidth
    costText.classList.add("sell-float-animate")
}

function buy() {




    let qty = Number(document.getElementById("qty").value)

    if (qty <= 0) {
        alert("enter qty")
        return
    }
    let cost = qty * lastClose

    if (cost <= wallet) {
        const totalSharesBefore = shares
        wallet -= cost
        shares += qty

        avgPrice = ((totalSharesBefore * avgPrice) + (qty * lastClose)) / shares
        animateCost(cost, true)

    } else {
        alert("Not enough wallet")
    }


    updateUI()

}
let net = wallet + (shares * lastClose)
function updateUI() {
    document.getElementById("wallet").innerText = wallet.toFixed(2)
    document.getElementById("shares").innerText = shares
    let net = wallet + (shares * lastClose)
    document.getElementById("networth").innerText = net.toFixed(2)

    pORl()
    get100(net)


}
updateUI();
function pORl() {
    const pl = shares * (lastClose - avgPrice)
    const plValue = document.getElementById("pl")

    plValue.innerText = pl.toFixed(2)
    if (pl > 0) {
        plValue.style.color = "#28c840"
    } else if (pl < 0) {
        plValue.style.color = "#ff5f57"
    } else {
        plValue.style.color = "#febc2e"
    }

}
pORl()

function get100(net) {
    const achievement = document.getElementById("ach1")
    if (!achievement) {
        return
    }

    if (net >= 10100) {
        achievement.style.display = "block"
    }


}

get100()
