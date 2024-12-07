class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template(model) {

        throw new Error('metodo template precisa ser criado na classe filho.')
    }

    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}