import '../styles/register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

    const [userName, setUserName] = useState("")
    const [userPassword, setuserPassword] = useState("")
    const [userPassword2, setuserPassword2] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(userName === ""){
            window.alert("É preciso digitar um nome de usuário")
        }

        if(userPassword === ""){
            window.alert("É preciso digitar uma senha")
        }

        if(userPassword != userPassword2){
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
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    name="userName"
                    value={userName}
                    placeholder="Nome de Usuário"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
                    name="userPassword"
                    value={userPassword}
                    placeholder="Senha"
                    onChange={(e) => setuserPassword(e.target.value)}
                />
                <input
                    type="password"
                    className="input"
                    name="userPassword2"
                    value={userPassword2}
                    placeholder="Senha Novamente"
                    onChange={(e) => setuserPassword2(e.target.value)}
                />
                <button
                    type="submit"
                    className="button"
                >Cadastrar</button>
            </form>
        </div>
    );
}
