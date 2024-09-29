import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="bg-white w-full h-screen py-20 flex justify-center items-center">
            <div className="flex flex-col justify-evenly items-center text-center w-[50vw] h-[50vh] bg-black text-2xl text-white max-sm:w-[90vw]">
                <h1>Oops!</h1>
                <p className="w-[80%]">Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>

        </div>
    );
}

export default ErrorPage