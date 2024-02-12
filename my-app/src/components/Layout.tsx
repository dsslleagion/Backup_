// Layout.tsx
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto">
      {/* Cabeçalho */}
      <header className="py-4">
        <h1 className="text-3xl font-bold">Meu Aplicativo</h1>
      </header>

      {/* Conteúdo das páginas */}
      <main className="py-8">{children}</main>

      {/* Rodapé */}
      <footer className="py-4 text-center text-gray-500">
        © 2024 Meu Aplicativo. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Layout;
