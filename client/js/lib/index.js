
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var formulario = document.querySelector('form');
var tabela = document.querySelector('table tbody');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();
    var tr = document.createElement('tr');

    campos.forEach((campo) => {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tabela.appendChild(tr);

    campos[0].value = "";
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});