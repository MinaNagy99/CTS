import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { PortfolioContext, PortfolioContextValue, SiteType } from '../Context/WebsiteContext';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateForm: React.FC = () => {
    const { id } = useParams();
    const { getSiteById, updateWebsite } = useContext(PortfolioContext) as PortfolioContextValue;
    const [Site, setSite] = useState<SiteType>();
    const [IsLoading, setIsLoading] = useState(false);
    const navigator = useNavigate();
    interface FormDataValues {
        title?: string;
        titleInArabic?: string;
        link?: string;
        logo?: FileList;
        mainImg?: FileList;
        previewImgs?: FileList;
    }
    const websiteFormik = useFormik({
        initialValues: {
            title: '',
            titleInArabic: '',
            link: '',
            logo: undefined as FileList | undefined,
            mainImg: undefined as FileList | undefined,
            previewImgs: undefined as FileList | undefined,
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .max(50, 'The title must not exceed 50 characters')
                .min(3, 'The name must be at least 3 letters long'),
            titleInArabic: Yup.string()
                .max(50, 'The title must not exceed 50 characters')
                .min(3, 'The name must be at least 3 letters long'),
            link: Yup.string()
                .min(3, 'The link must be at least 3 characters long')
                .matches(
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
                    'Invalid link format. Please enter a valid URL.'
                ),
            mainImg: Yup.mixed().test('fileType', 'image only', (file) => {
                if (file) {
                    return ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml', 'image/webp'].includes(
                        (file as FileList)[0].type
                    );
                }
                return true; // No file selected, so no type to check
            }),
            logo: Yup.mixed().test('fileType', 'images only', (file) => {
                if (file) {
                    // Allow any image MIME type
                    return ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml', 'image/webp'].includes(
                        (file as FileList)[0].type
                    );
                }
                return true; // No file selected, so no type to check
            }),
            previewImgs: Yup.array().test({
                name: 'fileType',
                message: 'All files must be images',
                test: (files) => {
                    if (!files) {
                        return true; // No files, so nothing to check
                    }

                    return Array.from(files).every((file) => {
                        if (!file) {
                            return true; // Skip null/undefined files
                        }

                        return ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml', 'image/webp'].includes(file.type);
                    });
                },
            }),
        }),
        onSubmit: async (values: FormDataValues) => {
            setIsLoading(true);
            const { title, mainImg, titleInArabic, logo, link, previewImgs } = values;

            const formData = new FormData();
            if (title) {
                formData.append('title', title);
            }
            if (titleInArabic) {
                formData.append('titleInArabic', titleInArabic);
            }
            if (logo) {
                formData.append('logo', logo[0]);
            }
            if (link) {
                formData.append('link', link);
            }
            if (previewImgs) {
                for (let i = 0; i < previewImgs.length; i++) {
                    formData.append('previewImgs', previewImgs[i]);
                }
            }
            if (mainImg) {
                formData.append('mainImg', mainImg[0]);
            }
            if (id) {
                await updateWebsite(id, formData);
            }
            setIsLoading(false);
            navigator('/dashboard');
        },
    });

    useEffect(() => {
        if (id) {
            setSite(getSiteById(id));
        }
    }, [id, getSiteById]);

    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center  bg-gray-200">
                <form
                    encType="multipart/form-data"
                    onSubmit={websiteFormik.handleSubmit}
                    className="mt-5 w-full max-w-xl rounded-3xl border-4 border-dotted border-black bg-gray-100 px-20 pb-5 pt-10"
                >
                    <div className="-mx-3 mb-6 flex flex-wrap">
                        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                                Title
                            </label>
                            <input
                                className={`${
                                    websiteFormik.errors.title && websiteFormik.touched.title
                                        ? 'border-red-500'
                                        : 'border-gray-200'
                                } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                                id="grid-first-name"
                                type="text"
                                name="title"
                                // value={Site?.title}
                                onChange={(event) => {
                                    websiteFormik.setFieldValue('title', event.currentTarget.value);
                                }}
                                onBlur={websiteFormik.handleBlur}
                                placeholder={Site?.title}
                            />
                            {websiteFormik.errors.title && websiteFormik.touched.title && (
                                <p className="text-xs italic text-red-500">{websiteFormik.errors.title}</p>
                            )}
                        </div>
                        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                            <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                                titleInArabic
                            </label>
                            <input
                                className={`${
                                    websiteFormik.errors.titleInArabic && websiteFormik.touched.titleInArabic
                                        ? 'border-red-500'
                                        : 'border-gray-200'
                                } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                                id="grid-first-name"
                                type="text"
                                name="titleInArabic"
                                // value={Site?.title}
                                onChange={(event) => {
                                    websiteFormik.setFieldValue('titleInArabic', event.currentTarget.value);
                                }}
                                onBlur={websiteFormik.handleBlur}
                                placeholder={Site?.titleInArabic}
                            />
                            {websiteFormik.errors.titleInArabic && websiteFormik.touched.titleInArabic && (
                                <p className="text-xs italic text-red-500">{websiteFormik.errors.titleInArabic}</p>
                            )}
                        </div>
                    </div>
                    <div className="w-full px-3">
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                            Main Img
                        </label>
                        <input
                            className={`${
                                websiteFormik.errors.mainImg && websiteFormik.touched.mainImg
                                    ? 'border-red-500'
                                    : 'border-gray-200'
                            } mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none`}
                            id="grid-password"
                            type="file"
                            name="mainImg"
                            onChange={(event) => {
                                console.log('from mainImg change');

                                websiteFormik.setFieldValue('mainImg', event.currentTarget.files);
                            }}
                            onBlur={websiteFormik.handleBlur}
                        />
                        {websiteFormik.errors.mainImg && websiteFormik.touched.mainImg && (
                            <p className="text-xs italic text-red-500">
                                {websiteFormik.errors.mainImg && `${websiteFormik.errors.mainImg}`}
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3">
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">logo</label>
                        <input
                            className={`${
                                websiteFormik.errors.logo && websiteFormik.touched.logo
                                    ? 'border-red-500'
                                    : 'border-gray-200'
                            } mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none`}
                            id="grid-password"
                            type="file"
                            name="logo"
                            onChange={(event) => {
                                websiteFormik.setFieldValue('logo', event.currentTarget.files);
                            }}
                            onBlur={websiteFormik.handleBlur}
                        />
                        {websiteFormik.errors.logo && websiteFormik.touched.logo && (
                            <p className="text-xs italic text-red-500">
                                {websiteFormik.errors.logo && `${websiteFormik.errors.logo}`}
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3">
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                            preview Image
                        </label>
                        <input
                            multiple
                            className={`${
                                websiteFormik.errors.previewImgs && websiteFormik.touched.previewImgs
                                    ? 'border-red-500'
                                    : 'border-gray-200'
                            } mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none`}
                            id="grid-password"
                            type="file"
                            name="previewImgs"
                            onChange={(event) => {
                                const files = event.currentTarget.files;
                                console.log(files);

                                if (files) {
                                    const filesArray = Array.from(files);
                                    console.log(filesArray);

                                    websiteFormik.setFieldValue('previewImgs', filesArray);
                                } else {
                                    // Handle the case where files are null (if needed)
                                    // For example, you might want to set an empty array:
                                    websiteFormik.setFieldValue('previewImgs', []);
                                }
                            }}
                            onBlur={websiteFormik.handleBlur}
                        />
                        {websiteFormik.errors.previewImgs && websiteFormik.touched.previewImgs && (
                            <p className="text-xs italic text-red-500">
                                {websiteFormik.errors.previewImgs && `${websiteFormik.errors.previewImgs}`}
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3">
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">link</label>
                        <input
                            className={`${
                                websiteFormik.errors.title && websiteFormik.touched.title
                                    ? 'border-red-500'
                                    : 'border-gray-200'
                            } mb-3 block w-full appearance-none rounded border bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
                            id="grid-first-name"
                            type="text"
                            name="link"
                            onChange={websiteFormik.handleChange}
                            onBlur={websiteFormik.handleBlur}
                            placeholder={Site?.link}
                        />
                        {websiteFormik.errors.link && websiteFormik.touched.link && (
                            <p className="text-xs italic text-red-500">{websiteFormik.errors.link}</p>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mb-2 me-2 mt-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {IsLoading && 'loading'} {!IsLoading && 'update website'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
