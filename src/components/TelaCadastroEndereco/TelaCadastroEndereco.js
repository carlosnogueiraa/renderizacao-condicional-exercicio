import { FormContainer, Form, StyledLabel, Input, SendButton } from "./styled"


const TelaCadastroEndereco = (props) => {

    return (
        <FormContainer>
            <h1>Cadastro de Endereço</h1>
            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereco:
                    <Input id="endereco" />
                </StyledLabel>
                <StyledLabel htmlFor="numero">
                    Número da Residência:
                    <Input id="numero" />
                </StyledLabel>
                <StyledLabel htmlFor="telefone">
                    Telefone:
                    <Input id="telefone" />
                </StyledLabel>
                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Enviar</SendButton>
            </Form>
        </FormContainer>
    )
}

export default TelaCadastroEndereco