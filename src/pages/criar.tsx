import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Senha: React.FC = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSenha = async () => {
    try {
      const response = await axios.post("http://localhost:5173/Criar", {
        name,
        email,
        telephone,
        password
      });
      console.log(response.data);
      setName("");
      setTelephone("");
      setEmail("");
      setPassword("");
      setSuccessMessage("Cadastro realizado com sucesso");
      navigate("/login");
    } catch (error) {
      setError("erro ao cadastrar usuário");
      console.error(error);
    }
  };

  return (
    <>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="../../public/login.css" />
  <div>
    <ul className="circles">
      <li/><li/><li/><li/><li/><li/>
      <li/><li/><li/><li/><li/><li/>
      <li/><li/><li/><li/></ul>
  </div>
  <div className="section">
    <div className="container">
      <div className="row full-height justify-content-center">
          <div className="section pb-5 pt-5 pt-sm-2 text-center">
            <h6 className="mb-0 pb-3">
            <a href="./login">
              <span>-&gt; Logar</span></a>
              <span>Inscrever &lt;-</span>
            </h6>
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-Senha">
                  <div className="center-wrap">
                    <div className="section text-center">
                    <form className="flex flex-col items-center justify-center w-full">
                      {error && <div className="text-red-500 mb-4">{error}</div>}
                      {succesMessage && (
                        <div className="text-geen-500 mb-4">{succesMessage}</div>
                    )}
                      <h4 className="mb-3">Inscreva-se</h4>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-style"
                          placeholder="Nome Completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <i className="input-icon uil uil-user" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="tel"
                          className="form-style"
                          placeholder="Telefone"
                          value={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                        />
                        <i className="input-icon uil uil-phone" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="email"
                          className="form-style"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <i className="input-icon uil uil-at" />
                      </div>
                      <div className="form-group mt-2">
                        <input
                          type="password"
                          className="form-style"
                          placeholder="Senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="input-icon uil uil-lock-alt" />
                      </div> <br />
                      <button
                        onClick={handleSenha}
                        className="bg-lightblue w-72 py-3 hover:bg-darkblue text-white rounded-md"
                        >
                          Criar conta
                      </button>
                      <p className="mb-0 mt-2 text-center">
                        <a
                          href="./artistas/artista.html"
                          className="link"
                        >
                          Você é artista? Clique aqui
                        </a>
                      </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Senha;