let boy = Number(prompt("Boyunuzu metre cinsinden giriniz:"));
let kilo =Number (prompt("Kilonuzu giriniz:"));
let sonuc = kilo/(boy**2);

if (sonuc < 18.5){
    alert("İdeal kilonuzun altındasınız.");
}
else if( sonuc >= 18.5 && sonuc <= 24.9){
    alert("İdeal kilodasınız.");
}
else if( sonuc >= 25 && sonuc <= 29.9){
    alert("Fazla kilolusunuz.");
}
else if( sonuc >= 30 && sonuc <= 34.9){
    alert("1. Derece obezsiniz.");
}
else if( sonuc >= 35 && sonuc <= 44.9){
    alert("2. Derece obezsiniz.");
}
else if( sonuc >= 45){
    alert("3. Derece obez")};
