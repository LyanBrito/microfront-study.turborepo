import dynamic from 'next/dynamic';
import React from 'react';

const RemoteWebComponent = dynamic(() => import('web/ComponenteWeb'), {
    ssr: false,
    loading: () => <p>Carregando componente remoto...</p>,
});

const DocsHomePage: React.FC = () => {
    return (
        <div>
            <h1>Host App (Docs)</h1>
            <p>Componente carregado via Module Federation:</p>
            <RemoteWebComponent />
        </div>
    );
};

export default DocsHomePage;