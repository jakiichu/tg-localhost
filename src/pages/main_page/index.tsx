import {useForm} from "react-hook-form";
import {useEffect} from "react";

const MainPage = () => {
    const form = useForm<{ url: string }>()
    useEffect(() => {
        form.setValue('url', localStorage.getItem('url') ?? '')
    }, []);

    const onSubmit = form.handleSubmit(async (data) => {
        localStorage.setItem('url', data.url)
        console.log(data.url)
        window.location.href = (data.url)
    })

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <button type='button' className='p-2 bg-gray-900 text-white rounded' onClick={() => {
                window.location.href = 'http://localhost:5173/'
            }}>localhost:5173
            </button>
            <form className='flex flex-col gap-2 mt-4' onSubmit={onSubmit}>
                <input type="text" className='border-gray-800 p-1 border-2' {...form.register('url')}/>
                <button type='submit' className='p-2 bg-gray-900 text-white rounded'>Отправить
                </button>
            </form>
        </div>
    );
};

export default MainPage;
