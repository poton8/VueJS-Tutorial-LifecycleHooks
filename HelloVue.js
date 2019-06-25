var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({ 
    el: '#app2',
    data: {
        message: "You are hovering over me with your mouse"
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        items:[
            {text: 'Item 1'},
            {text: 'Item 2'},
            {text: 'Item 3'}
        ]
    }
});