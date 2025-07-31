import Image from "next/image";

export default function Footer() {

    return(
        <div className="bg-black text-white flex flex-col items-center justify-center p-6 space-y-4">
            <p>© 2023 Keyco. All rights reserved.</p>
            <Image
                src="/images/logoDark.png"
                alt="Logo"
                width={100}
                height={100}
            />
        </div>
    );
}