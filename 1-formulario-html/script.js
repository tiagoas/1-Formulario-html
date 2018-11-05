function validar() {
    var valido = true;
    
    if (!document.getElementById("textNome").value) valido = false;
  
    if (!document.getElementById("textAno").value) valido = false;

    if (!document.getElementById("rbSexoMasculino").checked && 
        !document.getElementById("rbSexoFeminino").checked) valido = false;
    
    if (!document.getElementById("cbFaculdadeFPU").checked && 
        !document.getElementById("cbFaculdadeUFU").checked &&
        !document.getElementById("cbFaculdadeOutros").checked) valido = false;
        
    if (!document.getElementById("selectCurso").value) valido = false;
    
    if (!document.getElementById("textCurriculo").value) valido = false;

    return valido;
}