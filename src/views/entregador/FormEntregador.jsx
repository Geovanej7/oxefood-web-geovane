import React, { useState } from "react";
import axios from "axios";
import { Segment } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormSelect,FormRadio } from 'semantic-ui-react';

export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRG] = useState();
    const [dtNascimento, setDTNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [entregasRealizadas, setEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoCompleto, setEnderecoCompleto] = useState();
    const [ativo, setAtivo] = useState();

    function salvar() {

		let entregadorRequest = {
		     nome: nome,
		     cpf: cpf,
             rg: rg,
		     dtNascimento: dtNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,
             entregasRealizadas: entregasRealizadas,
             valorFrete: valorFrete,
             enderecoRua: enderecoRua,
             enderecoNumero: enderecoNumero,
             enderecoBairro: enderecoBairro,
             enderecoCidade: enderecoCidade,
             enderecoCep: enderecoCep,
             enderecoUf: enderecoUf,
             enderecoCompleto: enderecoCompleto,
             ativo: ativo
		}
	
		axios.post("http://localhost:8080/api/entregador", entregadorRequest)
		.then((response) => {
		     console.log('Entregador cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um Entregador.')
		})
	}


    return (

        <div>

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
				                        onChange={e => setCpf(e.target.value)}
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        mask="99.999.999-9"
                                        value={rg}
                                        onChange={e => setRG(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>

                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder="Ex:20/03/1985"
                                        value={dtNascimento}
                                        onChange={e => setDTNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={3}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Fixo'
                                    width={3}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Entregas Realizadas'
                                    width={2}
                                    value={entregasRealizadas}
                                    onChange={e => setEntregasRealizadas(e.target.value)}

                                >
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Por Frete'
                                    width={2}
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                >
                                </Form.Input>

                            </Form.Group >

                            <Form.Group>
                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    width={12}
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    width={5}
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    width={12}
                                    value= {enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    width={5}
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                >
                                </Form.Input>
                                <Form.Input 
                                    required
                                    fluid
                                    label='Cep'
                                    width={5}
                                    value={enderecoCep}
                                    onChange={e => setEnderecoCep(e.target.value)}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <FormSelect
                                    required
                                    fluid
                                    label='UF'
                                    options={['PE','PB']}
                                    width={16}
                                    value ={enderecoUf}
                                    onChange={(e,{value}) => {setEnderecoUf(value)}}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input 
                                    required
                                    fluid
                                    label='complemento'
                                    width={16}
                                    value ={enderecoCompleto}
                                    onChange={e => setEnderecoCompleto(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group inline>
                                
                                <label>Ativo</label>
                                <FormRadio
                                    
                                    label='sim'
                                    checked={ativo}
                                    onChange={e => setAtivo(true)}
                                
                                />
                                <FormRadio
                        
                                    label='Não'
                                    checked={ativo}
                                    onChange={e => setAtivo(false)}
                                />
                        
                            </Form.Group>
                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
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
