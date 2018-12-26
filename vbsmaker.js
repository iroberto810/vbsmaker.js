/* SIMPLE VBS MAKER
invoque a função m()*/
var archive;

function download(filename_, text_) {
    var element_ = document.createElement('a');
    element_.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text_));
    element_.setAttribute('download', filename_);
  
    element_.style.display = 'none';
    document.body.appendChild(element_);
  
    element_.click();
  
    document.body.removeChild(_element);

}
function r0() {alert("Cancelado!");window.close()}

function m() {
// cmd / dlg shell lembrar valores
    var cmd1 = prompt("VBS MAKER By Isaias - Nome do seu arquivo:", "");
    if (cmd1 == null || cmd1 == "") {
        r0();
    } 
    cmd1 += ".vbs" ;
    alert("Funções: Dialogo : dlg , Shell (abrir) : shell");
    
    var cmd2 = prompt("Digite a Função Desejada:", "");
    
    if (cmd2 == null || cmd2 == "") {r0();} else if (cmd2 = "dlg") {
        var dlgwindow = prompt("Digite o Nome da Janela do Seu Dialogo:", "");
        var dlgcontent = prompt("Digite o Recado do Seu Dialogo:", "");
        var total = 'msgbox ("' + dlgcontent + '"), vbinformation,' +  '"' + dlgwindow + '"';
        download(cmd1 , total);
    } else if (cmd2 = "shell") {
        var shellwindow = prompt("Digite o Comando do Seu Shell:", "");
        download(cmd1 , shellwindow);
    }   
}