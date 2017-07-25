module.exports = { 
    lpad : function(number, digits, char) { 
        char = char | '0';
        return Array(Math.max(digits - String(number).length + 1, char)).join(char) + number;
    },
    rpad : function(number, digits, char) { 
        char = char | '0';
        return number + Array(Math.max(digits - String(number).length + 1, char)).join(char);
    },
    clearDateTime : function(dateValue) { 
        return String(dateValue).replace(/[-:]/g,'');
    }
}