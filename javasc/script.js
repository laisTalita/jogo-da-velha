

        var j1 = window.document.getElementById('jog1')
        var j2 = window.document.getElementById('jog2') 
        var vez = window.document.getElementById('vez')
        var ganhou = false
        var tds=window.document.getElementsByClassName('color')
        var jogadorA='X'

        function atualizaVez() {
            if (jogadorA=='X') {
                 vez.innerHTML=`<i class='bx bx-x'></i>`
            }else{
                vez.innerHTML=`<i class='bx bx-radio-circle'></i>`
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
                   vez.innerHTML=` ${tds[a].innerHTML}ganhou!`
                    return   
                }
                      
            }
            if ([...tds].every(cell=> cell.innerHTML!=='')) {
                ganhou =true
                vez.innerHTML =` ${tds[a].innerHTML}empate`
                
            }
        }
        function desap() {
        var boas = document.getElementById('boas');
        boas.style.display = 'none'; 

        atualizaVez();
        for (let i = 0; i < tds.length; i++) {
            tds[i].addEventListener('click', function() {
                if (this.innerHTML === '' && !ganhou) {
                    if (jogadorA==='X') {
                    this.innerHTML = `<i class="bx bx-x"></i>`
                    this.style.backgroundColor=' rgba(60, 78, 12, 0.446)'
                    
                   }else{
                    this.innerHTML ='<i class="bx bx-radio-circle"></i>'
                    this.style.backgroundColor=' rgba(79, 17, 17, 0.469)'
                   }
                    verificaGanhador(); 
                    if (!ganhou) {
                        inverter();
                    }
                }
            });
        }
    }