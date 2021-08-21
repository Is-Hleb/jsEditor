import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './js/app.js';

function Root() {

    function handlerBtnAuth () {
        let modal = document.querySelector('.modal'),
            span = document.getElementsByClassName("closeAuth")[0];

        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
        }
        document.addEventListener('keydown', evt => {
            if (evt.keyCode === 27) {
                modal.style.display = "none";
            }
        })
    }

    function handlerBtnReg () {
        let modalReg = document.querySelector('.modalReg'),
            span = document.getElementsByClassName("closeReg")[0];

        modalReg.style.display = "block";
        span.onclick = function() {
            modalReg.style.display = "none";
        }
        document.addEventListener('keydown', evt => {
            if (evt.keyCode === 27) {
                modalReg.style.display = "none";
            }
        })

    }
    return (
        <div>
            <button id="myBtn" onClick={handlerBtnAuth}>Авторизация</button>
            <button id="myBtn" onClick={handlerBtnReg}>Регистрация</button>

            <div id="myModal" className="modal">
                <div id="login-form">
                    <div className="header">
                        <span className="closeAuth">&times;</span>
                        <h1>VI Code - Авторизация</h1>
                    </div>
                    <fieldset>
                        <form action="javascript:void(0);" method="get">
                            <input type="email" required placeholder="Email" />
                                <input type="password" required placeholder="Пароль" />
                                    <input type="submit" value="ВОЙТИ" />
                                        <footer className="clearfix">
                                            <p><span className="info">?</span><a href="#">Забыли пароль?</a></p>
                                        </footer>
                        </form>
                    </fieldset>
                </div>
            </div>


            <div id="myModal" className="modalReg">
                <div id="login-form">
                    <div className="header">
                        <span className="closeReg">&times;</span>
                        <h1>VI Code - Регистрация</h1>
                    </div>
                    <fieldset>
                        <form action="javascript:void(0);" method="post">
                            <input type="email" required placeholder="E-mail" />
                            <input type="password" required placeholder="Пароль" />
                            <input type="password" required placeholder="Повторите пароль" />
                            <input type="submit" value="Регистрация" />
                            <footer className="clearfix">
                                <p><a href="#">Ознакомлен(а) с пользовательским соглашением</a></p>
                            </footer>
                        </form>
                    </fieldset>
                </div>
            </div>

        </div>


    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
