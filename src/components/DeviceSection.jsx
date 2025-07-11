import bgImage from "../assets/backgroundImg.webp";
import { Link } from "react-router-dom";

export default function DevicesSection() {
    return (
        <section
            className="relative bg-fixed bg-cover bg-center text-white py-32 px-4 text-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#23243B]/60"></div>

            {/* Content */}
            <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold mb-4">sApp is available for all devices</h2>
                <p className="mb-6 text-lg text-white/90">
                    Enjoy the versatility of sApp, designed to seamlessly function on all devices.
                    Whether you're using a smartphone, tablet, or desktop, download the app now and
                    experience its powerful features anytime, anywhere!
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <Link to="/downloadpage">
                        <img src="/google_play.png" alt="Google Play" className="h-14 cursor-pointer rounded-xl" />
                    </Link>
                    <Link to="/downloadpage">
                        <img src="/appstore.png" alt="App Store" className="h-14 cursor-pointer rounded-xl" />
                    </Link>
                </div>
                <p className="mt-4 italic text-sm text-white/80">
                    * Available on iPhone, iPad and all Android devices
                </p>
            </div>
        </section>
    );
}
