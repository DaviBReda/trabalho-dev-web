import '../styles/login.css';
import { useState } from 'react';
import axios from 'axios';
import { login } from '../helpers/Utils';
import Icon from '../components/Icon';
import BigShip from '../components/componentImages/BigShip.jpeg'

export default function Login() {

    const [userName, setUserName] = useState("")
    const [userPassword, setuserPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(userName === ""){
            window.alert("É preciso digitar um nome de usuário")
        }

        if(userPassword === ""){
            window.alert("É preciso digitar uma senha")
        }

        axios(
            {
                method: 'post',
                url: 'http://localhost:8000/api/login',
                auth: {
                    username: userName,
                    password: userPassword
                }

            }).then((response) => {
                if(response.data["sucesso"] === 1) {
                    login(userName, userPassword)
                    window.alert("Usuário autenticado com sucesso")
                }else{
                    window.alert("Erro ao autenticar usuário: \n" + response.data["error"])
                }
            }).catch ((error) => {
                console.error("Erro na requisição:", error);
                window.alert("Erro na comunicação com o servidor: " + error.message);
            })
    }

    return (
        <div className="page">
                <img src={BigShip} alt='Navio Grandão' style={{ maxWidth: '33%', height: '100vh' }}/>
            <div className="login">
                <div className="page_title">
                    <Icon/> MyPort Manager
                </div>
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
                    <button
                        type="submit"
                    >Login</button>
                </form>
            </div>
        </div>
    );
}
