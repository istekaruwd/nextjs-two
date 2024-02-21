'use client';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CommentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(JSON.stringify(data));
        toast.success('Comment Submited');
    };

    return (
        <div className="comment-respond">
            <ToastContainer />
            <h2 className="comment-reply-title">Leave a comment</h2>
            <p className="comment-notes">
                Fill out all required fields to send a message. You have to
                login to your wordpress account to post any comment. Please dont
                spam, thank you!
            </p>
            <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        rows="6"
                        className="form-control"
                        {...register('message', {
                            required: 'Message is required',
                        })}
                        aria-invalid={errors.message ? 'true' : 'false'}
                    />
                </div>
                {errors.message && (
                    <span className="text-danger mt-2">
                        {errors.message.message}
                    </span>
                )}
                <div className="form-group">
                    <label htmlFor="fullName">Name:</label>
                    <input
                        id="fullName"
                        type="text"
                        className="form-control"
                        {...register('fullName', {
                            required: 'Full Name is required',
                        })}
                        aria-invalid={errors.fullName ? 'true' : 'false'}
                    />
                </div>
                {errors.fullName && (
                    <span className="text-danger mt-2">
                        {errors.fullName.message}
                    </span>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        {...register('email', {
                            pattern: /\S+@\S+\.\S+/,
                            required: 'Email Address is required',
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                </div>
                {errors.email && (
                    <span className="text-danger mt-2">
                        {errors.email.message}
                    </span>
                )}
                <div className="comment-btn">
                    <button className="tem-btn" type="submit">
                        <span>Post Comment</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
