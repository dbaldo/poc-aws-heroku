module.exports = { 
    lpad : function(number, digits, char) { 
        var padding = Array(digits).join(char);
        return (padding + number).slice(-digits);
    },
    rpad : function(number, digits, char) { 
        var padding = Array(digits).join(char);
        return (number + padding).slice(0, digits);
    },
    clearDateTime : function(dateValue) { 
        return String(dateValue).replace(/[-:]/g,'');
    }
}