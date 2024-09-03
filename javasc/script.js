
        var sec= window.document.getElementById('vence')
        var j1 = window.document.getElementById('jogador1')
        var j2 = window.document.getElementById('jogador2')
        var vez = window.document.getElementById('vez')
        var ganhou = false
        var tds=window.document.getElementsByClassName('color')
        var jogadorA='X'
        var nomJ,n1,n2

        function atualizaVez() {
            if (jogadorA=='X') {
                 vez.innerHTML=`<i class='bx bx-x'></i>`
                 vez.style.backgroundColor='rgba(60, 78, 12, 0.697)'
                 nomJ =n1
            }else{
                vez.innerHTML=`<i class='bx bx-radio-circle'></i>`
                vez.style.backgroundColor=' rgba(105, 14, 14, 0.697)'
                nomJ=n2
            }
        }
        function inverter() {
                if (jogadorA ==='X') {
                    jogadorA='O'
                }
                else{
                    jogadorA='X'
                }
                atualizaVez()
        }
        function verificaGanhador(){
            var comb =[[0,1,2],[3,4,5],[6,7,8], [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],]
            for (var combinacao of comb) {
                var[a,b,c] =combinacao
                if (tds[a].innerHTML ===tds[b].innerHTML && tds[b].innerHTML === tds[c].innerHTML && tds[a].innerHTML !=='') {
                    ganhou = true
                    if (nomJ == '') {
                        exibirTelaF(` O ( ${jogadorA} ) ganhou`)
                        
                    }
                    else{
                        exibirTelaF(`${nomJ} ganhou`)
                    return  

                    }
                      
                }
            }
            if ([...tds].every(cell=> cell.innerHTML!=='')) {
                ganhou =true
                exibirTelaF(`empate`)
            }
        }

        function exibirTelaF(mensagem){
            document.getElementById('boas_vindas').style.display='none'
            document.getElementById('result').innerHTML =mensagem
            document.getElementById('final').style.display='block'

        }
       
        function desap() {
        var boas = document.getElementById('boas_vindas');
        boas.style.display = 'none'; 
        n1=j1.value
        n2=j2.value

        atualizaVez();
        for (let i = 0; i < tds.length; i++) {
            tds[i].addEventListener('click', function() {
                if (this.innerHTML === '' && !ganhou) {
                    if (jogadorA==='X') {
                    this.innerHTML = `<i class="bx bx-x"></i>`
                    this.style.backgroundColor='rgba(60, 78, 12, 0.697)'
                    
                   }else{
                    this.innerHTML ='<i class="bx bx-radio-circle"></i>'
                    this.style.backgroundColor='rgba(105, 14, 14, 0.697)'
                   }
                    verificaGanhador(); 
                    if (!ganhou) {
                        inverter();
                    }
                }
            });
        }
    }