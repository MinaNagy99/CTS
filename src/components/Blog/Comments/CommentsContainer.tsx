// import { useEffect, useState } from 'react';
// import CommentForm from './CommentForm.js';
// import { getCommentsData } from '../../../data/comments.js';
// import Comment from './Comment.js';

// function CommentsContainer({ className, loggedInUserId }) {
//     const [comments, setComments] = useState([]);
//     const mainComments = comments.filter((comment) => comment.parent === null);
//     const [affectedComment, setAffectedComment] = useState(null);

//     useEffect(() => {
//         (async () => {
//             const commentsData = await getCommentsData();
//             setComments(commentsData);
//         })();
//     }, []);

//     const addCommentHandler = (value, parent = null, replyOnUser = null) => {
//         const newComment = {
//             _id: '10',
//             user: {
//                 _id: 'a',
//                 name: 'Mohammad Rezaii',
//             },
//             desc: value,
//             post: '1',
//             parent: parent,
//             replyOnUser: replyOnUser,
//             createdAt: '2022-12-31T17:22:05.092+0000',
//         };
//         setComments((curState) => {
//             return [newComment, ...curState];
//         });
//         setAffectedComment(null);
//     };

//     const updateCommentHandler = (value, commentId) => {
//         const updatedComments = comments.map((comment) => {
//             if (comment._id === commentId) {
//                 return { ...comment, desc: value };
//             }
//             return comment;
//         });
//         setComments(updatedComments);
//         setAffectedComment(null);
//     };

//     const deleteCommentHandler = (commentId) => {
//         const updatedComments = comments.filter((comment) => {
//             return comment._id !== commentId;
//         });
//         setComments(updatedComments);
//     };

//     return (
//         <>
//             <div className={`${className}`}>
//                 <CommentForm btnLabel={'Send'} formSubmitHanlder={addCommentHandler} />
//             </div>
//             <div className="space-y-4 mt-8">
//                 {mainComments.map((comment) => (
//                     <Comment
//                         key={comment._id}
//                         comment={comment}
//                         loggedInUserId={loggedInUserId}
//                         affectedComment={affectedComment}
//                         setAffectedComment={setAffectedComment}
//                         addComment={addCommentHandler}
//                         updateComment={updateCommentHandler}
//                         deleteComment={deleteCommentHandler}
//                         // replies={comment.replies}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// }

// export default CommentsContainer;
