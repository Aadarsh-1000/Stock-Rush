let avgPrice = 0
const unlockedAchievements = {}
const REQUIRED_UNLOCKS = 4

function getUnlockedCount() {
    return Object.keys(unlockedAchievements).length
}

function canOpenOtherLevels() {
    return getUnlockedCount() >= REQUIRED_UNLOCKS
}

function updateSidebarLinkLocks() {
    const sideLinks = document.querySelectorAll(".sinav a")
    const unlocked = canOpenOtherLevels()

    sideLinks.forEach((link) => {
        const href = link.getAttribute("href") || ""
        const isCurrentLevel = href === "index.html" || href === "./index.html"

        if (isCurrentLevel) {
            link.classList.remove("locked-link")
            return
        }

        if (unlocked) {
            link.classList.remove("locked-link")
        } else {
            link.classList.add("locked-link")
        }
    })
}

function initSidebarLinkGuard() {
    const sideLinks = document.querySelectorAll(".sinav a")

    sideLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href") || ""
            const isCurrentLevel = href === "index.html" || href === "./index.html"

            if (isCurrentLevel || canOpenOtherLevels()) {
                return
            }

            event.preventDefault()
            alert("You need to unlock 4/5 achievements to open other levels")
        })
    })

    updateSidebarLinkLocks()
}

function updateAchievementsPanel() {
    const panel = document.getElementById("achievements-panel")
    if (!panel) {
        return
    }

    const achievementRows = panel.querySelectorAll(".achievements-list li")
    achievementRows.forEach((row) => {
        const achievementId = row.getAttribute("data-achievement")
        const status = row.querySelector(".ach-status")
        const unlocked = Boolean(achievementId && unlockedAchievements[achievementId])

        row.classList.toggle("unlocked", unlocked)
        if (status) {
            status.innerText = unlocked ? "Unlocked" : "Locked"
        }
    })
}

function initAchievementsPanel() {
    const openButton = document.getElementById("achievements-open")
    const closeButton = document.getElementById("achievements-close")
    const panel = document.getElementById("achievements-panel")

    if (!openButton || !closeButton || !panel) {
        return
    }

    openButton.addEventListener("click", () => {
        panel.classList.add("open")
        panel.setAttribute("aria-hidden", "false")
    })

    closeButton.addEventListener("click", () => {
        panel.classList.remove("open")
        panel.setAttribute("aria-hidden", "true")
    })

    updateAchievementsPanel()
}

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
    get250(net)
    get500(net)
    get1000(net)
    get5000(net)
    updateSidebarLinkLocks()
    updateAchievementsPanel()


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
    showAchievement("ach1", net >= 10100)
}

function get250(net) {
    showAchievement("ach2", net >= 10250)
}

function get500(net) {
    showAchievement("ach3", net >= 10500)
}

function get1000(net) {
    showAchievement("ach4", net >= 11000)
}

function get5000(net) {
    showAchievement("ach5", net >= 15000)
}

function showAchievement(achievementId, shouldUnlock) {
    const achievement = document.getElementById(achievementId)
    if (!achievement || !shouldUnlock || unlockedAchievements[achievementId]) {
        return
    }

    unlockedAchievements[achievementId] = true
    achievement.style.display = "block"
    achievement.classList.add("show")

    setTimeout(() => {
        achievement.classList.remove("show")
        achievement.style.display = "none"
    }, 2600)

    updateSidebarLinkLocks()
    updateAchievementsPanel()
}

initSidebarLinkGuard()
initAchievementsPanel()