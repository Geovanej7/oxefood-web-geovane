import React, { useState } from "react";
import axios from "axios";
import { Segment } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';


export default function FormProduto () {
    

        const [codigo, setCodigo] = useState();
        const [titulo, setTitulo] = useState();
        const [descricao,setDescricao]= useState();
        const [valorUnitario, setValorUnitario] = useState();
        const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
        const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

        function salvar() {

            let produtoRequest = {
                codigo: codigo,
                titulo: titulo,
                descricao: descricao,
                valorUnitario: valorUnitario,
                tempoEntregaMinimo: tempoEntregaMinimo,
                tempoEntregaMaximo:tempoEntregaMaximo

            }
        
            axios.post("http://localhost:8080/api/produto", produtoRequest)
            .then((response) => {
                 console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                 console.log('Erro ao incluir o produto.')
            })
        }
    
     

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                >
                                    <InputMask 
                                        placeholder="Informe o título do produto"
                                        value={titulo}
			                            onChange={e => setTitulo(e.target.value)}

                                    /> 
                                </Form.Input>  
                                
                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    width={6}>
                                    <InputMask 
                                        placeholder="Informe o código do produto"
                                        value={codigo}
			                            onChange={e => setCodigo(e.target.value)}

                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                            <FormTextArea 
                                required
                                label='Descrição'
                                placeholder='Informe a descrição do produto'
                                width={16}
                                value={descricao}
			                    onChange={e => setDescricao(e.target.value)}
                            />
                             </Form.Group>
                                
                             <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
			                        onChange={e => setValorUnitario(e.target.value)}
                                    >
                       
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        placeholder="30"
                                        value={tempoEntregaMinimo}
			                            onChange={e => setTempoEntregaMinimo(e.target.value)}
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        placeholder="40"
                                        value={tempoEntregaMaximo}
			                            onChange={e => setTempoEntregaMaximo(e.target.value)}
                                    /> 
                                </Form.Input>
                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
