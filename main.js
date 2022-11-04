const login = "Vasya_Pupkin_Zalupkin";
const password = "Qqqq2wqwqw";
table = new Map();

class Checker{
    // Checking login length
    checkLogin(login){return login.length >= 5;}
    
    // Checking password
    checkPassword(password){
        const length = password.length >=5;
        let upperLetter = false;
        let number = false;
        
        //iterate over each character in the password
        for(const symbol of password){
            // has password any numbers
            if(Number(symbol)) number = true;
            
            // has password any upper letters
            else if(symbol == symbol.toUpperCase()) upperLetter = true;
        }
        return length * upperLetter * number;
    }
}

console.log(login + " == " + new Checker().checkLogin(login));
console.log(password + " == "+ new Checker().checkPassword(password));

if (new Checker().checkLogin(login) * new Checker().checkPassword(password)) table.set(login, password);
console.log(table);
