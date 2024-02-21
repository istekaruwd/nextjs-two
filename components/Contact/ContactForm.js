'use client';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(JSON.stringify(data));
        toast.success('Message Submited');
    };

    return (
        <div className="col-lg-9">
            <ToastContainer />
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="NAME"
                                {...register('name', {
                                    required: 'Name is required',
                                })}
                                aria-invalid={errors.name ? 'true' : 'false'}
                            />
                            {errors.name && (
                                <span className="text-danger mt-2">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="EMAIL"
                                {...register('email', {
                                    pattern: /\S+@\S+\.\S+/,
                                    required: 'Email Address is required',
                                })}
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            {errors.email && (
                                <span className="text-danger mt-2">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="suject"
                                placeholder="SUBJECT"
                                {...register('subject', {
                                    required: 'Subject is required',
                                })}
                                aria-invalid={errors.subject ? 'true' : 'false'}
                            />
                            {errors.subject && (
                                <span className="text-danger mt-2">
                                    {errors.subject.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input
                                type="url"
                                className="form-control"
                                id="website"
                                placeholder="WEBSITE"
                                {...register('website', {
                                    required: 'Enter URL link',
                                })}
                                aria-invalid={errors.website ? 'true' : 'false'}
                            />
                            {errors.website && (
                                <span className="text-danger mt-2">
                                    {errors.website.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                rows="10"
                                id="message"
                                placeholder="MESSAGE"
                                {...register('message', {
                                    required: 'Message is required',
                                })}
                                aria-invalid={errors.message ? 'true' : 'false'}
                            />
                            {errors.message && (
                                <span className="text-danger mt-2">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button className="tem-btn" type="submit">
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
