import Head from 'next/head';
import Link from 'next/link';  // Add this import

export default function Homepage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Greater Capilano Roleplay" />
        <meta
          property="og:description"
          content="The first Canadian player-driven roleplay experience. Built by the community, for the community."
        />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/1300146871754297348/1357203733880242240/Group_18_2.png?ex=67ef59f9&is=67ee0879&hm=9226f8fc3908d6f1b0b0b2cab8c4e0af2da154e361c23a2f6cbaae5bd7266758&=&format=webp&quality=lossless&width=726&height=694"
        />
        <meta property="og:url" content="https://greatercapilano.xyz" />
      </Head>

      {/* Rest of your page content */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Untitled-1.png"
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
          {/* Logo and name in top left */}
          <div className="absolute top-6 left-6 flex items-center gap-3">
            <img
              src="/Group 18 (2).png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-white text-xl font-bold">Greater Capilano</h1>
          </div>

          {/* Navigation Tabs - Player Dashboard */}
          <div className="absolute top-6 right-6 flex gap-6">
            <Link
              href="/leodatabase
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-200"
            >
              Law Enforcement MDT
            </Link>
            <Link
              href="/player-dashboard"
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-200"
            >
              Player Dashboard
            </Link>
          </div>

          {/* Title, Description, and Button - Centered */}
          <div className="flex flex-col items-center justify-center flex-1">
            <h2 className="text-white text-3xl font-extrabold drop-shadow-lg">
              Welcome to Greater Capilano
            </h2>
            <p className="text-white text-lg md:text-xl mt-2 drop-shadow-md">
              We're the first Canadian player-driven roleplay experience. Built
              by the community, for the community.
            </p>
            <Link
              href="https://discord.gg/CBYmAQ2bNk"
              className="bg-red hover:bg-grey text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 transform hover:scale-105 border-2 border-white shadow-lg mt-6"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Bottom Boxes */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 mt-auto">
          <div className="bg-gradient-to-b from-black/80 to-gray-900/80 text-white p-4 rounded-lg flex-1 shadow-lg">
            <h3 className="text-xl font-semibold">Information</h3>
            <p className="mt-2 text-sm">
              Welcome to Greater Capilano, the first ER:LC private roleplay
              server focused on letting our playbase have a responsibility in
              crafting our community.
            </p>
          </div>
          <div className="bg-gradient-to-b from-black/80 to-gray-900/80 text-white p-4 rounded-lg flex-1 shadow-lg">
            <h3 className="text-xl font-semibold">Opportunities</h3>
            <p className="mt-2 text-sm">- Create your own character and develop your storyline</p>
            <p className="mt-2 text-sm">- Join a department and build a career</p>
            <p className="mt-2 text-sm">- Create and run your own company.</p>
          </div>
        </div>
      </div>
    </>
  );
}
