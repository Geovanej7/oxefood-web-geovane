import React from 'react';
import { Route, Routes } from "react-router-dom";
import ListCliente from './views/cliente/ListCliente';
import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import FormFornecedor from './views/fornecedor/FormFornecedor';
import ListFornecedor from './views/fornecedor/ListFornecedor';
import FormFabricante from './views/fabricante/FormFabricante';
import ListFabricante from './views/fabricante/ListFabricante';
import Home from './views/home/Home';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-fornecedor" element={ <FormFornecedor/> } />
                <Route path="list-fornecedor" element={ <ListFornecedor/> } />
                <Route path="form-fabricante" element={ <FormFabricante/> } />
                <Route path="list-fabricante" element={ <ListFabricante/> } />

            </Routes>
        </>
    )
}

export default Rotas
