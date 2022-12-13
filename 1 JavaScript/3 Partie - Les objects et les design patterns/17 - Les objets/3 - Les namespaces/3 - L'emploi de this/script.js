var myNamespace = {
    test: function (){
        alert('Test');
    },
    subNamespace: {
        init: function (){
            myNamespace.test();
        }
    }
};

myNamespace.subNamespace.init();