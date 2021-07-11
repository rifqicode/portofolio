export default function Navigation() {
    return (
        <nav className="bg-white-900 shadow-sm border-b-2">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex m-auto space-x-10">
                    <div className="text-black px-3 py-2 rounded-md text-sm font-medium"> Profile </div>
                    <div className="text-black px-3 py-2 rounded-md text-sm font-medium"> Skill </div>
                    <div className="text-black px-3 py-2 rounded-md text-sm font-medium"> Sertifikat </div>
                    <div className="text-black px-3 py-2 rounded-md text-sm font-medium"> Portofolio </div>
                    <div className="text-black px-3 py-2 rounded-md text-sm font-medium"> Contact </div>
                </div>
            </div>
        </nav>
    )
}