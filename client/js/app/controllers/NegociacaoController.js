class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        
        // pegar os inputs do formulario
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._negociacoes = new ListaNegociacoes();
        this._mensagem = new Mensagem();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._mensagemView = new MensagemView($('#mensagemView'))

        // atualizar o html quando a pagina é aberta
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem)
    }
    
    _criaNegociacao() {

            return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    
    adiciona(event) {

        event.preventDefault();

        let negociacao = this._criaNegociacao();
        this._negociacoes.adiciona(negociacao);        
        this._mensagem.texto = 'Negociação adicionada com sucesso.'
        
        this._limparFormulario();

        // atualizar o html quando uma negociação for adicionada
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem)
    }
    
    _limparFormulario() {

        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}
