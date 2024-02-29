import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';

export default function Home () {

   return(
       <div>

           <div style={{marginTop: '5%'}}>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='/logo-IFPE.png' size='large' />
                           </Grid.Column>
                           <Grid.Column>
                              
                               Bem vindo ao sistema <strong>OxeFood</strong> ! <br/>
                               Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB III. <br/> <br/>
                               Para acessar o código da <strong>API</strong> do sistema, acesse: <br/> <a href='https://github.com/Geovanej7/oxefood-api-geovane' target='_blank'> https://github.com/Geovanej7/oxefood-api-geovane </a> <br/> <br/>
                               Para acessar o código do <strong>Módulo WEB</strong>, acesse: <br/> <a href='https://github.com/Geovanej7/oxefood-web-geovane' target='_blank'> https://github.com/Geovanej7/oxefood-web-geovane </a>

                           </Grid.Column>
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}
