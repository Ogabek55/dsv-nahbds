function checkAge(age) {
    if ( age > 18) {
        return true;
    } else {
        return confirm (" Ota onagiz sizga ruhsat berishadimi? ");
    }

}
var name = prompt(" Ismingiz nima?");
var surname = prompt(" Familyangiz nima?");
var age = prompt(" Yoshingizni kiriting? ( 18 yoshdan yuqorisiga ruhsat beriladi)");
if ( checkAge(age)) {
    alert(" Ruxsat berildi ");
} else {
    alert(" Ruxsat berilmadi ");
}
console.log(` Sizning ismingiz ${name}`);
console.log( ` Sizning yamilyangiz ${surname}`);
console.log(` Sizning yoshingiz ${age}`);
console.log(` Sizga ${checkAge(age)},`);

