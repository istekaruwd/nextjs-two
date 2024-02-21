import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/node_modules/react-modal-video/css/modal-video.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@/public/assets/css/globals.css';
import { roboto, pathway_gothic_one } from '@/lib/font';

export const metadata = {
    title: 'Portlio - Creative Agency, Corporate and Portfolio React Next Js Template',
    description:
        'Creative Agency, Corporate and Portfolio React Next Js Template',
};

export default function RootLayout({ children }) {
    return (
        <html lang="zxx">
            <body
                className={`${roboto.variable} ${pathway_gothic_one.variable}`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
