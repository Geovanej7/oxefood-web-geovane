import React from "react";
import { Segment } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';

export default function FormProduto () {

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
                                    /> 
                                </Form.Input>  
                                
                                <Form.Input
                                    fluid
                                    label='Código do Produto'
                                    width={6}>
                                    <InputMask 
                                        placeholder="Informe o código do produto"
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                            <FormTextArea 
                                label='Descrição'
                                 placeholder='Informe a descrição do produto'
                                 width={16}
                            />
                             </Form.Group>
                                
                             <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={6}>
                       
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                >
                                    <InputMask 
            
                                        placeholder="30"
                                    /> 
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                >
                                    <InputMask 
            
                                        placeholder="40"
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
