import BlogRecentPost from '@/components/BlogSidebar/BlogRecentPost';
import BlogPostArchives from '@/components/BlogSidebar/BlogPostArchives';
import BlogPostCategories from '@/components/BlogSidebar/BlogPostCategories';
import BlogTag from '@/components/BlogSidebar/BlogTag';

export default function BlogSidebar() {
    return (
        <div className="sidebar-area">
            <BlogRecentPost />
            <BlogPostArchives />
            <BlogPostCategories />
            <BlogTag />
        </div>
    );
}
