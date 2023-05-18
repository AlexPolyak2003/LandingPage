function empty(val) {
    return ((typeof(val) === 'undefined') || (val === '') || (val === 0) || (val === null) || (val === false) || (Array.isArray && Array.isArray(val) && val.length == 0));
}

function log(){
    //var funcObj = arguments.callee;
    //console.log(this.constructor.name);
    var prefix = (!empty(this.name)) ? this.name+': ' : '';
    for (var i=0; i<arguments.length; i++) {
        if (!empty(prefix)) console.log(prefix+arguments[i]);
        else console.log(arguments[i]);
    }
}