const login = "Vasya_Pupkin_Zalupkin";
const password = "Qqqqwqwqw";
table = new Map();

class Checker{
    checkLogin(login){return login.length >= 5;}
    
    checkPassword(password){
        let firstProverka = false;
        let secondProverka = false;
        
        for(const i of password){
            if(Number(i))firstProverka = true;
            
            else if(i == i.toUpperCase()) secondProverka = true;
        }
        return (password.length >=5 && firstProverka && secondProverka);
    }
}

console.log(login + " == " + new Checker().checkLogin(login));
console.log(password + " == "+ new Checker().checkPassword(password));

if (new Checker().checkLogin(login) * new Checker().checkPassword(password)) table.set(login, password);

console.log(table);
