const o = {
    name : 'won hyung',
    greetBackwards : function() {
        console.log(this); // this o
        const self = this;
        function getReverseName() {
            console.log(this); // this global...
            let nameBackwards = '';
            for(let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    }
};
console.log(o.greetBackwards());