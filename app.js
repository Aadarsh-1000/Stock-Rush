function buy() {

    window.alert("buy clicked")

    let qty = Number(document.getElementById("qty").value)

    if (qty <= 0) {
        alert("enter qty")
        return
    }

    let cost = qty * lastClose

    if (cost <= wallet) {
        wallet -= cost
        shares += qty
        alert("success")
    }

    updateUI()
}

function updateUI() {
    document.getElementById("wallet").innerText = wallet.toFixed(2)
    document.getElementById("shares").innerText = shares

    let net = wallet + (shares * lastClose)
    document.getElementById("networth").innerText = net.toFixed(2)

}

updateUI();
