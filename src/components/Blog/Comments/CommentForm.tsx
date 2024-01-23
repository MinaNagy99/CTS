import { useState } from 'react';

import './comments.css';

function CommentForm({ btnLabel, formSubmitHanlder, formCancelHandler = null, initialText = '' }) {
    const [value, setValue] = useState(initialText);

    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHanlder(value);
        setValue('');
    };

    return (
        <form className="p-0" onSubmit={submitHandler}>
            <div className="d-flex flex-column justify-content-end border border-primary rounded p-2">
                <textarea
                    className="w-100 comment-form-textarea border-0"
                    rows="5"
                    placeholder="Leave your comment here..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="d-flex gap-1 align-items-end pt-1">
                    {formCancelHandler && (
                        <button
                            onClick={formCancelHandler}
                            className="px-3 py-1 rounded btn btn-danger btn-sm text-white fw-semibold "
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        // disabled={loading}
                        type="submit"
                        className="px-3 py-1 rounded btn btn-primary btn-sm text-white fw-semibold "
                    >
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default CommentForm;
