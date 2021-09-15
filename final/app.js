// FUNÇÃO PARA VERIFICAR ENTRADA
function verificarEntrada(){

  nomeConvidado = document.getElementById('nome').value;
  //var nomeConvidado = window.document.querySelector('input#nome').value
  convidadosAdriano = ['Veronica','Amanda','Paulo','Luiz','Hudson']
  if (convidadosAdriano.includes(nomeConvidado)){
      document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
  }else{
      document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
  }
}