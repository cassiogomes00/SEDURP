import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInternship } from '../../../../store/RegisterInternship/RegisterInternship.actions';
import Wrapper from './SolicitacaoEstagioForm.styled';
import SolicitacaoEstagioFormInput from './SolicitacaoEstagioFormInput/SolicitacaoEstagioFormInput';
import SolicitacaoEstagioFormSessionTitle from './SolicitacaoEstagioFormSessionTitle/SolicitacaoEstagioFormSessionTitle';
import SolicitacaoEstagioFormSubmit from './SolicitacaoEstagioFormSubmit/SolicitacaoEstagioFormSubmit';
import SolicitacaoEstagioFormTextArea from './SolicitacaoEstagioFormTextArea/SolicitacaoEstagioFormTextArea';

export default function SolicitacaoEstagioForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerInternshipStatus = useSelector(
    (state) => state.registerInternship
  );

  const internshipInfo = useSelector((state) => state.enterInternshipInfo);

  useEffect(() => {
    if (registerInternshipStatus.error !== null) {
      alert(registerInternshipStatus.error);
    }

    if (registerInternshipStatus.internshipId !== null) {
      navigate('/estagio-info');
    }
  }, [registerInternshipStatus]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(registerInternship(internshipInfo));
  };

  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <SolicitacaoEstagioFormSessionTitle>
        Dados do aluno
      </SolicitacaoEstagioFormSessionTitle>

      <label htmlFor="cursoAluno">Curso</label>
      <SolicitacaoEstagioFormInput type="text" name="cursoAluno" />

      <label htmlFor="enderecoAluno">Endereço</label>
      <SolicitacaoEstagioFormInput type="text" name="enderecoAluno" />

      <label htmlFor="bairroAluno">Bairro</label>
      <SolicitacaoEstagioFormInput type="text" name="bairroAluno" />

      <label htmlFor="cepAluno">CEP</label>
      <SolicitacaoEstagioFormInput type="number" name="cepAluno" />

      <label htmlFor="cidadeAluno">Cidade</label>
      <SolicitacaoEstagioFormInput type="text" name="cidadeAluno" />

      <label htmlFor="ufAluno">UF</label>
      <SolicitacaoEstagioFormInput type="text" name="ufAluno" />

      <label htmlFor="paeAluno">PAE</label>
      <SolicitacaoEstagioFormTextArea name="paeAluno" />

      <SolicitacaoEstagioFormSessionTitle>
        Dados do orientador
      </SolicitacaoEstagioFormSessionTitle>

      <label htmlFor="nomeOrientador">Nome</label>
      <SolicitacaoEstagioFormInput type="text" name="nomeOrientador" />

      <SolicitacaoEstagioFormSessionTitle>
        Unidade concedente
      </SolicitacaoEstagioFormSessionTitle>

      <label htmlFor="razaoSocialUnidadeConcedente">Razão social</label>
      <SolicitacaoEstagioFormInput
        type="text"
        name="razaoSocialUnidadeConcedente"
      />

      <label htmlFor="enderecoUnidadeConcedente">Endereço</label>
      <SolicitacaoEstagioFormInput
        type="text"
        name="enderecoUnidadeConcedente"
      />

      <label htmlFor="bairroUnidadeConcedente">Bairro</label>
      <SolicitacaoEstagioFormInput type="text" name="bairroUnidadeConcedente" />

      <label htmlFor="cepUnidadeConcedente">CEP</label>
      <SolicitacaoEstagioFormInput type="number" name="cepUnidadeConcedente" />

      <label htmlFor="cidadeUnidadeConcedente">Cidade</label>
      <SolicitacaoEstagioFormInput type="text" name="cidadeUnidadeConcedente" />

      <label htmlFor="ufUnidadeConcedente">UF</label>
      <SolicitacaoEstagioFormInput type="text" name="ufUnidadeConcedente" />

      <label htmlFor="telefoneUnidadeConcedente">Telefone</label>
      <SolicitacaoEstagioFormInput
        type="number"
        name="telefoneUnidadeConcedente"
      />

      <label htmlFor="cnpjUnidadeConcedente">CNPJ</label>
      <SolicitacaoEstagioFormInput type="number" name="cnpjUnidadeConcedente" />

      <label htmlFor="nomeRepresentanteEstagioUnidadeConcedente">
        Nome do representante de estágio
      </label>
      <SolicitacaoEstagioFormInput
        type="text"
        name="nomeRepresentanteEstagioUnidadeConcedente"
      />

      <label htmlFor="cargoRepresentanteEstagioUnidadeConcedente">
        Cargo do representante de estágio
      </label>
      <SolicitacaoEstagioFormInput
        type="text"
        name="cargoRepresentanteEstagioUnidadeConcedente"
      />

      <label htmlFor="nomeSupervisorEstagioUnidadeConcedente">
        Nome do supervisor de estágio
      </label>
      <SolicitacaoEstagioFormInput
        type="text"
        name="nomeSupervisorEstagioUnidadeConcedente"
      />

      <label htmlFor="cargoSupervisorEstagioUnidadeConcedente">
        Cargo do supervisor de estágio
      </label>
      <SolicitacaoEstagioFormInput
        type="text"
        name="cargoSupervisorEstagioUnidadeConcedente"
      />

      <SolicitacaoEstagioFormSessionTitle>
        Dados do estágio
      </SolicitacaoEstagioFormSessionTitle>

      <label htmlFor="modalidadeEstagio">Modalidade</label>
      <SolicitacaoEstagioFormInput type="text" name="modalidadeEstagio" />

      <label htmlFor="inicioEstagio">Início</label>
      <SolicitacaoEstagioFormInput type="date" name="inicioEstagio" />

      <label htmlFor="cargaHorariaDiariaEstagio">Carga horária diária</label>
      <SolicitacaoEstagioFormInput
        type="number"
        name="cargaHorariaDiariaEstagio"
      />

      <label htmlFor="cargaHorariaSemanalEstagio">Carga horária semanal</label>
      <SolicitacaoEstagioFormInput
        type="number"
        name="cargaHorariaSemanalEstagio"
      />

      <label htmlFor="horaInicialEstagio">Hora inicial</label>
      <SolicitacaoEstagioFormInput type="time" name="horaInicialEstagio" />

      <label htmlFor="horaFinalEstagio">Hora final</label>
      <SolicitacaoEstagioFormInput type="time" name="horaFinalEstagio" />

      <label htmlFor="intervaloEstagio">Intervalo</label>
      <SolicitacaoEstagioFormInput type="time" name="intervaloEstagio" />

      <label htmlFor="remuneradoEstagio">Remunerado</label>
      <SolicitacaoEstagioFormInput type="text" name="remuneradoEstagio" />

      <label htmlFor="valorRemuneracaoEstagio">Valor da remuneração</label>
      <SolicitacaoEstagioFormInput
        type="number"
        name="valorRemuneracaoEstagio"
      />

      <SolicitacaoEstagioFormSubmit value="ENVIAR" />
    </Wrapper>
  );
}
