"use client";

import dynamic from "next/dynamic";

const WebApp = dynamic(() => import("web/App"), { ssr: false });

export default function DocsPage() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Docs</h1>
            <p>App docs rodando no localhost:3001</p>

            <div style={{ marginTop: "2rem" }}>
                <h2>Conteúdo remoto (web):</h2>
                <WebApp />
            </div>
        </main>
    );
}
