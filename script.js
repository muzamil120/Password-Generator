function generatePassword() {
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()_+{}[]|:;"<>,.?/';

    var allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;

    var passwordLength = parseInt(document.getElementById("passwordLength").value);

    var password = '';

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('generatedPassword').value = password;
}
function copyPassword() {
    var generatedPassword = document.getElementById('generatedPassword');
    generatedPassword.select();
    document.execCommand('copy');
}