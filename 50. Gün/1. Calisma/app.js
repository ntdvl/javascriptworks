let factor = function(par) {
  let sonuc = 1;
  let sayi;
  for (sayi = par; sayi > 1; sayi--) {
    sonuc *= sayi; // result = result * count
  }
  return sonuc;
};


console.log(factor(3));


// Faktöriyel