var amount;
account = new Account(55);

function deposit() {
    amount = prompt("Please insert amount to deposit");

    account.deposit(parseInt(amount));

    console.log(account.balance);
    



}
function withdraw() {
    amount = prompt("Please insert amount to withdraw");
    account.withdraw(parseInt(amount));
    console.log(account.balance);


}
function balance() {
    console.log(account.balance);


}