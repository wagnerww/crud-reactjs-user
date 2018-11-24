import React from 'react';
import Main from '../template/main/main';

export default props =>
    <Main icon="home" title="Inicio" subtitle="alguma coisa">
        <div className="display-4">Bem vindo!</div>
        <hr />
        <p className="mb-0">Sistema para crud de usuários desenvolvido em react</p>
    </Main>
