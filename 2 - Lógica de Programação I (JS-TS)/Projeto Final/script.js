const Tarefas = 'tarefas'


var listaRegistros = {
    ultimoIdGerado:0,
    usuarios:[]
}

var filtro = ''


function cadastrar(){
    localStorage.setItem(Tarefas, JSON.stringify(listaRegistros) )
}

function ler(){
    const data = localStorage.getItem(Tarefas)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    imprimir()
}


function pesquisar(value){
    filtro = value;
    imprimir()
}


function imprimir(){
    const tbody = document.getElementById('listaRegistrosBody')
    if(tbody){
        var data = listaRegistros.usuarios;
        if(filtro.trim()){
            const expReg = eval(`/${filtro.trim()}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.nome ) || expReg.test( usuario.descricao )
            } )
        }
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( usuario => {
                return `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.descricao}</td>
                        <td>
                            <button onclick='vizualizar("cadastro",false,${usuario.id})'>Editar</button>
                            <button class='vermelho' onclick='perguntarSeDeleta(${usuario.id})'>Deletar</button>
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}

function insertUsuario(nome, descricao){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, descricao
    })
    cadastrar()
    imprimir()
    vizualizar('lista')
}

function editUsuario(id, nome, descricao){
    var usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
    usuario.nome = nome;
    usuario.descricao = descricao;
    cadastrar()
    imprimir()
    vizualizar('lista')
}

function deleteUsuario(id){
    listaRegistros.usuarios = listaRegistros.usuarios.filter( usuario => {
        return usuario.id != id
    } )
    cadastrar()
    imprimir()
}

function perguntarSeDeleta(id){
    if(confirm('Quer deletar o registro de id '+id)){
        deleteUsuario(id)
    }
}


function limparEdicao(){
    document.getElementById('nome').value = ''
    document.getElementById('descricao').value = ''
}

function vizualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(id){
            const usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
            if(usuario){
                document.getElementById('id').value = usuario.id
                document.getElementById('nome').value = usuario.nome
                document.getElementById('descricao').value = usuario.descricao
            }
        }
        document.getElementById('nome').focus()
    }
}

function submeter(e){
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
    }
    if(data.id){
        editUsuario(data.id, data.nome, data.descricao)
    }else{
        insertUsuario( data.nome, data.descricao )
    }
}

window.addEventListener('load', () => {
    ler()
    document.getElementById('cadastroRegistro').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })

})