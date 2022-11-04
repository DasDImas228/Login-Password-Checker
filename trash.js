let loginPassword = ["Vasya_Pupkin_Zalupkin", "Qqqqqw1qwqw"];
class Checker{
    checkLogin(login){return login.length >= 5;}
    checkPassword(password){
        let upperLetter = false;
        let number = false;
        for(const symbol of password){
            if(Number(symbol)) number = true;
            else if(symbol == symbol.toUpperCase()) upperLetter = true;
        }
        return password.length >=5 && upperLetter && number;
    }
}
console.log(loginPassword[0] + " == " + new Checker().checkLogin(loginPassword[0]) + "\n" + loginPassword[1] + " == "+ new Checker().checkPassword(loginPassword[1]));
if (new Checker().checkLogin(loginPassword[0]) * new Checker().checkPassword(loginPassword[1])) console.log(table = new Map().set(loginPassword[0], loginPassword[1]));
