// import { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// // import { useMutation } from '@tanstack/react-query';
// // import toast from 'react-hot-toast';
// // import { useDispatch, useSelector } from 'react-redux';

// // import { signup } from '../../services/index/users';
// // import { userActions } from '../../store/reducers/userReducers';

// import './register.css';
// const Register = () => {
//     // const navigate = useNavigate();
//     // const dispatch = useDispatch();
//     // const userState = useSelector((state) => state.user);

//     // const { mutate, isLoading } = useMutation({
//     //     mutationFn: ({ name, email, password }) => {
//     //         return signup({ name, email, password });
//     //     },
//     //     onSuccess: (data) => {
//     //         dispatch(userActions.setUserInfo(data));
//     //         localStorage.setItem('account', JSON.stringify(data));
//     //     },
//     //     onError: (error) => {
//     //         toast.error(error.message);
//     //         console.log(error);
//     //     },
//     // });

//     // useEffect(() => {
//     //     if (userState.userInfo) {
//     //         navigate('/');
//     //     }
//     // }, [navigate, userState.userInfo]);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isValid },
//         watch,
//     } = useForm({
//         defaultValues: {
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//         },
//         mode: 'onChange',
//     });

//     const submitHandler = (data) => {
//         // const { name, email, password } = data;
//         // mutate({ name, email, password });
//     };

//     const password = watch('password');

//     return (
//         <section className="sign-up-form-container container mx-auto">
//             <div className="w-100 mx-auto">
//                 <h1 className="fw-bold text-center text-primary">Sign Up</h1>
//                 <form onSubmit={handleSubmit(submitHandler)}>
//                     <div className="d-flex flex-column mb-3 w-100">
//                         <label htmlFor="name" className="d-block fw-semibold">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             {...register('name', {
//                                 minLength: {
//                                     value: 1,
//                                     message: 'Name length must be at least 1 character',
//                                 },
//                                 required: {
//                                     value: true,
//                                     message: 'Name is required',
//                                 },
//                             })}
//                             placeholder="Enter name"
//                             className={`mt-2 rounded-1 px-3 py-3 fw-semibold d-block border ${
//                                 errors.name ? 'border-danger' : 'border'
//                             }`}
//                         />
//                         {errors.name?.message && <p className="text-danger fs-6 mt-1">{errors.name?.message}</p>}
//                     </div>
//                     <div className="d-flex flex-column mb-3 w-100">
//                         <label htmlFor="email" className="d-block fw-semibold">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             {...register('email', {
//                                 pattern: {
//                                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//                                     message: 'Enter a valid email',
//                                 },
//                                 required: {
//                                     value: true,
//                                     message: 'Email is required',
//                                 },
//                             })}
//                             placeholder="Enter email"
//                             className={`mt-2 rounded-1 px-3 py-3 fw-semibold d-block border ${
//                                 errors.email ? 'border-danger' : 'border'
//                             }`}
//                         />
//                         {errors.email?.message && <p className="text-danger fs-6 mt-1">{errors.email?.message}</p>}
//                     </div>
//                     <div className="d-flex flex-column mb-3 w-100">
//                         <label htmlFor="password" className="d-block fw-semibold">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             {...register('password', {
//                                 required: {
//                                     value: true,
//                                     message: 'Password is required',
//                                 },
//                                 minLength: {
//                                     value: 6,
//                                     message: 'Password length must be at least 6 characters',
//                                 },
//                             })}
//                             placeholder="Enter password"
//                             className={`mt-2 rounded-1 px-3 py-3 fw-semibold d-block border ${
//                                 errors.password ? 'border-danger' : 'border'
//                             }`}
//                         />
//                         {errors.password?.message && <p className="text-danger fs-6 mt-1">{errors.password?.message}</p>}
//                     </div>
//                     <div className="d-flex flex-column mb-3 w-100">
//                         <label htmlFor="confirmPassword" className="d-block fw-semibold">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             id="confirmPassword"
//                             {...register('confirmPassword', {
//                                 required: {
//                                     value: true,
//                                     message: 'Confirm password is required',
//                                 },
//                                 validate: (value) => {
//                                     if (value !== password) {
//                                         return 'Passwords do not match';
//                                     }
//                                 },
//                             })}
//                             placeholder="Confirm password"
//                             className={`mt-2 rounded-1 px-3 py-3 fw-semibold d-block border ${
//                                 errors.confirmPassword ? 'border-danger' : 'border'
//                             }`}
//                         />
//                         {errors.confirmPassword?.message && (
//                             <p className="text-danger fs-6 mt-1">{errors.confirmPassword?.message}</p>
//                         )}
//                     </div>
//                     <button
//                         type="submit"
//                         // disabled={!isValid || isLoading}
//                         disabled={!isValid}
//                         className="register-btn bg-primary text-white rounded fw-semibold py-2 px-4 w-100 mb-3"
//                     >
//                         Register
//                     </button>
//                     <p className="text-sm font-semibold text-[#5a7184]">
//                         You have an account?
//                         <Link to="/login" className="text-primary">
//                             Login now
//                         </Link>
//                     </p>
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Register;
