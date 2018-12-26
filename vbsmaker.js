/*
SIMPLE VBS MAKER

invoque a função m(), pode ser invocada atravez de um onclick
*/

var archive; /* cria a variavel do arquivo */

/* Função DOM que cria um download atravez de um content de um elemento ou uma variavel */
function download(filename_, text_)
{
    var element_ = document.createElement('a'); /*cria um elemento com a tag a (link)*/ 
    
    element_.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text_)); /*Coloca o atributo de texto por URI*/
    
    element_.setAttribute('download', filename_);  /*atributo de download*/
  
    element_.style.display = 'none'; /*coloca atributo css para o elemento ficar oculto na pagina*/
    
    document.body.appendChild(element_); /*insere as alterações no body da pagina*/
  
    element_.click(); /*invoca onclick*/
  
    document.body.removeChild(_element); /*remove o elemento*/

}
/* Função pra cancelar a criação do vbs*/
function r0() 
{
    alert("Cancelado!"); /*cria um alert avisando que esta cancelado*/
    
    window.close(); /*fecha a pagina*/
}

/* Função pra criar o VBS */
function m()
{
// cmd / dlg shell lembrar valores
    var cmd1 = prompt("VBS MAKER By Isaias - Nome do seu arquivo:", ""); /*input prompt para criar o nome do arquivo*/
    
    if (cmd1 == null || cmd1 == "") /* se o valor for nulo ou vazio ira invocar a variavel de cancelamento */
    {
        r0(); /* se o valor for nulo ou vazio ira invocar a variavel de cancelamento */
    } 
    cmd1 += ".vbs" ; /*adicionava a extenção .vbs no arquivo*/
    
    alert("Funções: Dialogo : dlg , Shell (abrir) : shell"); /*cria um alert dizendo as funções*/
    
    /*input prompt pra o usuario digita a função desejada*/
    var cmd2 = prompt("Digite a Função Desejada:", "");
    
    if (cmd2 == null || cmd2 == "")/* se o valor for nulo ou vazio ira invocar a variavel de cancelamento */
    {
        r0(); /* se o valor for nulo ou vazio ira invocar a variavel de cancelamento */
    } 
    /*função pra criar o dialogo em vbs*/
    else if (cmd2 = "dlg")
    {
        /*input prompt para colocar o nome da janela do dialogo*/
        var dlgwindow = prompt("Digite o Nome da Janela do Seu Dialogo:", "");
        
        /*input pra colocar o recado do dialogo*/
        var dlgcontent = prompt("Digite o Recado do Seu Dialogo:", "");
        
        /*script gerado com os valores recebidos*/
        var total = 'msgbox ("' + dlgcontent + '"), vbinformation,' +  '"' + dlgwindow + '"'; /*conteudo do arquivo*/
        
        download(cmd1 , total); /*função de download com o nome do arquivo e o conteudo dele*/
    } 
    
    else if (cmd2 = "shell")
    {
        /*função para criar um shell em vbs (servem pra executar funções como se fosse o cmd (ex:del C:\*.* ))*/
        var shellwindow = prompt("Digite o Comando do Seu Shell:", "");
        
        download(cmd1 , shellwindow);/*função de download com o nome do arquivo e o conteudo dele*/
    }   
}
