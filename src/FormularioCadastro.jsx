import { useState } from 'react';

function FormularioCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se o nome contém espaço em branco (indicando nome e sobrenome)
    if (nome.trim().indexOf(' ') === -1) {
      setErro('Preencha seu sobrenome.');
      return;
    }

    // Lógica para enviar os dados para um servidor, por exemplo.
    console.log('Nome:', nome, 'Email:', email);
    setErro(''); // Limpa a mensagem de erro se tudo estiver correto.
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCadastro;
