import '../styles/register.css';
import { useState } from 'react';
import axios from 'axios';
import Containers from '../components/componentImages/VariosContainer.png';
import Icon from '../components/IconBlack';

export default function Register() {

    const [userName, setUserName] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [userPort, setuserPort] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [userPassword2, setuserPassword2] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(userName === ""){
            window.alert("É preciso digitar um nome")
        }

        if(userPassword === ""){
            window.alert("É preciso digitar uma senha")
        }

        if(userPassword !== userPassword2){
            window.alert("Campos de senha diferentes")
        }

        let data = {
            novo_login : userName,
            nova_senha: userPassword
        }

        try {
            const response = await axios.post('http://localhost:8000/api/registerUser',
                data,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
            );
            if (response.data["sucesso"] === 1) {
                window.alert("Usuário registrado com sucesso");
            } else {
                window.alert("Erro ao registrar usuário: " + response.data["erro"]);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            window.alert("Erro na comunicação com o servidor: " + error.message);
        }
    }

    return (
        <div className="page">
            <p className='header-text'><Icon/>MyPort Manager</p>
                <div className="login">
                    <div className="page_title">
                        Cadastrar Usuário
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="userName"
                            value={userName}
                            placeholder="Nome"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="userEmail"
                            value={userEmail}
                            placeholder="Email"
                            onChange={(e) => setuserEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            name="userPort"
                            value={userPort}
                            placeholder="Nome do Porto"
                            onChange={(e) => setuserPort(e.target.value)}
                        />
                        <input
                            type="password"
                            name="userPassword"
                            value={userPassword}
                            placeholder="Senha"
                            onChange={(e) => setuserPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            name="userPassword2"
                            value={userPassword2}
                            placeholder="Senha Novamente"
                            onChange={(e) => setuserPassword2(e.target.value)}
                        />
                        <button
                            type="submit"
                        >Cadastrar</button>
                    </form>
                </div>
            <img src={Containers} alt='Varios Container' style={{ maxWidth: '33%', height: '100vh' }}/>
        </div>
    );
}
