import PageHeader from '@/components/PageHeader/PageHeader';
import Blog from '@/components/Blog/Blog';

export const metadata = {
    title: 'Blog - Portlio',
    description:
        'Creative Agency, Corporate and Portfolio React Next Js Template',
};

export default function page() {
    return (
        <main>
            <PageHeader heading="Our Blog" title="Blog" />
            <Blog />
        </main>
    );
}
