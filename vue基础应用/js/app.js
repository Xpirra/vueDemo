new Vue({
    el: "#app",
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
                return false;
            }
        },
        restart() {
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {},
    created : function () {
        document.onkeydown = (e) => {
            if(e.keyCode == 13){
                this.punch();
            }
        }
    }
});