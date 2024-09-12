import React from "react";

export const SearchInput = ({ valueCategoria, valueNome, onChange, onClick }) => {
    function handleChange(event) {
        onChange(event.target);
    }
    function confirmSearch() {
        onClick()
    }

    return (
        <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class="form">
                        <div class="input-group">
                            <input type="search" class="form-control form-input" placeholder="Pesquisar por nome" name="nome"
                                value={valueNome} 
                                onChange={handleChange}
                            />
                            <select onChange={handleChange} value={valueCategoria} name="categoria" required class="form-select" aria-label="">
                                <option selected></option>
                                <option value="Pneu">Pneu</option>
                                <option value="Motor">Motor</option>
                                <option value="Bateria">Bateria</option>
                                <option value="Freio">Freio</option>
                                <option value="Suspensão">Suspensão</option>
                            </select>
                            <button class="btn btn-outline-secondary" type="button" onClick={confirmSearch}>Pesquisar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );

}