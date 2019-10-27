const express = require("express");
const friendsData = require("../data/friends.js");

const router = express.Router();

router.get("/api/friends", (req,res) => {
    res.json(friendsData);
});

router.post("/api/friends", (req,res) => {
    currentUser = req.body;
    let closestMatch;
    let lowestDiff = 41;
    for(const friend of friendsData) {
        let totalDiff = 0;
        for(i = 0; i < 10; i++) {
            totalDiff += Math.abs(friend.scores[i] - currentUser.scores[i]);
        }
        if(totalDiff < lowestDiff) {
            closestMatch = friend;
            lowestDiff = totalDiff;
        }
    }
    friendsData.push(currentUser);
    res.json(closestMatch);
});

module.exports = router;