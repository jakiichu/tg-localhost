const MainPage = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <button className='p-2 bg-gray-900 text-white rounded' onClick={()=>{
                window.location.href = 'http://localhost:5173/'
            }}>localhost:5173</button>
        </div>
    );
};

export default MainPage;
