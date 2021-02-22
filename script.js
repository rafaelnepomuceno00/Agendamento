const inputNome = document.getElementById('nome')
const inputResumo = document.getElementById('resumo')
const inputMedico = document.getElementById('inputMedico')
const inputTel = document.getElementById('telefone')
const inputHorario = document.getElementById('inputHorario')
const inputSexo = document.getElementById('inputSexo')
const btnAgendar = document.getElementById('btnAgendar')
const tableBody = document.getElementById('tableBody')


let medicos = [
    {
        nome: 'Maria Clara',
        especialidade: 'Psiquiatra',
        horarios: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
    },
    {
        nome: 'Amanda Costa',
        especialidade: 'Oftalmologista',
        horarios: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
    },
    {
        nome: 'Willian Silva',
        especialidade: 'Ortopedista',
        horarios: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
    },
    {
        nome: 'Sérgio Freitas',
        especialidade: 'Carddiologista',
        horarios: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00']
    },
]
let agendamentos = [
    {
        horario: '09:00',
        nome: 'Rafael Nepomuceno',
        medico: 'Willian Silva - Ortopedista',
        telefone: '38991624199',
        sexo: 'M',
        resumo: 'Dor de Barriga'
    },
    {
        horario: '15:30',
        nome: 'Clara',
        medico: 'Maria Clara - Psiquiatra',
        telefone: '3899162645645',
        sexo: 'F',
        resumo:'Ansiedade'
    }
]
carregarMedicos(medicos)

function carregarMedicos(med) {

    med.map(medico => {

        let opcao = document.createElement('option')
        opcao.innerText = `${medico.nome} - ${medico.especialidade}`

        inputMedico.appendChild(opcao)
    })

}
inputMedico.addEventListener('click', () => {
    let medico = inputMedico.value
    console.log(medico)
    console.log(carregarHorarios(medico))
})

function carregarHorarios(medico) {
    let medc = medicos.find(function (item) {
        return medico.includes(item.especialidade)

    })
    inputHorario.innerText = ' '
    medc.horarios.forEach(horario => {
        let OptHorario = document.createElement('option')
        OptHorario.innerText = horario

        inputHorario.appendChild(OptHorario)
    })
}

function carregarAgendamentos(agendamentos){
    tableBody.innerText =''
    agendamentos.forEach((agendamento)=>{
        let itemTabela = document.createElement('tr')
        let hrItem = document.createElement('td')
        let nmItem = document.createElement('td')
        let medItem = document.createElement('td')
        let telItem = document.createElement('td')
        let sexItem = document.createElement('td')
        let resItem = document.createElement('td')
        let btnColItem = document.createElement('td')
        let btnItem = document.createElement('button')

        hrItem.innerText = agendamento.horario    
        nmItem.innerText = agendamento.nome    
        medItem.innerText = agendamento.medico
        telItem.innerText = agendamento.telefone    
        sexItem.innerText = agendamento.sexo    
        resItem.innerText = agendamento.resumo    
        btnItem.innerText = 'Excluir'
        btnItem.setAttribute('class','btn btn-danger')

        btnColItem.appendChild(btnItem)
        
        itemTabela.appendChild(hrItem)
        itemTabela.appendChild(nmItem)
        itemTabela.appendChild(medItem)
        itemTabela.appendChild(telItem)
        itemTabela.appendChild(sexItem)
        itemTabela.appendChild(resItem)
        itemTabela.appendChild(btnColItem)

        tableBody.appendChild(itemTabela)
    
    })
}

function agendar (){
    let nome = inputNome.value 
    let resumo = inputResumo.value
    let medico = inputMedico.value
    let telefone = inputTel.value
    let horario = inputHorario.value
    let sexo= inputSexo.value

   novoAgendamento={
        horario, 
        nome,
        medico,
       telefone,
       sexo,
       resumo
    }
    agendamentos.push(novoAgendamento)
    carregarAgendamentos(agendamentos)
}

function removeritem(posicao) {
    agendamentos.splice(posicao, 1)
    carregarAgendamentos()
}

btnAgendar.addEventListener('click', ()=>{
    agendar()
})
carregarAgendamentos(agendamentos)
const btnexcluir = document.querySelectorAll('#tableBody  button')
btnexcluir.forEach(item=>{
    item.addEventListener('click', (e, pos) =>{
        e.stopPropagation
        removeritem(pos)
    })
})