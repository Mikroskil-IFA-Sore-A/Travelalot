import { useState, useRef } from "react";
import useGlobeScene from "@hooks/useGlobeScene";

export default function () {

    /** 
     * useState: diurus React re-render
     * useRef  : diabaikan React re-render
     * Jika kedua renderer (react renderer dan Three.js rendering pipeline) mengubah objek sama (maka akan terjadi semamacam race condition?)
     * makanya kita pakai RefObject supaya diabaikan react (dalam konteks rendering ya) karena dimiliki oleh Three.js
     */

    const [ready, setReady] = useState(false);
    const globeRef = useRef<HTMLDivElement | null>(null);
    
    useGlobeScene(globeRef as React.RefObject<HTMLDivElement>, () => setReady(true));

    return (
        <section className="relative w-full min-h-150 overflow-hidden flex items-center">
            <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Planning Your{" "}
                    <span className="text-blue-500">Vacation?</span> 
                </h1>

                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
                    Discover our top destinations and start planning your dream
                </p>

                <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
                    Whether you're looking for a relaxing beach getaway, a cultural city experience,
                    or an adventurous mountain trek, we've got something for everyone
                </p>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2
                            w-full h-full
                            ">
                <div className="h-full w-150 me-10 ms-auto">
                    <div ref={globeRef} 
                         className={`h-full w-full
                                     xl:scale-[100%] lg:scale-[90%] md:scale-[80%] sm:scale-[70%] scale-[60%]
                                     transition-opacity ${ready ? 'opacity-100' : 'opacity-0'} duration-500`} />
                </div>
            </div>
        </section>
    );
}
