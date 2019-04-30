Vue.component("greeting", {
    template: `
        <div>
            <p>大家好,我是{{name}}&nbsp;&nbsp;&nbsp;<button @click='changeName'>改名</button></p>
        </div>
    `,
    data: function () {
        return {
            name: '小明'
        }
    },
    methods:{
        changeName(){
            this.name='翔宇'
        }
    }
});
new Vue({
    el: "#vue-one",
});
new Vue({
    el: "#vue-two",
});