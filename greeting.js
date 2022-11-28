function greet(name) {
    if(!name){ //Can I do if(!name)?
        return ('Hello there!');
    } 
    if(Array.isArray(name)){
        let names = '';
        for(let i = 0; i < name.length; i++){
            console.log(name[i])
            names += ', ' + name[i];
        }
        return 'Hello' + names;
    } 
    if(name === name.toUpperCase()){
        return ('HELLO ' + name + '!');
    } 
    else{
        return 'Hello, ' + name;
    }
};


