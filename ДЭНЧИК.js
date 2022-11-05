login = 'nazivay_menya_korol';
password = 'Dima4';
let data = new Map();

String.prototype.valid_login = function() {
  if (this.length > 4){
    return this;
  }

  else{
    return false;
  }
};

String.prototype.valid_password = function() {
  let upperLetter = false;
  let number_in_password = false;
  for (let i = 0; i <= this.length-1; i++){
    if (String(this[i]) == String(this[i]).toUpperCase() && isNaN(this[i])){
      upperLetter = true;
    }

    if (isNaN(this[i]) == false){
      number_in_password = true;
    }
  }

  if (upperLetter && number_in_password && this.length > 4){
    return this
  }

  else{
    return false;
  }
};

valid_login = login.valid_login();
valid_pas = password.valid_password();

if (valid_login != false && valid_pas != false){
  data.set('login', valid_login);
  data.set('password', valid_pas);
  console.log("Ваш логин: " + data.get('login'));
  console.log("Ваш пароль: " + data.get('password'));
}

else{
  console.log("Неверно указаны данные");
}
