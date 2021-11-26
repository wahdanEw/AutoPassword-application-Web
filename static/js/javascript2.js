let i = 0;
let txt = 'Welcome to my site, this site comes and makes it easier for the user to generate a random password by choosing the length of the password, a strong password produces chances of a large firewall to protect your accounts.';
let speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txtp").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}