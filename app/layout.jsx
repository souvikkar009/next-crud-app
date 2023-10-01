import NavBar from "@components/NavBar";
import "@styles/globals.css";

export const metadata = {
    title: "Next Crud App",
    description: "Next App Crud Operation",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <main className="w-3/5 mx-auto">
                    <NavBar />
                    <div>{children}</div>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
