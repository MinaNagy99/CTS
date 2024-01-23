import { FiMessageSquare, FiEdit2, FiTrash } from 'react-icons/fi';
import CommentForm from './CommentForm';

function Comment({
    comment,
    loggedInUserId,
    affectedComment,
    setAffectedComment,
    addComment,
    updateComment,
    deleteComment,
    parentId = null,
}) {
    const isUserLoggedIn = Boolean(loggedInUserId);
    const commentBelongsToUser = loggedInUserId === comment.user._id;
    const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === comment._id;
    const isEditing = affectedComment && affectedComment.type === 'editing' && affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;

    return (
        <div className="d-flex flex-nowrap align-items-start gap-md-3 gap-2 rounded bg-light py-2">
            <img
                src="/assets/portfolio/4.webp"
                alt="user profile"
                className="comment-user-porfile-img rounded-5 object-fit-cover"
            />
            <div className="d-flex flex-column">
                <h5 className="fs-6 fw-bold">{comment.user.name}</h5>
                <span className="fs-6 text-black-50">
                    {new Date(comment.createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                    })}
                </span>
                {!isEditing && <p className="mt-1 fs-5 fw-normal text-black">{comment.desc}</p>}
                {/* <p className="mt-1 fs-5 fw-normal text-black">{comment.desc}</p> */}
                {isEditing && (
                    <CommentForm
                        btnLabel="Update"
                        formSubmitHanlder={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText={comment.desc}
                    />
                )}
                <div className="mt-3 mb-3 d-flex align-items-center">
                    {isUserLoggedIn && (
                        <button
                            className="d-flex align-items-center gap-2 btn"
                            onClick={() => setAffectedComment({ type: 'replying', _id: comment._id })}
                        >
                            <FiMessageSquare className="comment-icons" />
                            <span>Reply</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                            <button
                                className="d-flex align-items-center gap-2 btn"
                                onClick={() => setAffectedComment({ type: 'editing', _id: comment._id })}
                            >
                                <FiEdit2 className="comment-icons" />
                                <span>Edit</span>
                            </button>
                            <button
                                className="d-flex align-items-center gap-2 btn"
                                onClick={() => deleteComment(comment._id)}
                            >
                                <FiTrash className="comment-icons" />
                                <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying && (
                    <CommentForm
                        btnLabel="Reply"
                        formSubmitHanlder={(value) => addComment(value, repliedCommentId, replyOnUserId)}
                        formCancelHandler={() => setAffectedComment(null)}
                    />
                )}
                {/* {replies.length > 0 && (
                    <div>
                        {replies.map((reply) => (
                            <Comment
                                key={reply._id}
                                addComment={addComment}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                comment={reply}
                                deleteComment={deleteComment}
                                LoggedInUserId={LoggedInUserId}
                                replies={[]}
                                updateComment={updateComment}
                                parentId={comment._id}
                            />
                        ))}
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default Comment;
