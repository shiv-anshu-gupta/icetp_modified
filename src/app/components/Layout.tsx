import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode; // Define children as a prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
                <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;