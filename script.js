function criptografar() {
  let texto = document.getElementById("input").value.toLowerCase();
  let criptografado = texto
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufad");
  document.getElementById("output").value = criptografado;
}

function descriptografar() {
  let texto = document.getElementById("input").value.toLowerCase();
  let descriptografado = texto
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufad/g, "u");
  document.getElementById("output").value = descriptografado;
}

function copiar() {
    let texto = document.getElementById("output");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
  
