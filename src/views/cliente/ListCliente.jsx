import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Header, Modal, Menu, Segment, Form } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function ListCliente() {
  const [lista, setLista] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [idRemover, setIdRemover] = useState();
  const [menuFiltro, setMenuFiltro] = useState(false); 
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  async function remover() {
    await axios
      .delete("http://localhost:8080/api/cliente/" + idRemover)
      .then((response) => {
        console.log("Cliente removido com sucesso.");

        axios.get("http://localhost:8080/api/cliente").then((response) => {
          setLista(response.data);
        });
      })
      .catch((error) => {
        console.log("Erro ao remover um cliente.");
      });
    setOpenModal(false);
  }

  useEffect(() => {
    carregarLista();
  }, []);

  function carregarLista() {
    axios.get("http://localhost:8080/api/cliente").then((response) => {
      setLista(response.data);
    });
  }

  function handleMenuFiltro() {
    setMenuFiltro(!menuFiltro);
  }

  function handleChangeNome(value) {
    setNome(value);
    filtrarClientes(value, cpf);
  }

  function handleChangeCpf(value) {
    setCpf(value);
    filtrarClientes(nome, value);
  }

  async function filtrarClientes(nomeParam, cpfParam) {
    let formData = new FormData();

    if (nomeParam) {
      formData.append("nome", nomeParam);
    }
    if (cpfParam) {
      formData.append("cpf", cpfParam);
    }

    if (nomeParam || cpfParam) {
      await axios.post("http://localhost:8080/api/cliente/filtrar", formData).then((response) => {
        setLista(response.data);
      });
    } else {
      carregarLista();
    }
  }

  function formatarData(dataParam) {
    if (!dataParam) {
      return "";
    }

    let arrayData = dataParam.split("-");
    return arrayData[2] + "/" + arrayData[1] + "/" + arrayData[0];
  }

  function confirmaRemover(id) {
    setOpenModal(true);
    setIdRemover(id);
  }

  return (
    <div>
      <MenuSistema tela={"cliente"} />
      <div style={{ marginTop: "3%" }}>
        <Container textAlign="justified">
          <h2> Cliente </h2>
          <Divider />

          <div style={{ marginTop: "4%" }}>
            <Menu compact>
              <Menu.Item name="menuFiltro" active={menuFiltro} onClick={handleMenuFiltro}>
                <Icon name="filter" />
                Filtrar
              </Menu.Item>
            </Menu>

            <Button label="Novo" circular color="orange" icon="clipboard outline" floated="right" as={Link} to="/form-cliente" />
            {menuFiltro && (
              <Segment>
                <Form className="form-filtros">
                  <Form.Input icon="search" value={nome} onChange={(e) => handleChangeNome(e.target.value)} label="Nome do Cliente" placeholder="Filtrar por Nome do Cliente" labelPosition="left" width={4} />
                  <Form.Group widths="equal">
                    <Form.Input icon="search" value={cpf} onChange={(e) => handleChangeCpf(e.target.value)} label="Cpf" placeholder="Filtrar por Cpf" labelPosition="left" width={4} />
                  </Form.Group>
                </Form>
              </Segment>
            )}

            <br />
            <br />
            <br />

            <Table color="orange" sortable celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nome</Table.HeaderCell>
                  <Table.HeaderCell>CPF</Table.HeaderCell>
                  <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                  <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                  <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Ações</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {lista.map((cliente) => (
                  <Table.Row key={cliente.id}>
                    <Table.Cell>{cliente.nome}</Table.Cell>
                    <Table.Cell>{cliente.cpf}</Table.Cell>
                    <Table.Cell>{formatarData(cliente.dataNascimento)}</Table.Cell>
                    <Table.Cell>{cliente.foneCelular}</Table.Cell>
                    <Table.Cell>{cliente.foneFixo}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button inverted circular color="green" title="Clique aqui para editar os dados deste cliente" icon>
                        <Link to="/form-cliente" state={{ id: cliente.id }} style={{ color: "green" }}>
                          <Icon name="edit" />
                        </Link>
                      </Button>
                      &nbsp;
                      <Button inverted circular color="red" title="Clique aqui para remover este cliente" icon onClick={(e) => confirmaRemover(cliente.id)}>
                        <Icon name="trash" />
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Container>
      </div>
      <Modal basic onClose={() => setOpenModal(false)} onOpen={() => setOpenModal(true)} open={openModal}>
        <Header icon>
          <Icon name="trash" />
          <div style={{ marginTop: "5%" }}> Tem certeza que deseja remover esse registro? </div>
        </Header>
        <Modal.Actions>
          <Button basic color="red" inverted onClick={() => setOpenModal(false)}>
            <Icon name="remove" /> Não
          </Button>
          <Button color="green" inverted onClick={() => remover()}>
            <Icon name="checkmark" /> Sim
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
