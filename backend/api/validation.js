module.exports = app => {
    function existsOrError (value, msg){ 
        if (!value) throw msg;
        if (Array.isArray(value) && value.length === 0) throw msg; 
        if (typeof value === 'String' && !value.trim()) throw msg; 
    }

    function notExistOrError (value, msg) { 
        try{
            existsOrError(value, msg); 
        }catch(msg){
            return 
        };

        throw msg; 
    }

    function validateContainer(value, msg){
        re = /[A-Za-z]{4}[0-9]{7}$/ 

        if(re.test(value)) return 
        else throw msg; 
    }

    return { existsOrError, notExistOrError, validateContainer}
};
