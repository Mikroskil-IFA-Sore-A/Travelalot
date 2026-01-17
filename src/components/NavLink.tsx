import { NavLink as RouterNavLink } from 'react-router-dom';

export default function({ to, children }: { to: string; children: React.ReactNode }) {
  return (
        // isActive utk tau apakah kita berada pada link itu (not literallt there karena ini SPA)
        // Kasih warna untuk yang aktif (yang dipilih)
        <RouterNavLink
            to={to}
            className={({ isActive }) => `relative px-3 py-2 font-medium transition-colors rounded-md 
                                          ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900 hover-bg-gray-100'}
                                          `}>
            {({ isActive }) => (
                <>
                    {children}
                    {/* 
                        Underline
                        Disini kita scale, basically cara hide dan unhide underline nya --
                        kalau ingin memperkecil underline-nya tinggal kamu perkecil rentang-nya
                    */}
                    <span className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gray-900 transition-transform duration-300
                                     ${isActive ? "scale-x-100" : "scale-x-0"}
                                     `} />
                </>
            )}
        </RouterNavLink>
    );
}