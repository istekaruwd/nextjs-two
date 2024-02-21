import Image from 'next/image';
import Link from 'next/link';
import CommentForm from '@/components/BlogSingle/CommentForm';

export default function BlogComments({ singlePostData }) {
    return (
        <div className="comments-area">
            <h3 className="comments-title">
                {(() => {
                    if (
                        singlePostData.comments &&
                        singlePostData.comments.length > 1
                    )
                        return `${singlePostData.comments.length} Comments`;
                    if (
                        singlePostData.comments &&
                        singlePostData.comments.length === 1
                    )
                        return `${singlePostData.comments.length} Comment`;
                    else return '0 Comment';
                })()}
            </h3>
            <ol className="comment-list">
                {
                    /* Single Comment */
                    singlePostData.comments &&
                        singlePostData.comments.map((value, index) => (
                            <li key={index} className="single-comment">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Link
                                            href={`/blog/${singlePostData.slug}`}
                                            className="comment-thumb"
                                        >
                                            <Image
                                                src={value.commenterThumb}
                                                width={100}
                                                height={100}
                                                alt={value.commenterName}
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="comment-heading">
                                            <h4>
                                                {value.commenterName} {' - '}
                                                <span>{value.commentDate}</span>
                                            </h4>
                                        </div>
                                        <div className="comment-text">
                                            {value.commentText}
                                        </div>
                                        <div className="reply">
                                            <Link
                                                href={`/blog/${singlePostData.slug}`}
                                            >
                                                Reply
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                }
            </ol>
            {/* Comment Form */}
            <CommentForm />
        </div>
    );
}
