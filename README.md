<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sufity Melan - Sufity Napinane Warszawa</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#111;
color:white;
}

.hero{
padding:60px 20px;
text-align:center;
background:linear-gradient(to bottom,#000,#1a1a1a);
}

.hero h1{
font-size:42px;
margin-bottom:15px;
}

.hero p{
font-size:20px;
color:#ccc;
margin-bottom:25px;
}

.btn{
display:inline-block;
padding:15px 30px;
background:#007bff;
color:white;
text-decoration:none;
border-radius:10px;
font-weight:bold;
}

.section{
padding:50px 20px;
max-width:1200px;
margin:auto;
}

.section h2{
text-align:center;
margin-bottom:30px;
font-size:32px;
}

.gallery{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:15px;
}

.gallery img{
width:100%;
border-radius:15px;
}

.calc{
background:#1d1d1d;
padding:30px;
border-radius:15px;
text-align:center;
}

.calc input{
padding:12px;
width:100%;
max-width:300px;
margin:10px;
border:none;
border-radius:8px;
}

.calc button{
padding:12px 25px;
background:#28a745;
color:white;
border:none;
border-radius:8px;
font-size:16px;
}

.result{
margin-top:15px;
font-size:24px;
font-weight:bold;
}

.contact{
text-align:center;
}

.contact a{
color:#4da6ff;
display:block;
margin:10px;
font-size:20px;
text-decoration:none;
}

footer{
text-align:center;
padding:30px;
background:#000;
margin-top:50px;
}
</style>
</head>

<body>

<section class="hero">
<h1>SUFITY MELAN</h1>
<p>Nowoczesne sufity napinane w Warszawie i okolicach</p>
<a href="tel:+48734625102" class="btn">📞 Zadzwoń teraz</a>
</section>

<section class="section">
<h2>Dlaczego my?</h2>
<p style="text-align:center;">
✔ Sufity napinane<br>
✔ Linie świetlne LED<br>
✔ Tory magnetyczne<br>
✔ Darmowa wycena
</p>
</section>

<section class="section">
<h2>Kalkulator ceny</h2>

<div class="calc">
<input type="number" id="m2" placeholder="Podaj m²">

<br>

<button onclick="oblicz()">Oblicz</button>

<div class="result" id="wynik"></div>
</div>
</section>

<section class="section">
<h2>Kontakt</h2>

<div class="contact">
<a href="tel:+48734625102">📞 +48 734 625 102</a>

<a href="https://www.instagram.com/sufity.melan" target="_blank">
Instagram
</a>

<a href="https://www.facebook.com/share/1Jt8QyXUd6/" target="_blank">
Facebook
</a>

<a href="mailto:melnik.artem7.05.2004@gmail.com">
✉ melnik.artem7.05.2004@gmail.com
</a>
</div>
</section>

<footer>
Sufity Melan © 2026
</footer>

<script>
function oblicz(){
let m2=document.getElementById('m2').value;
let cena=m2*100;
document.getElementById('wynik').innerHTML=
"Szacunkowa cena: "+cena+" zł";
}
</script>

</body>
</html>
