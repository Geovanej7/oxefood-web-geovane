import React from "react";
import { Segment } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormSelect,FormRadio } from 'semantic-ui-react';

export default function FormEntregador() {

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
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>
                                <Form.Input
                                    required
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        mask="99.999.999-9"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={5}>

                                    <InputMask
                                        mask="99/99/9999"
                                        placeholder="Ex:20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={3}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={3}
                                >
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'

                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Valor Por Frete'
                                    width={2}
                                >
                                </Form.Input>

                            </Form.Group >

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Rua'
                                    width={12}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Número'
                                    width={5}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Bairro'
                                    width={12}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Cidade'
                                    width={5}
                                >
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Cep'
                                    width={5}
                                >
                                </Form.Input>
                            </Form.Group>
                            <Form.Group>
                                <FormSelect
                                    fluid
                                    label='UF'
                                    options={['PE','PB']}
                                    width={15}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    width={15}
                                />
                            </Form.Group>
                            <Form.Group inline>
                                <label>Ativo</label>
                                <FormRadio
                                    label='Sim'
                                    value='sm'
                                />
                                <FormRadio
                                    label='Não'
                                    value='md'
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
