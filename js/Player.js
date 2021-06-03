class Player {
    constructor() {

    }
    getPlayerCount() {
        var playerCountRef = db.ref("playerCount")
        playerCountRef.on("value", function (data) {
            playerCount = data.val()
        })
    }
    updatePlayerCount(count) {
        db.ref("/").update({ playerCount: count })
    }
}