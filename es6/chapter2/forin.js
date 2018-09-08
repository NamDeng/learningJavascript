const player = {
    name : 'won hyung',
    rank : 'Midshipman',
    age : 29
};
for(let prop in player) {
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop + ': ' + player[prop]);
}