fetch('https://semob.belem.pa.gov.br/linhas/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter os dados');
    }
    return response.json();
  })
  .then(data => {
    // Faça algo com os dados recebidos
    console.log(data);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
