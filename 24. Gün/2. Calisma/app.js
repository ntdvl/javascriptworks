var test = parseInt(Math.round(prompt('What is your age ?'), 10));

document.getElementById('ce').innerHTML = test;

console.log(typeof(test));

/* 
window nesnesinin prompt metodu geriye bir string döndürür. 
Fakat biz string dönen veri türünü parseInt ile number veri türüne çevirdik.
*/