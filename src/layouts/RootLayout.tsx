import { Outlet } from "react-router-dom";
import BackgroundCanvas from "./BackgroundCanvas";

export default function RootLayout() {
    return (
        <div className="relative min-h-screen">
            <BackgroundCanvas />
            <main className="relative z-20 p-4">
                <Outlet />
            </main>
        </div>
    );
}
