let participantes = [
  {
    nome: 'Mayk Brito',
    email: 'mayk@gmail.com',
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: 'Diego Fernandes',
    email: 'diego@gmail.com',
    dataInscricao: new Date(2024, 1, 02, 19, 23),
    dataCheckIn: null
  },
  {
    nome: 'Ana Souza',
    email: 'ana@gmail.com',
    dataInscricao: new Date(2024, 0, 12, 10, 15),
    dataCheckIn: new Date(2024, 0, 15, 14, 30)
  },
  {
    nome: 'Carlos Silva',
    email: 'carlos@gmail.com',
    dataInscricao: new Date(2024, 2, 5, 15, 45),
    dataCheckIn: new Date(2024, 2, 8, 18, 10)
  },
  {
    nome: 'Juliana Oliveira',
    email: 'juliana@gmail.com',
    dataInscricao: new Date(2024, 0, 30, 12, 30),
    dataCheckIn: null
  },
  {
    nome: 'Rafael Santos',
    email: 'rafael@gmail.com',
    dataInscricao: new Date(2024, 1, 15, 9, 0),
    dataCheckIn: null
  },
  {
    nome: 'Patrícia Lima',
    email: 'patricia@gmail.com',
    dataInscricao: new Date(2024, 0, 25, 20, 10),
    dataCheckIn: new Date(2024, 0, 28, 23, 45)
  },
  {
    nome: 'Lucas Almeida',
    email: 'lucas@gmail.com',
    dataInscricao: new Date(2024, 1, 8, 11, 55),
    dataCheckIn: new Date(2024, 1, 11, 14, 15)
  },
  {
    nome: 'Fernanda Costa',
    email: 'fernanda@gmail.com',
    dataInscricao: new Date(2024, 2, 10, 16, 20),
    dataCheckIn: new Date(2024, 2, 13, 19, 35)
  },
  {
    nome: 'Pedro Oliveira',
    email: 'pedro@gmail.com',
    dataInscricao: new Date(2024, 0, 18, 8, 45),
    dataCheckIn: new Date(2024, 0, 21, 11, 10)
  }
];


const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  if(participante.dataCheckIn == null){
    dataCheckIn = 
    `
    <button
      data-email = "${participante.email}"
      onclick = "fazerCheckIn(event)"
    >
      Confirmar check-in
    </button>
    `
    }

  return `
    <tr>
      <td>
        <strong>
        ${participante.nome}
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
  </tr>
`
}


const atualizarLista = (participantes) => {
  let output = ''
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  document.
  querySelector('tbody')
  .innerHTML = output


}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target) 

  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

const participanteExiste = participantes.find((p) =>
   p.email == participante.email
)

if (participanteExiste) {
  alert('Email já cadastrado!')
  return
}

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  event.target.querySelector('[name="nome"]').value = "" 
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
  if (confirm(mensagemConfirmacao) == false){
    return
  }

  const participante = participantes.find((p) => p.email == event.target.dataset.email
)
participante.dataCheckIn = new Date()

atualizarLista(participantes)

}
